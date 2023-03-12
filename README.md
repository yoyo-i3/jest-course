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

#snapshots
Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
For example, if you were performing a UI test with Jest, a typical snapshot test case for a mobile app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test.
The test will fail if the two snapshots do not match — either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.
with Jest snapshots it's possible to test and assert the output of any serializable value.
Let's assume the following scenario.

We have a list of items which we call itemStock and it's stock count stored in some form of an array object.
In some way we want to be able to filter with one of its attributes. So as mentioned, this is our item’s stock count, which basically has an id and then the ItemName with it stock count.
We then have the filter function filterItemStock, which basically looks at the array above and then with specific keys or terms, it will filter by those and then return the object based on that filter.

Then we proceed to adding a test.
In here we basically have the test that will return all items with matching id.
In this instance, we look at the itemstock and we have id equals to 1.
So, in that instance we have id equals to 1 which is “Razors” with a stock count of 10. That's what we assert on.

Usually when testing something similar to this, we need to manually type and assert each expected return value.
```
test('it returns all items with matching Item Name',() =>{
    expect(filterItemStock(itemStock,'ItemName', 'Socks')).toEqual([
      { 'Id': '2', 'ItemName': 'Socks', 'Stock': '1'},
      { 'Id': '4', 'ItemName': 'Socks', 'Stock': '100'},
    ])
})
```
With snapshots you could just replace some of the code above with the toMatchSnapshot function.
```
test('it returns all items with matching Item Name',() =>{
    expect(filterItemStock(itemStock,'ItemName', 'Socks')).toMatchSnapshot();
})
```
_snapshots_ folder is created with snapshots saved
It's basically created snapshot of our expected value in here as an array that's basically similar to the assertion that we had previously.













