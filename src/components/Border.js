import { React } from 'react';
const Border = (context) => {
	const { config: { borders }} = context;

	return borders.map((border, index) =>
		<div
			key={ index }
			className="border"
			{ ...{ style: { top: `${ border.x }%` }} }
		/>);
};

export default Border;
