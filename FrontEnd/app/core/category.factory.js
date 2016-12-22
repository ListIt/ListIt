(function() {
    'use strict';

    angular
        .module('app')
        .factory('categoryFactory', categoryFactory);

    categoryFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function categoryFactory($http, apiUrl) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(category) {
            return $http.post(apiUrl + '/categories', category);
        }

        function getAll() {
            return $http.get(apiUrl + '/categories');
        }

        function getById(id) {
            return $http.get(apiUrl + '/categories/' + id);
        }

        function update(id, category) {
            return $http.put(apiUrl + '/categories/' + id, category);
        }

        function remove(id) {
            return $http.delete(apiUrl + '/categories/' + id);
        }
    }
})();