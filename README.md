#Running a Single Test File
You could also run a single test file by using something like this:


`npm run test multiply.test.js`

So instead of running the entire test suite, this will just run this particular file.

When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed before it can move on to the next line of code.
Think about any app or code that has to call an endpoint or service to get data.
When you call an endpoint, you are sending through async code so you would need to let Jest know when the code is finished before it can continue with the next line.
If that isn't done, the test will probably fail because it will start the next line immediately after the previous.

#Async/await
Luckily Jest has three different ways to handle this — that is callbacks, promises, and async/await.
Let's assume the fetchDataOverApi function makes a call to an external API over a network, and it returns “John”.
If this code was to be run without the async/await portion, the test will complete and probably fail without returning any data as the call over the network will not be complete in time before the code executes from top to bottom.
So how would we fix this test?
let's make this async and await.
```
// async example
test('the user data for user 1', async() => {
    const data = await fetchDataOverApi();
    expect(data).toBe('John');
}); 
```
So basically, the code will wait for the fetch data function, fetchDataOverApi function, to be complete before moving on to the next line.

That's how you would use





