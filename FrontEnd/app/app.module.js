(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider

            // feed state
                .state('feed', {
                url: '/feed',
                controller: 'FeedController as feedCtrl',
                templateUrl: '/app/feed/feed.html'
            })

            // login state
                .state('login', {
                url: '/login',
                controller: 'LoginController as loginCtrl',
                templateUrl: '/app/login/login.html'
            })

            // Messaging state
                .state('messaging', {
                url: '/messaging',
                controller: 'MessagingController as messagingCtrl',
                templateUrl: '/app/messaging/messaging.html'
            })

            //Product Detail state
                .state('productdetail', {
                url: '/productdetail',
                controller: 'ProductDetailController as productDetailCtrl',
                templateUrl: '/app/productdetail/productdetail.html'
            })

            // Profile state
            .state('profile', {
                    url: '/profile',
                    abstract: true,
                    template: '<div ui-view></div>'
                })
                .state('profile.user', {
                    url: '/user',
                    controller: 'ProfileUserController as profileUserCtrl',
                    templateUrl: '/app/profile/profile.user.html'
                })
                .state('profile.merchant', {
                    url: '/merchant',
                    controller: 'ProfileMerchantController as profileMerchantCtrl',
                    templateUrl: '/app/profile/profile.merchant.html'
                })

            // Transaction state
                .state('transaction', {
                url: '/transaction',
                controller: 'TransactionController as transactionCtrl',
                templateUrl: '/app/transaction/transaction.html'
            })

            // About state
                .state('about', {
                url: '/about',
                controller: 'AboutController as aboutCtrl',
                templateUrl: '/app/about/about.html'
            })

        });
})();
