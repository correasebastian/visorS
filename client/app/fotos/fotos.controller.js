var cx;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .controller('FotosCtrl', FotosCtrl);

    FotosCtrl.$inject = ['$stateParams', '$scope'];

    /* @ngInject */
    function FotosCtrl($stateParams, $scope) {

        cx = $scope;
        var vm = this;
        var Main = $scope.$parent.Main;
        vm.title = 'FotosCtrl';
        vm.idInspeccion = $stateParams.id;
        vm.placa = $stateParams.placa;

        vm.fotos = [{
            path: 'http://lorempixel.com/400/200/'
        }, {
            path: 'http://lorempixel.com/400/200/food'
        }, {
            path: 'http://lorempixel.com/400/200/sports'
        }, {
            path: 'http://lorempixel.com/400/200/people'
        }];

        activate();

        ////////////////

        function activate() {
            Main.changeTitle(vm.placa);
        }
    }
})();
