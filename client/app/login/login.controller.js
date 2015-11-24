(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['Auth'];

    /* @ngInject */
    function LoginCtrl(Auth) {
        var vm = this;
        vm.title = 'LoginCtrl';
        vm.user = {
            email: 'a@a.com',
            password: 'a'
        };
        vm.login = login;

        activate();

        ////////////////

        function activate() {}

        function login(user) {
            alert(user.email);
            Auth.$authWithPassword({
                email: user.email,
                password: user.password
            }).then(function(authData) {
                console.log("Logged in as:" + authData.uid);

            }).catch(function(error) {
                alert("Authentication failed:" + error.message);

            });

        }
    }
})();
