import React from 'react';

const Wheel = (context) => {
	const { config: { wheels }} = context;

	return wheels.map((wheel, index) =>
		<div
			key={ index }
			className="wheelCover"
			{ ...{ style: {	left: `${ wheel.x }%` }} }
		>
			<div className="wheel">
				<div className="rim"/>
			</div></div>);
};

export default Wheel;
