import countBy from "./countBy";

describe('countBy', () => {

    const testCollection1 = [
           { 'user': 'barney', 'active': true },
           { 'user': 'betty', 'active': true },
           { 'user': 'fred', 'active': false }
     ];

     const testCollection2 = [
        {'number' : 4, 'name' : 'Matti', 'works' : true},
        {'number' : 7, 'name' : 'Juulia', 'works' : true},
        {'number' : 4, 'name' : 'Johanna', 'works' : true},
        {'number' : 0, 'name' : 'Antti', 'works' : true}
     ];

    test('Counting user collection according to active-value', () => {
        expect(countBy(testCollection1, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
    });

    test('Counting collection according to number-value', () => {
        expect(countBy(testCollection2, value => value.number)).toEqual({4 : 2, 7 : 1, 0 : 1});
    })

    test('Counting collection according to works-value', () => {
        expect(countBy(testCollection2, value => value.works)).toEqual({'true' : 4});
    });
    test('Counting by value that doesnt exist', () => {
        expect(countBy(testCollection1, value => value.name)).toEqual({undefined : 2});
    });

    test('count over an empty collection', () => {
        expect(countBy([], value => value.name)).toEqual({});
    });

});