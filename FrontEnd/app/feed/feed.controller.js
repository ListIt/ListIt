(function() {
    'use strict';

    angular
        .module('app')
        .controller('FeedController', FeedController);

    FeedController.$inject = ['$timeout', 'productFactory', '$stateParams', '$state','categoryFactory'];

    /* @ngInject */
    function FeedController($timeout, productFactory, $stateParams, $state, categoryFactory) {
        var vm = this;
        vm.title = 'FeedController';

        vm.products = [];
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        vm.search = search;
        // vm.categories = [];
        // vm.currentFilter = '';
        // vm.filterClick = false;

        activate();

        ////////////////

        function activate() {
            vm.loading = true;
            $timeout(function() {
                productFactory
                    .getAll()
                    .then(productsReceived)
                    .catch(function(error) {
                        console.log('failed to load products');
                    });
            }, 2000);
            categoryFactory
                .getAll()
                .then(function(response) {
                    vm.categories = response.data;
                    console.log(vm.categories);
                })
                .catch(function(error) {
                    console.log('failed to load categories');
                })
        }

        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
            var body = document.getElementById("main");
            body.style.marginLeft = "250px";
        }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
        }

        function search(term) {
            vm.loading = true;
            $timeout(function() {
                productFactory
                    .getSearchResults(term)
                    .then(productsReceived)
                    .catch(function(error) {
                            console.log('you suck');
                        });
                }, 2000);
        }

        function productsReceived(response) {
            vm.products = response.data;
            console.log(vm.products);
            vm.loading = false;
        }
    }
})();
