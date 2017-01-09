(function() {
    'use strict';

    angular
        .module('app')
        .controller('FeedController', FeedController);

    FeedController.$inject = ['productFactory', '$stateParams', '$state'];

    /* @ngInject */
    function FeedController(productFactory, $stateParams, $state) {
        var vm = this;
        vm.title = 'FeedController';

        vm.products = [];
        vm.openNav = openNav;
        vm.closeNav = closeNav;

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
