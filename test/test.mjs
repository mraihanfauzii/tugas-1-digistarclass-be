import { expect } from 'chai';
import isPrime from '../index.mjs';

describe('isPrime', function() {
    it('should return false for numbers less than or equal to 1', function() {
        expect(isPrime(1)).to.be.false;
        expect(isPrime(0)).to.be.false;
        expect(isPrime(-1)).to.be.false;
    });

    it('should return true for prime numbers', function() {
        expect(isPrime(2)).to.be.true;
        expect(isPrime(3)).to.be.true;
        expect(isPrime(5)).to.be.true;
    });

    it('should return false for non-prime numbers', function() {
        expect(isPrime(4)).to.be.false;
        expect(isPrime(6)).to.be.false;
        expect(isPrime(8)).to.be.false;
    });
});
