(function() {
    'use strict';

    angular
        .module('app')
        .controller('TransactionController', TransactionController);

    TransactionController.$inject = [];

    /* @ngInject */
    function TransactionController() {
        var vm = this;
        vm.title = 'TransactionController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();