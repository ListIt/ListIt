(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileMerchantController', ProfileMerchantController);

    ProfileMerchantController.$inject = ['transactionFactory'];

    /* @ngInject */
    function ProfileMerchantController(transactionFactory) {
        var vm = this;
        vm.title = 'ProfileMerchantController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();