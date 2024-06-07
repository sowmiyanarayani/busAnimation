import React from 'react';

const Scene = (context) => {
	const { config: { roadHeight, backgroundHeight }} = context;

	return (
		<div
			style={ { height: `${ backgroundHeight - roadHeight }vh` } }
			className="scene"
		/>);
};

export default Scene;
