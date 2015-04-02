/**
 * Created by vl on 31.3.15.
 */
(function(angular) {
    'use strict';

    angular.module('app', ['ionic', 'app.main'])
        .config(appConfig)
        .run(appRun);

    appConfig.$inject = ['$urlRouterProvider'];
    function appConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main/swiper');
    }

    appRun.$inject = ['$ionicPlatform'];
    function appRun($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }
})(angular);