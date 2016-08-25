describe("helloService", function () {
    beforeEach(module('HelloModule'));

    //inject helloService into the spec code by making a call to inject(). Call inject directly in the spec function
    it('should return "hello" when called', function () {
        module(function ($provide) {
            //use the build in $provide service to mock the upperCaseService, simply return the value that is passed into upperCaseService w/o modifying it
            $provide.value('uppercaseService', function (value) {
                return value;
            });
        });
        inject(function (helloService) {
            expect(helloService()).toBe("hello");
        });
    });
});
