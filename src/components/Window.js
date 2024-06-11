import React from 'react';
import { map, values } from '@laufire/utils/collection';

const Window = (context) => {
	const { data: { windows: { x, passengers }}} = context;

	return <div>
		{ values(map(passengers, (window, key) =>
			<div
				key={ key }
				className="window"
				style={ {
					left: `${ x * (key + 1) }%`,
					backgroundImage: `url(${ process.env.PUBLIC_URL }${ window })`,
				} }

			/>)) }
	</div>;
};

export default Window;
