import React from 'react';

const Scene = (context) => {
	const { config: { roadHeight, backgroundHeight }} = context;

	return (
		<div
			className="scene"
			style={ { height: `${ backgroundHeight - roadHeight }vh` } }
		/>);
};

export default Scene;
