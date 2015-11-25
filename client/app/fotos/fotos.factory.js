(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('FotosF', FotosF);

    FotosF.$inject = ['$firebaseArray', 'FBROOT', '$firebaseObject'];

    /* @ngInject */
    function FotosF($firebaseArray, FBROOT, $firebaseObject) {
        var service = {
            getFotosArray: getFotosArray,
            getmainDataFromUid: getmainDataFromUid
        };
        return service;

        ////////////////

        function getFotosArray(idinspeccion) {
            var query = FBROOT.child('inspecciones').child(idinspeccion).child('fotos')
            var _fotosArray = $firebaseArray(query);
            return _fotosArray;
        }

        function getmainDataFromUid(uid) {
            var query = FBROOT.child('users').child(uid).child('mainData');
            var _mainData = $firebaseObject(query);
            return _mainData;
        }
    }
})();
