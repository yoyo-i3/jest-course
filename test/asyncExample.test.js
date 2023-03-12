const fetchDataOverApi = require('../src/fetchDataOverApi');

test('the user data for use 1', async()=>{
    const data = await fetchDataOverApi();
    expect(data).toBe('John');
})
