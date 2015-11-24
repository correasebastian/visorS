(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('FBROOT', FBROOT);

    FBROOT.$inject = ['Firebase', 'FBURL'];

    /* @ngInject */
    function FBROOT(Firebase, FBURL) {
        return new Firebase(FBURL);
    }


})();
