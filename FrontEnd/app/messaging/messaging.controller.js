(function() {
    'use strict';

    angular
        .module('app')
        .controller('MessagingController', MessagingController);

    MessagingController.$inject = [];

    /* @ngInject */
    function MessagingController() {
        var vm = this;
        vm.title = 'MessagingController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();