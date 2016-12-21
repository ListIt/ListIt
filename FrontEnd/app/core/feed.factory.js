(function() {
    'use strict';

    angular
        .module('app')
        .factory('feedFactory', feedFactory);

    feedFactory.$inject = ['$http'];

    /* @ngInject */
    function feedFactory($http) {
        var service = {
            getAll: getAll
        };
        return service;

        ////////////////

        function getAll() {
        }
    }
})();