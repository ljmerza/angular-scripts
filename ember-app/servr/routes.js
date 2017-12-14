const express = require('express');
const querystring = require('querystring');

const router = express.Router();



router.get('/order/:order_number', function(req, res, next) {
	const order_number = req.params.order_number;
	let order = orders[order_number];
	order.order.order_number = order_number + 2000;

	res.json(order);
	
});

router.get('/order/:order_number/log/:log_number', function(req, res, next) {
	const order_number = req.params.order_number;
	const log_number = req.params.log_number;

	console.log(log_number)

	let log = logs[log_number];

	res.json(log);
	
});


const orders = {
	1: {
		order: {
			order_number: '',
			start: new Date(),
			end: 002,
			referral: [
				{
					id: '1-1',
					stop: 1,
					go: 2,
					log: 1
				},
				{
					id: '1-2',
					stop: 1,
					go: 2,
					log: 2
				},
				{
					id: '1-3',
					stop: 1,
					go: 2,
					log: 3
				}
			]
		}
	},
	2: {
		order_number: '',
		order: {
			start: new Date(),
			end: 067,
			referral: [
				{
					id: '2-1',
					stop: 10,
					go: 20,
					log: 2,
				},
				{
					id: '2-2',
					stop:123,
					go: 2412,
					log: 1,
				}
			]
		}
	}
}

const logs = {
	1: {
		'order/log': {
			id: '1',
			log: 'this is a log 1'
		}
	},
	2: {
		'order/log': {
			id: '2',
			log: 'this is a log 2'
		}
	},
	3: {
		'order/log': {
			id: '3',
			log: 'this is a log 3'
		}
	},
	4: {
		'order/log': {
			id: '4',
			log: 'this is a log 4'
		}
	}
}

module.exports = router;
