(function() {
        'use strict';

        angular
            .module('app')
            .controller('ProfileUserController', ProfileUserController);

        ProfileUserController.$inject = ['userFactory', '$stateParams'];

        /* @ngInject */
        function ProfileUserController(userFactory, $stateParams) {
            var vm = this;
            vm.title = 'ProfileUserController';

            vm.userPhotoUpdated = userPhotoUpdated;
            //vm.id = $stateParams.id;
            vm.id = $stateParams.id;
            vm.user = [];

            activate();

            ////////////////

            function activate() {
                userFactory
                    .getById(vm.id)


                .then(function(response) {
                        vm.user = response.data;
                        console.log(vm.user);
                    })
                    .catch(function(error) {
                        console.log('you suck');
                    });
            }

            function userPhotoUpdated() {
                userFactory
                    .update(vm.id, vm.user)

                .then(function(response) {
                    console.log('we dont suck')
                    
                })

            };
        }
    
})();
