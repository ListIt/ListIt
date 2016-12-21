(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = [];

    /* @ngInject */
    function LoginController() {
        var vm = this;
        vm.title = 'LoginController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();