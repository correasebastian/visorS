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

        vm.toggleLeft = toggleLeft;

        vm.logout = logout;
        vm.changeTitle=changeTitle;




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
    }
})();
