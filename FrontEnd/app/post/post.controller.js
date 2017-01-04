(function() {
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController);

    PostController.$inject = ['productFactory', '$stateParams'];

    /* @ngInject */
    function PostController(productFactory, $stateParams) {
        var vm = this;
        vm.title = 'PostController';

        vm.newProduct = {};
        activate();

        ////////////////

        function activate() {
            productFactory
                .getAll()
                .then(function(response) {
                    vm.products = response.data;
                    console.log(vm.products);
                })
                .catch(function(error) {
                    console.log('you suck');
                });
        }
    }
})();