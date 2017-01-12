(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$rootScope', 'authFactory', '$state','toastr'];

    /* @ngInject */
    function MainController($rootScope, authFactory, $state, toastr) {
        var vm = this;
        vm.title = 'MainController';
        vm.username = '';
        vm.loggedIn = false;
        vm.authInfo = [];
        vm.logout = logout;

        activate();

        ////////////////

        function activate() {
            vm.username = authFactory.username;
            vm.loggedIn = authFactory.isLoggedIn;

            $rootScope.$on('user-login', function() {
                vm.username = authFactory.username;
                vm.loggedIn = authFactory.isLoggedIn;
            });

            $rootScope.$on('user-logout', function() {
                vm.username = authFactory.username;
                vm.loggedIn = authFactory.isLoggedIn;
            })
        }

        function logout() {
            toastr.info('You have been logged out');
            authFactory.logout();
            $state.go('login');
        }

    }
})();
