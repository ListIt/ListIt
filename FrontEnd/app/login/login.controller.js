(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['userFactory'];

    /* @ngInject */
    function LoginController(userFactory) {
        var vm = this;
        vm.title = 'LoginController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();