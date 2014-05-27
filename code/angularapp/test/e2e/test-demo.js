describe('demo', function() {
    browser.get('');

    it('should automatically redirect to / when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });
});