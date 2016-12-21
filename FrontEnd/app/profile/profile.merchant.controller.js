(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileMerchantController', ProfileMerchantController);

    ProfileMerchantController.$inject = [];

    /* @ngInject */
    function ProfileMerchantController() {
        var vm = this;
        vm.title = 'ProfileMerchantController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();