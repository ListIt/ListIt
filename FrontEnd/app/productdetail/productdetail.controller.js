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

        var conditionMap = {
            1: 'New',
            2: 'Like New',
            3: 'Excellent',
            4: 'Good',
            5: 'Fair',
            6: 'Salvage'
        };

        vm.getCondition = getCondition;
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

        function getCondition(product) {
            return conditionMap[product.condition];
        }
    }
})();
