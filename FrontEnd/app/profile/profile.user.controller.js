(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileUserController', ProfileUserController);

    ProfileUserController.$inject = ['userFactory', '$stateParams', '$state', 'authFactory', 'toastr'];

    /* @ngInject */
    function ProfileUserController(userFactory, $stateParams, $state, authFactory, toastr) {
        var vm = this;
        vm.title = 'ProfileUserController';

        vm.updateUser = updateUser;
        vm.logout = logout;
        vm.id = $stateParams.id;
        vm.user = [];


        activate();

        ////////////////

        function activate() {
            userFactory
                .getCurrentUser()
                .then(function(response) {
                    vm.user = response.data;
                    console.log(vm.user);
                })
                .catch(function(error) {
                    console.log('you suck');
                });
        }

        function updateUser() {
            userFactory
                .update(vm.user.id, vm.user)
                .then(function(response) {
                    console.log(vm.user);

                })

        }

        function logout() {
            toastr.error('You have been logged out');
            authFactory.logout();
            $state.go('login');
        }



    }

})();
