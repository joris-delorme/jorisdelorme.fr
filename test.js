const axios = require('axios');
const FormData = require('form-data');
let data = new FormData();
data.append('email', 'zdfz');
data.append('password', 'sdqd');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://edsquare-calandar.vercel.app/',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
