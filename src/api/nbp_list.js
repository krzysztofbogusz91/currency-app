import axios from 'axios';
//http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/last/{topCount}/
//http://api.nbp.pl/api/exchangerates/rates/C/USD/last/10?format=json

export default async (code, count) => {
    const res = await axios.get(`http://api.nbp.pl/api/exchangerates/rates/C/${code}/last/${count}?format=json`)
   // console.log(res.data.rates)
    return res.data.rates
}


