const Web3 = require('web3');

// create a new instance of web3 using an HTTP provider
const web3 = new Web3('http://localhost:8545');

// get the password from the user
//const password = prompt('Enter a password for your new account');
const mail = "lovachakravarthi@gmail.com";
const password ="ChakriChax@123"
const x = Math.random().toString();
const addressData =mail+x+password;

// create a new account with the provided password
const account = web3.eth.accounts.create(web3.utils.randomHex(32), addressData);

// log the new account's address
console.log("Your Address : ",account.address);
