const multiply = require('../src/multiply');

// Important point to note here is the naming convention that JEST reads, it reads all files named with the ".test" or ".spec." For this course, I'm going to use ".test."

describe('test multiply positive scenarios', ()=>{
//Now we write the actual test using it or test — in this course I will just use test.
    test('multiple 3,2 should equal 6', ()=>{
//        Unlike other frameworks which require other assertion libraries like Chai, Jest has its own built-in assertion library, which we reference by expect.
        expect(multiply(3,2)).toBe(6);
        expect(multiply(3,2)).not.toBe(11);
        expect(multiply(3,2)).toBeLessThan(7);
        expect(multiply(3,2)).toBeGreaterThan(5);
        expect(multiply(3,2)).toBeLessThanOrEqual(6);
    })

    it('object example', ()=>{
        const data = {first: 1};
        data['second'] = 2;
        expect(data).toEqual({first: 1, second: 2});
    })

    test('there is pool in Liverpool',() => {
// You can easily test for certain String values by using regular expressions using the .toMatch matcher.
        expect('Liverpool').toMatch(/pool/);
    });

    it('null', () => {
        const n = null;
        expect(n).toBeNull();
// And then expect(n).toBeDefined() — and yes, this should work fine too as the “n” was defined above.
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
// .not.toBeTruthy and .toBeFalsy, both should work as null is considered a false value.
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    })

    const carStock = [
      'BMW',
      'Mercedes',
      'Ferrari',
      'Toyota',
    ];

    it('that the car stock list has a Ferrari', () =>{
        expect(carStock).toContain('Ferrari');
    })


})

