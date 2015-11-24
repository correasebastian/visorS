
var dc;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .controller('DashCtrl', DashCtrl);

    DashCtrl.$inject = ['currentAuth', 'Placas', '$state', '$scope'];

    /* @ngInject */
    function DashCtrl(currentAuth, Placas, $state, $scope) {
        var vm = this;
        dc=$scope;
        var Main=$scope.$parent.Main;

        vm.title = 'DashCtrl';
        vm.goFotos=goFotos;

        activate();

        ////////////////

        function activate() {
            console.log('estpy en placas');
            Main.changeTitle('Placas');
            Main.hideToolbarFn(false);
            Placas.setArrayPlacas(currentAuth.uid, 5);
            getPlacas();


        }

        function goFotos (placa) {
            $state.go('main.fotos', { id: placa.$id, 'placa':placa.placa });
        }

        function getPlacas() {
            return Placas.getArray()
                .then(onGetPlacas);

            function onGetPlacas(array) {
                vm.placas = array;
                return vm.placas;
            }
        }
    }
})();
