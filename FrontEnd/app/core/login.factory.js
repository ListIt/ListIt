(function() {
    'use strict';

    angular
        .module('app')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['$http'];

    /* @ngInject */
    function loginFactory($http) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();