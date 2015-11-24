var cx;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .controller('FotosCtrl', FotosCtrl);

    FotosCtrl.$inject = ['$stateParams', '$scope', 'FotosF'];

    /* @ngInject */
    function FotosCtrl($stateParams, $scope, FotosF) {

        cx = $scope;
        var vm = this;
        var Main = $scope.$parent.Main;
        vm.title = 'FotosCtrl';
        vm.idInspeccion = $stateParams.id;
        vm.placa = $stateParams.placa;
        vm.myInterval = 3000;
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

            getFotos(vm.idInspeccion);

        }

        function getFotos(idInspeccion) {
            vm.fotos = FotosF.getFotosArray(idInspeccion);
        }
    }
})();
