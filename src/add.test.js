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
        expect(add(0.1, 0.2)).toEqual(0.3);
    });

    test('first number undefined', () => {
        expect(add(undefined, 4)).toEqual(undefined);
    });

    test('sedond number undefined', () => {
        expect(add(3, undefined)).toEqual(undefined);
    });

    test('both numbers undefined', () => {
        expect(add(undefined, undefined)).toEqual(undefined);
    });
});