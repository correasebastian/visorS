(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('FotosF', FotosF);

    FotosF.$inject = ['$firebaseArray', 'FBROOT'];

    /* @ngInject */
    function FotosF($firebaseArray, FBROOT) {
        var service = {
            getFotosArray: getFotosArray
        };
        return service;

        ////////////////

        function getFotosArray(idinspeccion) {
           var  _fotosArray = $firebaseArray(FBROOT.child('inspecciones').child(idinspeccion).child('fotos'));
            return _fotosArray;
        }
    }
})();
