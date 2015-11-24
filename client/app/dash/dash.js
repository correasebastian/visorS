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
                            "currentAuth": ["Auth", '$q', 'UserInfo',

                                function(Auth, $q, UserInfo) {
                                    // $waitForAuth returns a promise so the resolve waits for it to complete
                                    return Auth.$waitForAuth()
                                        .then(onWaitDone);



                                    function onWaitDone(authData) {
                                        if (authData) {
                                            console.log('logged in from router');
                                            return UserInfo.getInfoUser(authData.uid)
                                                .then(function() {
                                                    return authData;
                                                });
                                        } else {
                                            console.log('logged out');
                                            return $q.reject('not logged in');
                                            // do something else...
                                        }
                                    }


                                }
                            ]
                        }
                    }
                }

            });
    });
