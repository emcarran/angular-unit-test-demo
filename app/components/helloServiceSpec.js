describe("helloService", function () {
    beforeEach(module('HelloModule'));

    it('should return "hello" when called', inject(function (helloService) {
        expect(helloService()).toBe("hello");
    }));
});
