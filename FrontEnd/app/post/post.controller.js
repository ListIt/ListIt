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
            debugger;
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