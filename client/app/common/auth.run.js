// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run


var uf;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')

    .run(run);

    /**
     * Must runure the exception handling
     */


    run.$inject = ['Auth', '$state', '$rootScope', 'UserInfo'];

    /**
     * runure by setting an optional string value for appErrorPrefix.
     * Accessible via run.appErrorPrefix (via run value).
     * @param  {Object} $provide
     */
    /* @ngInject */
    function run(Auth, $state, $rootScope, UserInfo) {

        uf = UserInfo;

        Auth.$onAuth(function(authData) {
            if (authData) {
                console.log("Logged in as on RUN:", authData.uid);
                $state.go('main.dash');

                /*no es necesario aca, por que esta en el router del main dash;
                UserInfo.getInfoUser(authData.uid)
                    .then(ongetUserInfo);*/

            } else {
                UserInfo.userConfig = null;
                UserInfo.authData = null;
                console.log("Logged out");
                $state.go('login');
            }

            function ongetUserInfo(bool) {
                console.log("Logged in as on RUN:", authData.uid);
                $state.go('main.dash');
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
