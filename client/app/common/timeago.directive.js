(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .directive('scmTimeAgo', scmTimeAgo);

    scmTimeAgo.$inject = ['moment', '$interval'];

    /* @ngInject */
    function scmTimeAgo(moment, $interval) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            // bindToController: true,
            // controller: Controller,
            // controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
                // created:'@'
                // delay:'@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('scmTimeAgo',scope, attrs);
            var created = attrs.unixms;
            var delay=parseInt(attrs.delay) || 60000;

            if (attrs.unixms) {
                // var timeAgo = moment(parseInt(attrs.unixms)).fromNow();
                var nowUnixms = moment().unix() * 1000;
                var timeAgo = moment(parseInt(created)).from(nowUnixms);
                element.text(timeAgo);
                $interval(function() {
                    nowUnixms = moment().unix() * 1000;
                    timeAgo = moment(parseInt(created)).from(nowUnixms);

                    console.log(timeAgo);

                    element.text(timeAgo);
                }, delay);

            }


        }
    }

    /* @ngInject */
    // function Controller() {

    // }
})();
