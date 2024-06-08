import { React } from 'react';
const Border = (context) => {
	const { config: { borders }} = context;

	return borders.map((border, index) =>
		<div
			key={ index }
			{ ...{
				style: { top: `${ border.x }%` },
				className: 'border',
			} }
		/>);
};

export default Border;
