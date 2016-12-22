(function() {
    'use strict';

    angular
        .module('app')
        .factory('tagFactory', tagFactory);

    tagFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function tagFactory($http, apiUrl) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(tag) {
            return $http.post(apiUrl + '/tags', tag);
        }

        function getAll() {
            return $http.get(apiUrl + '/tags');
        }

        function getById(id) {
            return $http.get(apiUrl + '/tags/' + id);
        }

        function update(id, tag) {
            return $http.put(apiUrl + '/tags/' + id, tag);
        }

        function remove(id) {
            return $http.delete(apiUrl + '/tags/' + id);
        }
    }
})();