var Z;

(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .directive('scmFull', scmFull);

    scmFull.$inject = [];

    /* @ngInject */
    function scmFull() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'SF',
            link: link,
            restrict: 'EA',
            template: [
                '<span>{{SF|json}}</span>',
                '<p ng-show="SF.configuration.enableP">sabe sabe sabe </p>',
                '<input type="text" ng-model="SF.value">',
                '<button class="button" ng-click="SF.alerts({msg:SF.value})">call alerts</button>'

            ].join('\n'),
            /* template: [
                 '<annotated-image-controls annotations="configuration.annotations"></annotated-image-controls>',
                 '<annotated-image-viewer src="configuration.image" annotations="configuration.annotations"></annotated-image-viewer>',
                 '<annotated-image-current></annotated-image-current>'
             ].join('\n'),*/
            scope: {
                configuration: '=',
                alerts: "&"
            }
        };
        return directive;

        function link(scope, element, attrs) {
            Z = scope;
        }
    }

    /* @ngInject */
    function Controller() {
        var vm = this;
        vm.oelo = 'oelo';

    }
})();

var W;
(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .directive('annotatedImageControls', annotatedImageControls);

    annotatedImageControls.$inject = [];

    /* @ngInject */
    function annotatedImageControls() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            template: [
                '<div>',
                '<span span[data-role="show annotations"] ng-click="IC.showAnnotations()" ng-hide="IC.viewing">Show</span>',
                '<span span[data-role="hide annotations"] ng-click="IC.hideAnnotations()" ng-show="IC.viewing">Hide</span>',
                '<span ng-click="IC.showAnnotations()">{{ annotations.length }} Annotations</span>',
                '</div>'
            ].join('\n'),
            bindToController: true,
            controller: Controller,
            require: '^scmFull',
            controllerAs: 'IC',
            link: link,
            restrict: 'EA',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, scmFull) {
            W = scope;
            console.log(scmFull);

        }
    }

    /* @ngInject */
    function Controller() {
        var vm = this;
        vm.viewing = true;
    }
})();
