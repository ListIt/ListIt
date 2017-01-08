(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileMyProductController', ProfileMyProductController);

    ProfileMyProductController.$inject = ['productFactory', 'categoryFactory', '$stateParams'];

    /* @ngInject */
    function ProfileMyProductController(productFactory, categoryFactory, $stateParams) {
        var vm = this;
        vm.title = 'ProfileMyProductController';

        vm.productId = $stateParams.id;
        vm.product = [];
        vm.categories = [];

        vm.conditionMap = {
            1: 'New',
            2: 'Like New',
            3: 'Excellent',
            4: 'Good',
            5: 'Fair',
            6: 'Salvage'
        };

        vm.conditionArray = [
            {name: 'New'       , value: 1},
            {name: 'Like New'  , value: 2},
            {name: 'Excellent' , value: 3},
            {name: 'Good'      , value: 4},
            {name: 'Fair'      , value: 5},
            {name: 'Salvage'   , value: 6},
        ]

        vm.getCondition = getCondition;
        vm.updateProduct = updateProduct;
        vm.photoAdded = photoAdded;

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
            categoryFactory
                .getAll()
                .then(function(response) {
                    vm.categories = response.data;
                    console.log(vm.categories);
                })
                .catch(function(error) {
                    console.log('you suck');
                });
        }

        function getCondition(product) {
            return vm.conditionMap[product.condition];
        }

        function updateProduct() {
            productFactory
                .update(vm.productId, vm.product)
                .then(function(response) {
                    console.log(vm.product);

                })

        }

        function photoAdded() {
            vm.product.productPhotos.push({
                name: 'Picture Yo',
                url: vm.newPhoto    ,
                active: true
            });
        }
    }
})();