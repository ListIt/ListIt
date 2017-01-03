(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductDetailController', ProductDetailController);

    ProductDetailController.$inject = ['productFactory'];

    /* @ngInject */
    function ProductDetailController(productFactory) {
        var vm = this;
        vm.title = 'ProductDetailController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();