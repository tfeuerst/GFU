// Suit

describe('app', function () {
    'use strict';

    // Spec
    it('should have Product', function () {
        // expectation matcher
        expect(COMPANY).toBeDefined();

        expect(COMPANY.Product).toBeDefined();
    });

    it('should throw an error', function () {
        expect(COMPANY.Product).toThrowError();
    });

});