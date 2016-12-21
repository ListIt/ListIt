(function() {
    'use strict';

    angular
        .module('app')
        .factory('messagingFactory', messagingFactory);

    messagingFactory.$inject = ['$http'];

    /* @ngInject */
    function messagingFactory($http) {
        var service = {
            getAll: getAll
        };
        return service;

        ////////////////

        function getAll() {
        }
    }
})();