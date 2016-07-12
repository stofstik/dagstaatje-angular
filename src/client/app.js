var dagstaatjeApp = angular.module('dagstaatjeApp', ['ngRoute', 'ngAnimate', 'ngStorage', 'ngAria', 'ngMessages', 'ngMaterial'])
    // Set the material design color theme
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('orange');
    });
