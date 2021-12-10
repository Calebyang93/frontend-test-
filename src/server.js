const axios = require('axios');

axios.get('https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });

  const https = require('https');
  const options = {
      hostname: '',
      port: 8000,
      path: '/employees',
      method: 'GET'
  }

  const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)
      res.on('data', d=> {
          process.stdout.write(d)
      })
  })
  
  req.on('error', error => {
      console.error(error);
  })

  req.end();