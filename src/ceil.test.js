import ceil from './ceil';

describe('ceil', () => {
    
    test('round up a number in the precision of 1', () => {
        expect(ceil(4.006)).toEqual(5);
    });

    test('round up a number that is already rounded up', () => {
        expect(ceil(5)).toEqual(5);
    });

    test('round up a number in the precision of 2', () => {
        expect(ceil(6.004, 2)).toEqual(6.01);
    });

    test('round number in the precision of 2, number should not change', () =>{
        expect(ceil(6040, 2)).toEqual(6040);
    });

    test('round number in the precision of -2', () => {
        expect(ceil(6040, -2)).toEqual(6100);
    });

    test('round number in the precsion of 0', () => {
        expect(ceil(6040, 0)).toEqual(6040);
    });

    test('round up a zero', () => {
        expect(ceil(0,0)).toEqual(0);
    })

    test('ceil a negative number with default precision', () => {
        expect(ceil(-4.006)).toEqual(-4);
    });

    test('ceil a very small number', () => {
        expect(ceil(0.0004, 3)).toEqual(0.001);
    });

    test('ceil a very large number', () => {
        expect(ceil(1e10 + 0.4)).toEqual(1e10 + 1);
    });

    test('ceil a number with negative precision greater than the number of integer places', () => {
        expect(ceil(123, -5)).toEqual(100000);
    });

});