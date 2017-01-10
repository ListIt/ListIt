(function() {
    'use strict';

    angular
        .module('app')
        .controller('FeedController', FeedController);

    FeedController.$inject = ['$timeout', 'productFactory', '$stateParams', '$state'];

    /* @ngInject */
    function FeedController($timeout, productFactory, $stateParams, $state) {
        var vm = this;
        vm.title = 'FeedController';

        vm.products = [];
        vm.openNav = openNav;
        vm.closeNav = closeNav;

        activate();

        ////////////////

        function activate() {
            vm.loading = true;
            $timeout(function() {
                productFactory
                    .getAll()
                    .then(function(response) {
                        vm.products = response.data;
                        console.log(vm.products);
                        vm.loading = false;
                    })
                    .catch(function(error) {
                        console.log('you suck');
                    });
            }, 2000);

        }

        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
        }
    }
})();
