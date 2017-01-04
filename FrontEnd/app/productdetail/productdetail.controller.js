(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductDetailController', ProductDetailController);

    ProductDetailController.$inject = ['productFactory', '$stateParams'];

    /* @ngInject */
    function ProductDetailController(productFactory, $stateParams) {
        var vm = this;
        vm.title = 'ProductDetailController';

        vm.productId = $stateParams.id;
        vm.product = [];
        activate();

        ////////////////

        function activate() {
            productFactory
            .getById(vm.productId)

            .then(function(response) {
                    vm.product = response.data;
                    console.log(vm.product);
                })
                .catch(function(error) {
                    console.log('you suck');
                });
        }
    }
})();