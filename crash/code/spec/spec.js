"use strict";

describe("Customer", function () {
    var customer;

    beforeEach(function () {
        customer = new personmodule.Customer('Olli', 43, "M");
    });

    it("should shop Galaxy Note when older than 40", function () {
        expect(customer.shop()).toEqual('Shopping: Galaxy Note');
    });

    it("should always be addressed politely", function () {
        expect(customer.getName()).toContain('Dear');
    });
});