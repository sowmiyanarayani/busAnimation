import { React } from 'react';
import getRandomColor from '../services/getRandomColor';
import Window from './Window';
import Wheel from './Wheel';
import Border from './Border';
const getBusStyle = (context) => {
	const { config: { roadHeight, busHeight }, data: bus } = context;

	return {
		width: `${ bus.size }%`,
		height: `${ bus.size - busHeight }%`,
		bottom: `${ roadHeight - bus.y }%`,
		left: `${ bus.x }%`,
		animation: `${ bus.animation } 10s linear infinite`,
		backgroundColor: `#${ getRandomColor() }`,
		transform: `scaleX(${ bus.direction })`,
	};
};

const Bus = (context) => {
	const { config: { buses }} = context;

	return <div>
		{ buses.map((bus, key) =>
			<div
				key={ key }
				className="bus"
				style={ getBusStyle({ ...context, data: bus }) }
			>
				<div className="topCarrier"/>
				<Border { ...context }/>
				<div className="light"/>
				<div className="driver"/>
				<Window { ...{ ...context, data: bus } }/>
				<div className="door"/>
				<Wheel { ...context }/>
			</div>) }
	</div>;
};

export default Bus;
