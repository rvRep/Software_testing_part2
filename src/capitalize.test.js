import capitalize from './capitalize';


describe('capitalize', () => {
     
    test('capitalize a string', () => {
        expect(capitalize('TEST STRING')).toEqual('Test string');
    });

    test('capitalize a string with first letter as a number', () => {
        expect(capitalize('123abc')).toEqual('123abc');
    });

    test('capitalize a string where first letter is capitalized', () => {
        expect(capitalize('Test string')).toEqual('Test string');
    });
    
    test('capitalize a string where first letter is a special character', () => {
        expect(capitalize('!test string')).toEqual('!test string');
    })

    test('capitalize a string where first letter is a space', () => {
        expect(capitalize(' test string')).toEqual(' test string');
    });

    test('capitalize an empty string', () => {
        expect(capitalize('')).toEqual('');
    });

    test('capitalize an undefined string' , () => {
        expect(capitalize(undefined)).toEqual(undefined);
    });

    test('capitalize string where first letter is small and others big', () => {
        expect(capitalize('tEST STRING')).toEqual('Test string');
    });
});
