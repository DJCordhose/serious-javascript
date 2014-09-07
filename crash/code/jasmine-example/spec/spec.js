"use strict";

describe("Calculator", function () {
    var data;

    beforeEach(function () {
        data = calculateMortgage(200000, 10, 7.5, 30);
    });

    it("principle", function () {
        expect(data.principle).toEqual(199990.00);
    });

    it("monthly rate", function () {
        expect(data.monthly).toEqual(1398.36);
    });
    it("total number of payments", function () {
        expect(data.payments).toEqual(360);
    });
    it("total payment", function () {
        expect(data.total).toEqual(503409.60);
    });
    it("invalid", function () {
        expect(function () {
            calculateMortgage(1, 10, 7.5, 30);
        }).toThrowError("You do not need any money");
    });
});