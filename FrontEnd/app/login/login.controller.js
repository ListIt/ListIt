(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['userFactory', 'authFactory', '$state'];

    /* @ngInject */
    function LoginController(userFactory, authFactory, $state) {
        var vm = this;
        vm.title = 'LoginController';
        vm.register = register;
        vm.login = login;

        ////////////////

        function login() {
            authFactory
                .login(vm.username, vm.password)
                .then(function(response) {
                    $state.go('feed');
                })
                .catch(function(error) {
                    alert('you suck at entering passwords. you should get lastpass. :)');
                })
        }

        function register() {
            authFactory
                .register(vm.registration)
                .then(function(response) {
                    authFactory
                        .login(vm.registration.emailAddress, vm.registration.password)
                        .then(function() {
                            $state.go('feed');
                        });
                });
        }
    }
})();