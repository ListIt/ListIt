(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['userFactory', 'authFactory', '$state', 'toastr'];

    /* @ngInject */
    function LoginController(userFactory, authFactory, $state, toastr) {
        var vm = this;
        vm.title = 'LoginController';
        vm.register = register;
        vm.login = login;

        ////////////////

        function login() {
            authFactory
                .login(vm.username, vm.password)
                .then(function(response) {
                    toastr.success('You are now logged in.', 'Success!');
                    $state.go('feed')
                })
                .catch(function(error) {
                    console.log(error);
                    toastr.error('Please try again', 'Incorrect Password');
                })
        }

        function register() {
            authFactory
                .register(vm.registration)
                .then(function(response) {
                    authFactory
                        .login(vm.registration.emailAddress, vm.registration.password)
                        .then(function() {
                            toastr.success('You are now registered', 'Yay!');
                            $state.go('feed');
                        })
                })
                .catch(function(error) {
                    toastr.error('Make sure your password is at least 8 characters', 'Invalid registration');
                });
        }
    }
})();