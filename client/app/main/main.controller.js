var mc;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$mdSidenav', 'Auth'];

    /* @ngInject */
    function MainCtrl($mdSidenav, Auth) {
        var vm = this;
        mc = vm;
        vm.title = 'MainCtrl';
        vm.hideToolbar=false;

        vm.toggleLeft = toggleLeft;

        vm.logout = logout;
        vm.changeTitle=changeTitle;
        vm.filterString='';
        vm.hideToolbarFn=hideToolbarFn;




        activate();

        ////////////////

        function activate() {}

        function toggleLeft() {
            $mdSidenav('left').toggle();
        }

        function logout() {
            Auth.$unauth();
        }

        function changeTitle(title) {
            console.log(title);
            // no es necesario usar el timeout , seguramente por que es controller as syntax
            // $timeout(
            vm.title = title;
            // )

        }

        function hideToolbarFn (bool) {
            vm.hideToolbar=bool;
        }
    }
})();
