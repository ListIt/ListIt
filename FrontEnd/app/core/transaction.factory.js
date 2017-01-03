(function() {
    'use strict';

    angular
        .module('app')
        .factory('transactionFactory', transactionFactory);

    transactionFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function transactionFactory($http, apiUrl) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(transaction) {
            return $http.post(apiUrl + '/transactions', transaction);
        }

        function getAll() {
            return $http.get(apiUrl + '/transactions');
        }

        function getById(id) {
            return $http.get(apiUrl + '/transactions/' + id);
        }

        function update(id, transaction) {
            return $http.put(apiUrl + '/transactions/' + id, transaction);
        }

        function remove(id) {
            return $http.delete(apiUrl + '/transactions/' + id);
        }
    }
})();