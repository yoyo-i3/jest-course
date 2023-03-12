const setupFirst = () => console.log('setting up before tests run')
const tearDown = () => console.log('Finish up after tests run')
//Using beforeEach
//Now let's create a function constant for setup, let's say const setupFirst.
//
//Then let’s say you will need to actually run something first before we run our test.
//
//For example, if we want to do initializing something before we create our accounts, for example, we can run this particular function first up.
//
//Let’s maybe say "Setting up before test run" and then we can actually save this.
//#Using afterEach
//Now one could use afterEach function in the same manner.
//
//Look at this example; we can copy and paste this const setupFirst line of code, and add a tearDownNow feature.
//
//And instead of saying "Setting up" let’s say "Finish up after tests run".
//
//Then instead of the beforeEachcall it afterEach, and then we can say tearDownNow.

describe('new account creation checks', ()=>{
    beforeEach(() => setupFirst());
    afterEach(() => tearDown());

    test('new account 1 created', () =>{
        const account = 'account1'
        expect(account).toEqual('account1')
    });

    test('new account 2 created', () =>{
        const account = 'account2'
        expect(account).toEqual('account2')
    });

})