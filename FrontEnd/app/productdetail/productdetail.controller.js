(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductDetailController', ProductDetailController);

    ProductDetailController.$inject = [];

    /* @ngInject */
    function ProductDetailController() {
        var vm = this;
        vm.title = 'ProductDetailController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();