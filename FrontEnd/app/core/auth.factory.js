(function() {
    'use strict';

    angular
        .module('app')
        .factory('authFactory', authFactory);

    authFactory.$inject = ['apiUrl', '$http', '$q', 'localStorageService'];

    /* @ngInject */
    function authFactory(apiUrl, $http, $q, localStorageService) {
        var service = {
            register: register,
            login: login,
            initialize: initialize,
            logout: logout,

            isLoggedIn: false,
            username: ''
        };
        return service;

        ////////////////

        /*
        {
			email: '',
			password: '',
			confirmPassword: ''
        }
        */

        function register(registration) {
            return $http.post(apiUrl + '/users/register', registration);
        }

        function login(username, password) {
            logout();

            var data = 'grant_type=password' +
                '&username=' + username +
                '&password=' + password;

            return $http
                .post(apiUrl + '/users/login', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function(response) {
                	localStorageService.set('authorizationData', {
                		token: response.data.access_token,
                		username: username
                	});

                	service.isLoggedIn = true;
                	service.username = username;

                	return response.data;
                });
        }

        function initialize() {
        	// grab token from local storage
        	var authData = localStorageService.get('authorizationData');

        	// if there is a token, tell the app that
        	// there is a logged in user
        	if(authData) {
        		service.isLoggedIn = true;
        		service.username = username;
        	}
        }

        function logout() {
        	localStorageService.remove('authorizationData');
        	service.isLoggedIn = false;
        	service.username = '';
        }
    }
})();
