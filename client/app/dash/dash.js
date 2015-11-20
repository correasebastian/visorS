'use strict';

angular.module('angMaterialApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.dash', {
        url: '/dash',
        templateUrl: 'app/dash/dash.html',
        controller: 'DashCtrl'
      });
  });