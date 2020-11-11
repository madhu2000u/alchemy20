const size = 'b'; // s, b, t, m, l, h
const people = [
	{
		chairmen: [
			{
				isHead: true,
				img: 'https://imgur.com/36vQ3IK' + size + '.jpg',
				alt: 'Image of Surya',
				name: 'Surya BJ',
				title: 'CHAIRMAN',
				phno: '+91 99945 41821',
			},
		],
	},
	{
		heads: [
			{
				isHead: true,
				img: 'https://imgur.com/2qCRl2e' + size + '.jpg',
				alt: 'Image of Kande',
				name: 'Ashish Kande',
				title: 'OVERALL\nCOORDINATOR',
				phno: '+91 94418 83896',
			},
			{
				isHead: true,
				img: 'https://imgur.com/MAH9Kiw' + size + '.jpg',
				alt: 'Image of Atti',
				name: 'Atti Srinivas',
				title: 'VICE CHAIRMAN',
			},
			{
				isHead: true,
				img: 'https://imgur.com/dU13byd' + size + '.jpg',
				alt: 'Image of Maank',
				name: 'Mayank',
				title: 'TREASURER',
				phno: '+91 87091 67370',
			},
		],
	},
	{
		contents: [
			{
				isHead: false,
				img: 'https://imgur.com/jQTil68' + size + '.jpg',
				alt: 'Image of Viswa',
				name: 'Viswa',
			},

			{
				isHead: false,
				img: 'https://imgur.com/uJ20tj3' + size + '.jpg',
				alt: 'Image of Saatvi',
				name: 'Saatvi',
			},

			{
				isHead: false,
				img: 'https://imgur.com/ZEPrfme' + size + '.jpg',
				alt: 'Image of Mithran',
				name: 'Mithran',
			},
		],
	},
	{
		publicitys: [
			{
				isHead: false,
				img: 'https://imgur.com/8aQzsww' + size + '.jpg',
				alt: 'Image of Ansinath',
				name: 'Ansinath',
			},
			{
				isHead: false,
				img: 'https://imgur.com/PTPc4D2' + size + '.jpg',
				alt: 'Image of Harie',
				name: 'Harie',
			},
			{
				isHead: false,
				img: 'https://imgur.com/tI7SeXZ' + size + '.jpg',
				alt: 'Image of Moneesh',
				name: 'Moneesh',
			},
		],
	},
	{
		ocs: [
			{
				isHead: false,
				img: 'https://imgur.com/5Mu8TRr' + size + '.jpg',
				alt: 'Image of Shashank',
				name: 'Shashank',
			},
			{
				isHead: false,
				img: 'https://imgur.com/aOADvaP' + size + '.jpg',
				alt: 'Image of Dinakar',
				name: 'Dinakar',
			},
		],
	},
	{
		webops: [
			{
				isHead: false,
				img: 'https://imgur.com/D6jd44h' + size + '.jpg',
				alt: 'Image of Madhu',
				name: 'Madhu',
			},
			{
				isHead: false,
				img: 'https://imgur.com/fkhdFhX' + size + '.jpg',
				alt: 'Image of Shambu',
				name: 'Shambu',
			},
		],
	},
	{
		prh: [
			{
				isHead: false,
				img: 'https://imgur.com/piKtlDq' + size + '.jpg',
				alt: 'Image of Manohar',
				name: 'Manohar',
			},
		],
	},
	{
		designs: [
			{
				isHead: false,
				img: 'https://imgur.com/IGNsRI7' + size + '.jpg',
				alt: 'Image of Naveen',
				name: 'Naveen',
			},
			{
				isHead: false,
				img: 'https://imgur.com/96zLe4t' + size + '.jpg',
				alt: 'Image of Rasika',
				name: 'Rasika',
			},
		],
	},
	{
		markets: [
			{
				isHead: false,
				img: 'https://imgur.com/XuQVuJJ' + size + '.jpg',
				alt: 'Image of Nimrisha',
				name: 'Nimrisha',
			},
			{
				isHead: false,
				img: 'https://imgur.com/Gry5psh' + size + '.jpg',
				alt: 'Image of Arindam',
				name: 'Arindam',
			},
		],
	},
	{
		gls: [
			{
				isHead: false,
				img: 'https://imgur.com/Th0LV1s' + size + '.jpg',
				alt: 'Image of Nila',
				name: 'Nila',
			},
			{
				isHead: false,
				img: 'https://imgur.com/QlMfCK9' + size + '.jpg',
				alt: 'Image of Nishanth',
				name: 'Nishanth',
			},
		],
	},
	{
		events: [
			{
				isHead: false,
				img: 'https://imgur.com/xSs1EY1' + size + '.jpg',
				alt: 'Image of Harshit',
				name: 'Harshit',
			},

			{
				isHead: false,
				img: 'https://imgur.com/qrnz0Mg' + size + '.jpg',
				alt: 'Image of Govind',
				name: 'Govind',
			},

			{
				isHead: false,
				img: 'https://imgur.com/7tUu4az' + size + '.jpg',
				alt: 'Image of Anuj',
				name: 'Anuj',
			},

			{
				isHead: false,
				img: 'https://imgur.com/BEKWECT' + size + '.jpg',
				alt: 'Image of Dharshini',
				name: 'Dharshini',
			},
		],
	},
	{
		workshops: [
			{
				isHead: false,
				img: 'https://imgur.com/KQtTPQa' + size + '.jpg',
				alt: 'Image of Devender',
				name: 'Devender',
			},

			{
				isHead: false,
				img: 'https://imgur.com/gjR7tDF' + size + '.jpg',
				alt: 'Image of Sriram',
				name: 'Sriram',
			},

			{
				isHead: false,
				img: 'https://imgur.com/07KfjSn' + size + '.jpg',
				alt: 'Image of Afnas (PG)',
				name: 'Afnas (PG)',
			},

			{
				isHead: false,
				img: 'https://imgur.com/oywxgWx' + size + '.jpg',
				alt: 'Image of Franklin (PG)',
				name: 'Franklin (PG)',
			},
		],
	},
];

export {people};
