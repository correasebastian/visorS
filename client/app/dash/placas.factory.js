(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('Placas', Placas);

    Placas.$inject = ['$firebaseArray', 'FBROOT'];

    /* @ngInject */
    function Placas($firebaseArray, FBROOT) {
        var ngArrayFb;
        var _arrayPlacas=null;
        var factory = {
            getArray: getArray,
            setArrayPlacas: setArrayPlacas

        };
        return factory;

        function getArray() {

            return ngArrayFb;
        }

        function setArrayPlacas(uid, lastNumber) {

            lastNumber = parseInt(lastNumber) || 5;
            var query = null;
            if ( false) {
                // UserInfo.userConfig.groupMode ||
                // var mainGroup=UserInfo.userConfig.group.$id;
                var mainGroup = UserInfo.userConfig.defaultGroup;
                query = FBROOT.child('groups').child(mainGroup).child('inspecciones').orderByKey().limitToLast(lastNumber);

            } else {
                query = FBROOT.child('users').child(uid).child('inspecciones').orderByKey().limitToLast(lastNumber);
            }

            ngArrayFb = $firebaseArray(query).$loaded();
          /*  .then()
            .catch()

            function onGetPlacas (array) {
                array
                return 
            }

            function onError (err) {
                // body...
            }*/
        }
    }
})();
