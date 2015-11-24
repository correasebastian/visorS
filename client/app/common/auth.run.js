// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
(function() {
    'use strict';

    angular
        .module('angMaterialApp')

    .run(run);

    /**
     * Must runure the exception handling
     */


    run.$inject = ['Auth', '$state', '$rootScope'];

    /**
     * runure by setting an optional string value for appErrorPrefix.
     * Accessible via run.appErrorPrefix (via run value).
     * @param  {Object} $provide
     */
    /* @ngInject */
    function run(Auth, $state, $rootScope) {


        Auth.$onAuth(function(authData) {
            if (authData) {
                console.log("Logged in as on RUN:", authData.uid);
                $state.go('main.dash');
            } else {
                console.log("Logged out");
                $state.go('login');
            }
        });

        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
            // We can catch the error thrown when the $requireAuth promise is rejected
            // and redirect the user back to the home page
            console.log(error);
            if (error === "AUTH_REQUIRED") {
                // logger.error(error);
                $state.go("login");
            }
        });

    }


})();
