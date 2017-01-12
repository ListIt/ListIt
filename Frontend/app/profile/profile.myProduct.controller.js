(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileMyProductController', ProfileMyProductController);

    ProfileMyProductController.$inject = ['productFactory', 'categoryFactory', '$stateParams','filepicker','$state','toastr', '$timeout'];

    /* @ngInject */
    function ProfileMyProductController(productFactory, categoryFactory, $stateParams, filepicker, $state, toastr, $timeout) {
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
        vm.newPhoto = {};
        vm.photoRemoved = photoRemoved;
        vm.deleteProduct = deleteProduct;

        activate();

        ////////////////

        function activate() {
            vm.loading = true;
            $timeout(function() {
                productFactory
                    .getById(vm.productId)
                    .then(function(response) {
                        vm.loading = false;
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
                    })
                    .catch(function(error) {
                        console.log('you suck');
                    });
                },2000);
        }

        function getCondition(product) {
            return vm.conditionMap[product.condition];
        }

        function updateProduct() {
            productFactory
                .update(vm.productId, vm.product)
                .then(function(response) {
                    toastr.success("Changes saved successfully.")
                    console.log(vm.product);
                })
                .catch(function(error) {
                    toastr.error("(Don't ask us why)","Save failed")
                    console.log('deletion not successful');
                });

        }

        function photoAdded() {
            vm.newPhoto = {
                name: 'Picture Yo',
                url: vm.newPhotoUrl,
                active: true
            }
            productFactory
                .addPhoto(vm.productId, vm.newPhoto)
                .then(function(response) {
                    vm.product.photos.push(response.data);
                    console.log(vm.product);
                })
        }

        function photoRemoved(photo) {
            // filepicker.remove(photo, function(){
            //     console.log("Removed");
            // });
            productFactory
                .removePhoto(vm.productId, photo.productPhotoId)
                .then(function(response) {
                    var index = vm.product.photos.indexOf(photo);
                    vm.product.photos.splice(index, 1);
                    console.log(vm.product);
                })
        }

        function deleteProduct() {
            if (confirm('Are you sure you want to delete this product?')) {
                productFactory
                    .remove(vm.productId)
                    .then(function(response) {
                        toastr.success('Successfully deleted the product.','"Great Success!" - Borat');
                        $state.go('profile.user');
                    })
                    .catch(function(error) {
                        console.log('deletion not successful');
                    });
            } else {
                console.log("Okay, man");
            }
        }
    }
})();