(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('UserInfo', UserInfo);

    UserInfo.$inject = ['$firebaseArray', 'FBROOT', '$firebaseObject', '$q', 'logger', 'exception', 'Auth'];

    /* @ngInject */
    function UserInfo($firebaseArray, FBROOT, $firebaseObject, $q, logger, exception, Auth) {

        var service = {
            getInfoUser: getInfoUser,
            // getUserGroups: getUserGroups,
            userGroups: null,            
            userID: null,
            userConfig: null,
            authInit: authInit,
            authData: null,
            mainData:null
        };
        return service;

        ////////////////

        function authInit() {
            return Auth.$waitForAuth()
                .then(onWaitDone)
                .then(getInfoUser);

            function onWaitDone(authData) {
                if (authData) {
                    service.authData = authData;
                    console.log('logged in from router');
                    return authData.uid;
                } else {
                    console.log('logged out');
                    return $q.reject('not logged in');
                    // do something else...
                }
            }
        }

        function getInfoUser_v1(userId) {
            service.userID = userId;
            var promises = [
                getGroupMode(userId),
                getUserGroups(userId)
            ];
            return $q.all(promises)
                .then(allPromisesCompleted);

            function allPromisesCompleted() {
                logger.info('getInfoUser activado');
            }

        }

        function getInfoUser(userId) {
            if (service.userConfig) {
                return $q.when(true); // ya esta cargado no es necesario volver a hacerlo
            }

            var promises = [
                getUserConfig(userId),
                getUserGroups(userId),
                getUserMainData(userId)
            ];

            return $q.all(promises)
                .then(allPromisesCompleted);

            function allPromisesCompleted() {
                logger.info('getInfoUser activado');
            }
        }


        function getUserConfig(userId) {
            var query = FBROOT.child('users').child(userId).child('config');
            return $firebaseObject(query).$loaded()
                .then(onGetUserConfig)
                .catch(exception.catcher("cant get userConfig"));

            function onGetUserConfig(data) {
                // service.userConfig = data; //.enable;
                //si no tiene un grupo default por defecto se vaya al modo infdividual
                if (!data.defaultGroup) {
                    data.groupMode = false;
                    data.$save();
                }
                service.userConfig = data;
                return userId; // para encadenar me sirva mas el userId //service.userConfig;
                // return data;
            }
        }

        function getUserGroups(userId) {
            var query = FBROOT.child('users').child(userId).child('groups').orderByKey(); //.limitToLast(1);

            return $firebaseArray(query).$loaded()
                .then(onGetGroups)
                .catch(exception.catcher("cant get userGroups"));

            function onGetGroups(data) {
                /* if (!data[0]) {
                     service.userConfig.groupMode = false;
                     service.userConfig.$save();
                 }
                 service.userGroups = data[0] || {};*/
                service.userGroups = data;
                // return service.userGroups;// no es necesario devolver la informacion
                return true; //solo por devolver algo y encadenar
            }

        }

        function getUserMainData(userId) {
            var query = FBROOT.child('users').child(userId).child('mainData');
            return $firebaseObject(query).$loaded()
                .then(onGetMainData)
                .catch(exception.catcher("cant get mainData"));

            function onGetMainData(data) {
                /* if (!data[0]) {
                     service.userConfig.groupMode = false;
                     service.userConfig.$save();
                 }
                 service.userGroups = data[0] || {};*/
                service.mainData = data;
                // return service.userGroups;// no es necesario devolver la informacion
                return true; //solo por devolver algo y encadenar
            }

        }
    }
})();
