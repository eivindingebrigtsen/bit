var bitcoin = require('bitcoin');
// all config options are optional
var client = new bitcoin.Client({
  host: '128.199.99.100',
  port: 2787,
  user: 'chain1',
  timeout: 30000
});

client.getBalance('*', 0, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});