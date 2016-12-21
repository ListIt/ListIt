(function() {
    'use strict';

    angular
        .module('app')
        .controller('AboutController', AboutController);

    AboutController.$inject = [];

    /* @ngInject */
    function AboutController() {
        var vm = this;
        vm.title = 'AboutController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();