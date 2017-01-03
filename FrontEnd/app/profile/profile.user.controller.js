(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileUserController', ProfileUserController);

    ProfileUserController.$inject = ['userFactory'];

    /* @ngInject */
    function ProfileUserController(userFactory) {
        var vm = this;
        vm.title = 'ProfileUserController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();