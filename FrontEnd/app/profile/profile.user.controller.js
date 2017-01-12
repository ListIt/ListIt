(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileUserController', ProfileUserController);

    ProfileUserController.$inject = ['userFactory', '$stateParams', '$state', 'authFactory', 'toastr', '$timeout'];

    /* @ngInject */
    function ProfileUserController(userFactory, $stateParams, $state, authFactory, toastr, $timeout) {
        var vm = this;
        vm.title = 'ProfileUserController';

        vm.updateUser = updateUser;
        vm.logout = logout;
        vm.id = $stateParams.id;
        vm.user = [];



        activate();

        ////////////////

        function activate() {
            vm.loading = true;
            $timeout(function() {
                userFactory
                .getCurrentUser()
                .then(function(response) {
                    vm.user = response.data;
                    vm.loading = false;
                    console.log(vm.user);
                })
                .catch(function(error) {
                    console.log('you suck');
                });
            },2000);
        }

        function updateUser() {
            userFactory
                .update(vm.user.id, vm.user)
                .then(function(response) {
                    toastr.success('Profile updated successfully.')
                    console.log(vm.user);
                })
                .catch(function(error) {
                    toastr.error('Please review your updates.','There was an error saving your changes.');
                });

        }

        function logout() {
            toastr.info('You have been logged out.');
            authFactory.logout();
            $state.go('login');
        }
    }
})();
