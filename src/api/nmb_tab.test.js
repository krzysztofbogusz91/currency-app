import dataMock from './nbp_tab';

describe('mock axios and test api', () => {
    
    it('should call axios and return data', async () => {
        const currencies = await dataMock();
        
        it('should have length 2', () => {
           // console.log(currencies)
            expect(currencies.length).toBe(2);
        });
        
        it('should contain name of currency', () => {
            expect(currencies[0].currencies).toEqual('dolar amerykański')
        });
     });
});
