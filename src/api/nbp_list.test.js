import dataMock from 'axios';
import dataMockList from './nbp_list';
import  respo  from '../__mocks__/axios-list'



describe('mock axios mock and test api list', () => {
   
    it('should call axios mock and return data', async () => {
        //change default axios mock
        dataMock.get.mockImplementationOnce(()=> Promise.resolve(respo)) 
        
        const currencies = await dataMockList();
        expect(currencies.length).toBe(4);
        expect(currencies[0].code).toEqual('USD');

        // it('should have length 2', () => {
        //     console.log(currencies.length)
        //     expect(currencies.length).toBe(2);
        // });
        
        // it('should contain name of currency', () => {
        //     expect(currencies[0].currencies).toEqual('dolar amerykański')
        // });
     });
});
