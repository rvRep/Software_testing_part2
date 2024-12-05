import add from './add';

describe('add', () => {

    test(('add two positive numbers'), () => {
        expect(add(3, 4)).toEqual(7);
    });

    test(('add two negative numbers'), () => {
        expect(add(-3, -4)).toEqual(-7);
    });

    test(('add a positive and a negative number'), () => {
        expect(add(3, -4)).toEqual(-1);
    });

    test('add two floats together', () => {
        expect(add(0.1, 0.2) == 0.3);
    });

    test('add two zeros together', () => {
        expect(add(0,0)).toEqual(0);

    })

    test('add two large numbers', () => {
        expect(add(1e10, 1e10)).toEqual(2e10);
    });

    test('add two small numbers', () => {
        expect(add(1e-10, 1e-10)).toEqual(2e-10);
    });

    test('add two negative floats', () => {
        expect(add(-0.1, -0.2) == -0.3);
    });

    test('add two negative integers', () => {
        expect(add(-5, 4)).toEqual(-1);
    });
    
});