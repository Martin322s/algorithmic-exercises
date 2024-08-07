import { solve } from '../exercises/3-add-remove-elements.js';
import { expect } from 'chai';

describe('3 - Add and remove elements', () => {
    it('Unit test on function with correct input', () => {
        let array = ['add', 'add', 'remove', 'add', 'remove'];
        let result = solve(array);
        expect(result).to.equal('1');
    });

    it('Unit test on function with numbers instead of commands', () => {
        let array = [1, 2, 3, 4];
        let result = solve(array);
        expect(result).to.equal('Empty');
    });

    it('Unit test on function without arguments', () => {
        let result = () => solve();
        expect(result).to.throw();
    });

    it('Unit test on function with object instead of array', () => {
        let result = () => solve({});
        expect(result).to.throw();
    });

    it('Unit test on function with null instead of array', () => {
        let result = () => solve(null);
        expect(result).to.throw();
    });

    it('Unit test on function with undefined instead of array', () => {
        let result = () => solve(undefined);
        expect(result).to.throw();
    });

    it('Unit test on function with object instead of delimiter', () => {
        let result = solve([{}, {}, {}]);
        expect(result).to.equal('Empty');
    });

    it('Unit test on function with number instead of delimiter', () => {
        let result = solve([1, 2, 3]);
        expect(result).to.equal('Empty');
    });

    it('Unit test on function with boolean instead of delimiter', () => {
        let result = solve([true, false, true]);
        expect(result).to.equal('Empty');
    });
});