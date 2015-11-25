(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('PushF', PushF);

    PushF.$inject = ['FBROOT', 'Firebase', 'exception'];

    /* @ngInject */
    function PushF(FBROOT, Firebase, exception) {
        var service = {
            sendPushToOne: sendPushToOne
        };
        return service;

        ////////////////

        function sendPushToOne(options) {

            var notification = {

                placa: options.placa,
                mensaje: options.mensaje,
                timestamp: Firebase.ServerValue.TIMESTAMP,
                unread: true,
                sender: options.senderUid
            };

            var newPushRef = FBROOT.child('pushNotifications').push();
            var newPushKey = newPushRef.key();

            var createPush = {};
            createPush['users/' + options.destinationUid + '/notificaciones/' + newPushKey] = notification;
            notification.to = options.destinationUid;
            notification.toGroup=false;
            createPush['pushNotifications/' + newPushKey] = notification;
            createPush['pushNotifications/queue/tasks/' + newPushKey] = notification;

            FBROOT.update(createPush, exception.fbCatcher('ingresando push one notification'));

        }

        function sendPushToGroup(origin, group) {
            // body...
        }
    }
})();
