(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$rootScope', 'authFactory', '$state'];

    /* @ngInject */
    function MainController($rootScope, authFactory, $state) {
        var vm = this;
        vm.title = 'MainController';
        vm.username = '';
        vm.loggedIn = false;
        vm.authInfo = [];

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

    }
})();
