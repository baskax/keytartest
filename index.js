const keytar = require('keytar');

keytar.getPassword('ser', 'acc').then((pass) => {
	console.log(pass)
})
