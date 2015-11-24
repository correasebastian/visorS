(function() {
    'use strict';

    angular
        .module('angMaterialApp')
        .factory('toolbarHelper', toolbarHelper);

    toolbarHelper.$inject = [];

    /* @ngInject */
    function toolbarHelper() {
        var _array = [];
        var service = {
            push: push,
            getObject: getObject,
            consoleScm:consoleScm
        };
        return service;

        ////////////////

        function push(obj) {
            _array[obj.name] = obj;

        }

        function getObject(name) {
            var obj = _array[name];
            return obj;
            // body...
        }

        function consoleScm (name) {
        	console.log(name);
        	return name;
        }
    }
})();

// (function() {
//     'use strict';

//     angular
//         .module('angMaterialApp')
//         .decorator('toolbarHelper', toolbarHelper);

//     toolbarHelper.$inject = ['$delegate'];

//     /* @ngInject */
//     function toolbarHelper($delegate) {

//         return decorator;

//         ////////////////

//         function decorator(factory) {
//         	console.log('decorator', factory);
//         	return factory;
        	

//         }
//     }
// })();
