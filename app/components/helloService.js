angular.module('HelloModule', [])
    .factory('uppercaseService', function () {
        return function () {
            return 'hello';
        }
    })
    //When called, helloService() returns the string 'hello'
    .factory('helloService', function (uppercaseService) {
        return function () {
            return uppercaseService('hello');
        }
    });
