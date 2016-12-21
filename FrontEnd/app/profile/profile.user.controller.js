(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileUserController', ProfileUserController);

    ProfileUserController.$inject = [];

    /* @ngInject */
    function ProfileUserController() {
        var vm = this;
        vm.title = 'ProfileUserController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();