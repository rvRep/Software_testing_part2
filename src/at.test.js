import at from './at';

describe('at', () => {
    const object = { a: [{ b: { c: 3 } }, 4], d: { e: 5 } };

    test('retrieves a single nested value by path', () => {
        expect(at(object, 'a[0].b.c')).toEqual([3]);
    });

    test('retrieves multiple values by paths', () => {
        expect(at(object, 'a[0].b.c', 'a[1]')).toEqual([3, 4]);
    });

    test('handles paths with different nesting levels', () => {
        expect(at(object, 'a[0].b', 'd.e')).toEqual([{ c: 3 }, 5]);
    });

    test('returns undefined for nonexistent paths', () => {
        expect(at(object, 'a[0].b.d', 'd.f')).toEqual([undefined, undefined]);
    });

    test('flattens array of paths correctly', () => {
        expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
    });

    test('returns an empty array when given an empty path list', () => {
        expect(at(object)).toEqual([]);
    });

    test('returns an empty array when provided an empty object', () => {
        expect(at({}, 'a[0].b.c')).toEqual([undefined]);
    });
});
