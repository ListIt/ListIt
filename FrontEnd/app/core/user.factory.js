(function() {
    'use strict';

    angular
        .module('app')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function userFactory($http, apiUrl) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(user) {
            return $http.post(apiUrl + '/users', user);
        }

        function getAll() {
            return $http.get(apiUrl + '/users');
        }

        function getById(id) {
            return $http.get(apiUrl + '/users/' + id);
        }

        function update(id, user) {
            return $http.put(apiUrl + '/users/' + id, user);
        }

        function remove(id) {
            return $http.delete(apiUrl + '/users/' + id);
        }
    }
})();