(function() {
    'use strict';

    angular
        .module('app')
        .factory('productDetailFactory', productDetailFactory);

    productDetailFactory.$inject = ['$http'];

    /* @ngInject */
    function productDetailFactory($http) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();