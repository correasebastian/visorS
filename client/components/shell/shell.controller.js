'use strict';

angular.module('angMaterialApp')
    .controller('ShellCtrl', function($mdSidenav, $mdDialog, $scope, $location,
        $mdBottomSheet) {

        $scope.showAlert = showAlert;

        $scope.isActive = function(route) {
            return route === $location.path();
        };

        $scope.toggleLeft = function() {
            $mdSidenav('left').toggle();
        };

        var originatorEv;
        $scope.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        $scope.notificationsEnabled = true;
        $scope.toggleNotifications = function() {
            $scope.notificationsEnabled = !$scope.notificationsEnabled;
        };

        $scope.redial = function() {
            $mdDialog.show(
                $mdDialog.alert()
                .targetEvent(originatorEv)
                .clickOutsideToClose(true)
                .parent('body')
                .title('Suddenly, a redial')
                .content('You just called a friend; who told you the most amazing story. Have a cookie!')
                .ok('That was easy')
            );
            originatorEv = null;
        };

        $scope.checkVoicemail = function() {
            // This never happens.
        };

        $scope.showAddDialog = function($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: 'components/shell/dialog/dialog.html',
                controller: 'DialogController'
            });
        };

        // ------testing angular material

        $scope.openBottomSheet = function() {
            $mdBottomSheet.show({
                template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
            });
        };



        // -----mdDialog
        $scope.showDialog = showDialog;
        $scope.items = [1, 2, 3];
        var alert;
        // Internal method
        function showAlert() {
            alert = $mdDialog.alert({
                title: 'Attention',
                content: 'This is an example of how easy dialogs can be!',
                ok: 'Close'
            });
            $mdDialog
                .show(alert)
                .finally(function() {
                    alert = undefined;
                });
        }



        function showDialog($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                template: '<md-dialog aria-label="List dialog">' +
                    '  <md-dialog-content>' +
                    '    <md-list>' +
                    '      <md-list-item ng-repeat="item in items">' +
                    '       <p>Number {{item}}</p>' +
                    '      ' +
                    '    </md-list-item></md-list>' +
                    '  </md-dialog-content>' +
                    '  <md-dialog-actions>' +
                    '    <md-button ng-click="closeDialog()" class="md-primary">' +
                    '      Close Dialog' +
                    '    </md-button>' +
                    '  </md-dialog-actions>' +
                    '</md-dialog>',
                locals: {
                    items: $scope.items
                },
                controller: DialogController
            });

            function DialogController($scope, $mdDialog, items) {
                $scope.items = items;
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }
        ///////////////////7
    });
