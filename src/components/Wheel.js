import React from 'react';
import { map } from '@laufire/utils/collection';

const Wheel = (context) => {
	const { config: { wheels }} = context;

	return <div>
		{ map(wheels, (wheel, index) =>
			<div
				key={ index }
				{ ...{
					style: {	left: `${ wheel.x }%`	 },
					className: 'wheelCover',
				} }
			>
				<div className="wheel">
					<div className="rim"/>
				</div></div>) }
	</div>;
};

export default Wheel;
