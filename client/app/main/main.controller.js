var mc;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$mdSidenav', 'Auth', 'UserInfo', '$state'];

    /* @ngInject */
    function MainCtrl($mdSidenav, Auth, UserInfo, $state) {
        var vm = this;
        mc = vm;
        vm.title = 'MainCtrl';
        vm.hideToolbar = false;

        vm.toggleLeft = toggleLeft;

        vm.logout = logout;
        vm.changeTitle = changeTitle;
        vm.filterString = '';
        vm.hideToolbarFn = hideToolbarFn;
        vm.setUserInfo = setUserInfo;
        vm.menu = [{
            state: 'main.dash',
            name: 'placas',
            icon:'action:dashboard'

        },
        {
            state: 'main.settings',
            name: 'settings',
            icon:'action:settings'

        }];
        vm.go = go;




        activate();

        ////////////////

        function activate() {}

        function toggleLeft() {
            $mdSidenav('left').toggle();
        }


        function go(state) {
            $state.go(state);
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

        function hideToolbarFn(bool) {
            vm.hideToolbar = bool;
        }

        function setUserInfo() {
            vm.userInfo = UserInfo.mainData;
        }
    }
})();
