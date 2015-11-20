'use strict';

angular.module('angMaterialApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });