'use strict';

angular.module('angMaterialApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main.dash', {
                url: '/dash',
                views: {
                    'mainContent': {
                        templateUrl: 'app/dash/dash2.html',
                        controller: 'DashCtrl',
                        controllerAs: "Dash",
                        resolve: {
                            //     // controller will not be loaded until $waitForAuth resolves
                            //     // Auth refers to our $firebaseAuth wrapper in the example above
                            "currentAuth": [ 'Auth',

                                function( Auth) {
                                    // $waitForAuth returns a promise so the resolve waits for it to complete
                                    return  Auth.$waitForAuth();                               

                                }
                            ]
                        }
                    }
                }

            });
    });
