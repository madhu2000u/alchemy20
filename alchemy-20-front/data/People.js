const size = 'b'; // s, b, t, m, l, h
const people = [
	{
		chairmen: [
			{
				isHead: true,
				img: 'https://i.imgur.com/miFL4gS.jpeg' + size + '.jpg',
				alt: 'Image of Sriram',
				name: 'Sriram',
				title: 'CHAIRMAN',
				phno: '+91 99945 41821',
			},
		],
	},
	{
		heads: [
			{
				isHead: true,
				img: 'https://i.imgur.com/gIWUpIQ.jpeg' + size + '.jpg',
				alt: 'Image of Shashank',
				name: 'Shashank',
				title: 'OVERALL\nCOORDINATOR',
				phno: '+91 94419 22120',
			},
			{
				isHead: true,
				img: 'https://i.imgur.com/Fty6eDZ.jpeg' + size + '.jpg',
				alt: 'Image of Neeraj',
				name: 'Neeraj',
				title: 'VICE CHAIRMAN',
			},
			{
				isHead: true,
				img: 'https://i.imgur.com/EBAkg9C.jpeg' + size + '.jpg',
				alt: 'Image of Dinakar',
				name: 'Dinakar',
				title: 'TREASURER',
				phno: '+91 79040 15861',
			},
		],
	},
	{
		contents: [
			{
				isHead: false,
				img: 'https://i.imgur.com/eRXDcSq.jpeg' + size + '.jpg',
				alt: 'Image of Pranav',
				name: 'Pranav',
			},

			{
				isHead: false,
				img: 'https://i.imgur.com/aBB3sVg.jpeg' + size + '.jpg',
				alt: 'Image of Shreya Varanasi',
				name: 'Shreya Varanasi',
			},
		],
	},
	{
		publicitys: [
			{
				isHead: false,
				img: 'https://i.imgur.com/4qQqhx0.jpeg' + size + '.jpg',
				alt: 'Image of Arvindh Raj',
				name: 'Arvindh Raj',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/KuqPS7O.jpeg' + size + '.jpg',
				alt: 'Image of Moneesh',
				name: 'Moneesh',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/1iTZLIq.jpeg' + size + '.jpg',
				alt: 'Image of Varshini',
				name: 'Varshini',
			},
		],
	},
	{
		ocs: [
			{
				isHead: false,
				img: 'https://i.imgur.com/bH99pIn.jpeg' + size + '.jpg',
				alt: 'Image of Anupriya',
				name: 'Anupriya',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/GRjggSe.jpeg' + size + '.jpg',
				alt: 'Image of Manohar',
				name: 'Manohar',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/cpDiMr4.jpeg' + size + '.jpg',
				alt: 'Image of Niruthan',
				name: 'Niruthan',
			},
		],
	},
	{
		webops: [
			{
				isHead: false,
				img: 'https://i.imgur.com/dXYFWuv.jpeg' + size + '.jpg',
				alt: 'Image of Madhu Sudhanan',
				name: 'Madhu Sudhanan',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/mWhgpcy.jpeg' + size + '.jpg',
				alt: 'Image of Shashwat',
				name: 'Shashwat',
			},
		],
	},
	{
		prh: [
			{
				isHead: false,
				img: 'https://i.imgur.com/JY1Sraw.jpeg' + size + '.jpg',
				alt: 'Image of Gaayathri',
				name: 'Gaayathri',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/K1xdQ4H.jpeg' + size + '.jpg',
				alt: 'Image of Manoj Kumar',
				name: 'Manoj Kumar',
			},
		],
	},
	{
		designs: [
			{
				isHead: false,
				img: 'https://i.imgur.com/WXC2Hie.jpeg' + size + '.jpg',
				alt: 'Image of Sabitha',
				name: 'Sabitha',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/SJygHsy.jpeg' + size + '.jpg',
				alt: 'Image of Sabitha',
				name: 'Sabitha',
			}
		],
	},
	{
		markets: [
			{
				isHead: false,
				img: 'https://i.imgur.com/viEF6v3.jpeg' + size + '.jpg',
				alt: 'Image of Aditi Patil',
				name: 'Aditi Patil',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/zZTax1s.jpeg' + size + '.jpg',
				alt: 'Image of Srividya',
				name: 'Srividya',
			},
		],
	},
	{
		gls: [
			{
				isHead: false,
				img: 'https://i.imgur.com/iiezYLr.jpeg' + size + '.jpg',
				alt: 'Image of Harshidaa S Nair',
				name: 'Harshidaa S Nair',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/l9KfKHh.jpeg' + size + '.jpg',
				alt: 'Image of Nishanth',
				name: 'Nishanth',
			},
		],
	},
	{
		events: [
			{
				isHead: false,
				img: 'https://i.imgur.com/LnmANa0.jpeg' + size + '.jpg',
				alt: 'Image of Anika Singh',
				name: 'Anika Singh',
			},

			{
				isHead: false,
				img: 'https://i.imgur.com/JRv50Vp.jpeg' + size + '.jpg',
				alt: 'Image of Anusha',
				name: 'Anusha',
			},

			{
				isHead: false,
				img: 'https://i.imgur.com/5b3YWok.jpeg' + size + '.jpg',
				alt: 'Image of Rahul',
				name: 'Rahul',
			},
		],
	},
	{
		workshops: [
			{
				isHead: false,
				img: 'https://i.imgur.com/9cGgCkx.jpeg' + size + '.jpg',
				alt: 'Image of Janagan',
				name: 'Janagan',
			},

			{
				isHead: false,
				img: 'https://i.imgur.com/RHJXaLH.jpeg' + size + '.jpg',
				alt: 'Image of Raamesh',
				name: 'Raamesh',
			},

			{
				isHead: false,
				img: 'https://i.imgur.com/FH9nYpA.jpeg' + size + '.jpg',
				alt: 'Image of Riyanshi',
				name: 'Riyanshi',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/gf69bJg.jpeg' + size + '.jpg',
				alt: 'Image of Vamsi',
				name: 'Vamsi',
			},
			{
				isHead: false,
				img: 'https://i.imgur.com/UrgapEN.jpeg' + size + '.jpg',
				alt: 'Image of Jayasagar',
				name: 'Jayasagar',
			},
		],
	},
];

export {people};
