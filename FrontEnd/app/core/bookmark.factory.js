(function() {
    'use strict';

    angular
        .module('app')
        .factory('bookmarkFactory', bookmarkFactory);

    bookmarkFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function bookmarkFactory($http, apiUrl) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(bookmark) {
            return $http.post(apiUrl + '/bookmarks', bookmark);
        }

        function getAll() {
            return $http.get(apiUrl + '/bookmarks');
        }

        function getById(id) {
            return $http.get(apiUrl + '/bookmarks/' + id);
        }

        function update(id, bookmark) {
            return $http.put(apiUrl + '/bookmarks/' + id, bookmark);
        }

        function remove(id) {
            return $http.delete(apiUrl + '/bookmarks/' + id);
        }
    }
})();