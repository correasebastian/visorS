var dc;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .controller('DashCtrl', DashCtrl);

    DashCtrl.$inject = ['currentAuth', 'Placas', '$state', '$scope', 'UserInfo'];

    /* @ngInject */
    function DashCtrl(currentAuth, Placas, $state, $scope, UserInfo) {
        var vm = this;
        dc = $scope;
        var Main = $scope.$parent.Main;

        vm.title = 'DashCtrl';
        vm.goFotos = goFotos;

        activate();

        ////////////////

        function activate() {
            console.log('estpy en placas');
            Main.changeTitle('Placas');
            Main.hideToolbarFn(false);
            UserInfo.getInfoUser(currentAuth.uid)
                .then(getPlacas);

        }

        function goFotos(placa) {
            $state.go('main.fotos', {
                id: placa.$id,
                'placa': placa.placa
            });
        }

        function getPlacas() {
            Placas.setArrayPlacas(currentAuth.uid, 5);
            return Placas.getArray()
                .then(onGetPlacas);

            function onGetPlacas(array) {
                vm.placas = array;
                return vm.placas;
            }
        }
    }
})();
