(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('exception', exception);

    /* @ngInject */
    function exception($q, logger) {
        var service = {
            catcher: catcher,
            fbCatcher:fbCatcher
        };
        return service;

        function catcher(message) {
            return function(e) {
                var thrownDescription;
                var newMessage;
                if (e.data && e.data.description) {
                    thrownDescription = '\n' + e.data.description;
                    newMessage = message + thrownDescription;
                }
                e.data.description = newMessage;
                logger.error(newMessage);
                return $q.reject(e);
            };
        }

        function fbCatcher(message) {
            return function(error) {
                if (error) {
                    logger.error(message, reason);
                } else {
                    logger.log('success ' + message);
                }


            };
        }
    }
})();
