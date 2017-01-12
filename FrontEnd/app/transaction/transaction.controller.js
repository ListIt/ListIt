(function() {
    'use strict';

    angular
        .module('app')
        .controller('TransactionController', TransactionController);

    TransactionController.$inject = ['transactionFactory'];

    /* @ngInject */
    function TransactionController(transactionFactory) {
        var vm = this;
        vm.title = 'TransactionController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();