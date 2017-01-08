(function() {
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController);

    PostController.$inject = ['productFactory', 'categoryFactory', '$stateParams', '$state'];

    /* @ngInject */
    function PostController(productFactory, categoryFactory, $stateParams, $state) {
        var vm = this;
        vm.title = 'PostController';

        vm.newProduct = {};
        vm.newProduct.productPhotos = [];
        vm.photoAdded = photoAdded;
        vm.createPost = createPost;

        vm.conditionArray = [
            {name: 'New'       , value: 1},
            {name: 'Like New'  , value: 2},
            {name: 'Excellent' , value: 3},
            {name: 'Good'      , value: 4},
            {name: 'Fair'      , value: 5},
            {name: 'Salvage'   , value: 6},
        ]
        
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
            categoryFactory
                .getAll()
                .then(function(response) {
                    vm.categories = response.data;
                    console.log(vm.categories);
                })
                .catch(function(error) {
                    console.log('you suck');
                })
        }

        function photoAdded() {
            vm.newProduct.productPhotos.push({
                name: 'Picture Yo',
                url: vm.newPhoto    ,
                active: true
            });
        }

        function createPost() {
            productFactory
                .create(vm.newProduct)
                .then(function(response) {
                    $state.go('feed');
                });
        }
    }
})();