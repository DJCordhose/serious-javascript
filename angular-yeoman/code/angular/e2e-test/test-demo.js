describe('demo', function() {
    beforeEach(function() {
        browser.get('');
    });

    it('should automatically redirect to / when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

    it('should contain title', function() {
        var el = element(by.id("titleOfApp"));
        expect(el.isPresent()).toBeTruthy();
    });

});