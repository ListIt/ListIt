(function() {
    'use strict';

    angular
        .module('app')
        .controller('FeedController', FeedController);

    FeedController.$inject = ['productFactory'];

    /* @ngInject */
    function FeedController(productFactory) {
        var vm = this;
        vm.title = 'FeedController';

        vm.products = [];
        activate();

        ////////////////

        function activate() {
            productFactory
                .getAll()
                .then(function(response) {
                    vm.products = response.data;
                    console.log(vm.products);
                })
                .catch(function(error) {
                    console.log('you suck');
                });
        }
    }
})();