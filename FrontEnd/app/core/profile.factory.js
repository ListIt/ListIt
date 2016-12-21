(function() {
    'use strict';

    angular
        .module('app')
        .factory('profileFactory', profileFactory);

    profileFactory.$inject = ['$http'];

    /* @ngInject */
    function profileFactory($http) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();