import { rndBetween } from '@laufire/utils/lib';
import { rndValues } from '@laufire/utils/random';

const windowsCount = 5;
const windows = [
	'./assets/boy1.jpg',
	'./assets/boy2.jpeg',
	'./assets/boy3.jpeg',
	'./assets/boy4.jpeg',
	'./assets/boy5.jpeg',
	'./assets/girl1.jpeg',
	'./assets/girl2.jpeg',
	'./assets/girl3.webp',
	'./assets/girl4.jpeg',
	'./assets/girl5.jpg',
];
const images = rndValues(windows, windowsCount);
const minSize = 40;
const maxSize = 50;

const config = {
	backgroundHeight: 150,
	roadHeight: 30,
	stripes: { count: 8, x: 15 },

	wheels: [{ x: 3.1 }, { x: 76.5 }],
	busHeight: 20,
	buses: [
		{
			x: 0,
			y: 3,
			animation: 'busForward',
			direction: 1,
			driverImage: './images/driver1.png',
			windows: { x: 1.4, passengers: images },
			size: rndBetween(minSize, maxSize),
		},
		{
			x: 20,
			y: 10,
			animation: 'nextBusForward',
			direction: 1,
			driverImage: './images/driver.png',
			windows: { x: 1.4, passengers: images },
			size: rndBetween(minSize, maxSize),
		},
		{
			x: 40,
			y: 20,
			animation: 'busReverse',
			direction: -1,
			driverImage: './images/driver2.jpeg',
			windows: { x: 1.4, passengers: images },
			size: rndBetween(minSize, maxSize),
		},
		{
			x: 60,
			y: 30,
			animation: 'nextBusReverse',
			direction: -1,
			driverImage: './images/driver3.jpeg',
			windows: { x: 1.4, passengers: images },
			size: rndBetween(minSize, maxSize),
		},
	],

};

export default config;
