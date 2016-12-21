(function() {
    'use strict';

    angular
        .module('app')
        .controller('FeedController', FeedController);

    FeedController.$inject = [];

    /* @ngInject */
    function FeedController() {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();