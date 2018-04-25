import axios from 'axios';

//http://api.nbp.pl/api/exchangerates/tables/C/today?format=json

export default async data => {
    const responce = await axios.get('http://api.nbp.pl/api/exchangerates/tables/C/today?format=json')
    return responce.data[0].rates
}


