export default {
    get: jest.fn(() => Promise.resolve({
        data: [
            {
              rates: [
                {
                    "currency": "dolar amerykański",
                    "code": "USD",
                    "bid": 3.4034,
                    "ask": 3.4722
                    },
                    {
                    "currency": "dolar australijski",
                    "code": "AUD",
                    "bid": 2.5905,
                    "ask": 2.6429
                    }
              ]  //rates
            }
        ]
    }//end resolve ob
))

}