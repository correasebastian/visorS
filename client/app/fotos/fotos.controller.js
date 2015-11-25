var cx;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .controller('FotosCtrl', FotosCtrl);

    FotosCtrl.$inject = ['currentAuth', '$stateParams', '$scope', 'FotosF', 'logger', '$q', 'PushF'];

    /* @ngInject */
    function FotosCtrl(currentAuth, $stateParams, $scope, FotosF, logger, $q, PushF) {

        cx = $scope;
        var vm = this;
        var Main = $scope.$parent.Main;
        vm.title = 'FotosCtrl';
        var _idInspeccion = $stateParams.id;
        var _asesorId = $stateParams.asesorId;
        vm.placa = $stateParams.placa;
        vm.myInterval = 3000;
        vm.done = done;
        vm.doneAll = doneAll;
        vm.fabConfig = {
            isOpen: true,
            count: 0,
            selectedDirection: 'left',

        };

        /*        vm.fotos = [{
                    path: 'http://lorempixel.com/400/200/'
                }, {
                    path: 'http://lorempixel.com/400/200/food'
                }, {
                    path: 'http://lorempixel.com/400/200/sports'
                }, {
                    path: 'http://lorempixel.com/400/200/people'
                }];*/

        activate();

        ////////////////

        function activate() {
            Main.hideToolbarFn(true);
            var promises = [
                getFotos(_idInspeccion),
                getAsesorMainData(_asesorId)
            ];

            $q.all(promises)
                .then(onPromises);

            function onPromises(res) {
                logger.info('activated fotos');
            }



        }

        function getFotos(idInspeccion) {
            vm.fotos = FotosF.getFotosArray(idInspeccion);
        }

        function getAsesorMainData(asesorId) {
            vm.asesorInfo = FotosF.getmainDataFromUid(asesorId);
        }

        function done() {
            var msg = 'se inicia revision';

            var options = {
                placa: vm.placa,
                mensaje: msg,
                senderUid: currentAuth.uid,
                destinationUid: _asesorId
            };

            PushF.sendPushToOne(options);


        }

        function doneAll() {

        }
    }
})();
