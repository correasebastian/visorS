(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('Auth', Auth);

    Auth.$inject = ['$firebaseAuth', 'FBROOT'];

    /* @ngInject */
    function Auth($firebaseAuth, FBROOT) {
        return $firebaseAuth(FBROOT);
    }
})();
