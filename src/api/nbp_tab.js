import axios from 'axios';

//http://api.nbp.pl/api/exchangerates/tables/C/today?format=json

export default async () => {
    const res = await axios.get('http://api.nbp.pl/api/exchangerates/tables/C/today?format=json')
    return res.data[0].rates
}


