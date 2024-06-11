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
	backgroundHeight: 140,
	roadHeight: 25,
	stripes: { count: 10, x: 15 },
	wheels: [{ x: 1 }, { x: 83 }],
	borders: [{ x: 14 }, { x: 70 }, { x: 80 }],
	busHeight: 20,
	buses: [
		{
			x: 0,
			y: 3,
			animation: 'busForward',
			direction: 1,
			driverImage: './assets/driver3.jpg',
			windows: { x: 1.4, passengers: images },
			size: rndBetween(minSize, maxSize),
		},
		{
			x: 20,
			y: 10,
			animation: 'nextBusForward',
			direction: -1,
			driverImage: './assets/driver3.jpg',
			windows: { x: 1.4, passengers: images },
			size: rndBetween(minSize, maxSize),
		},
		{
			x: 30,
			y: 20,
			animation: 'busReverse',
			direction: 1,
			driverImage: './assets/driver3.jpg',
			windows: { x: 1.4, passengers: images },
			size: rndBetween(minSize, maxSize),
		},
	],

};

export default config;
