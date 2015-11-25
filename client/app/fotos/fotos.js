'use strict';

angular.module('angMaterialApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main.fotos', {
                url: '/placas/:id/:placa/:asesorId',

                views: {
                    'mainContent': {
                        templateUrl: 'app/fotos/fotos.html',
                        controller: 'FotosCtrl',
                        controllerAs: 'Fotos',
                        resolve: {
                            //     // controller will not be loaded until $waitForAuth resolves
                            //     // Auth refers to our $firebaseAuth wrapper in the example above
                            'currentAuth': ['Auth',
                                function(Auth) {
                                    // $waitForAuth returns a promise so the resolve waits for it to complete
                                    return Auth.$requireAuth();
                                }
                            ]
                        }
                    }
                }
            });
    });
