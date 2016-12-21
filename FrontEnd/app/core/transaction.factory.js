(function() {
    'use strict';

    angular
        .module('app')
        .factory('transactionFactory', transactionFactory);

    transactionFactory.$inject = ['$http'];

    /* @ngInject */
    function transactionFactory($http) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();