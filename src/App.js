import { React } from 'react';
import './App.scss';
import Scene from './components/Scene';
import Road from './components/Road';
import Bus from './components/Bus';

const App = (context) =>
	<div>
		<Scene { ...context }/>
		<Road { ...context }/>
		<Bus { ...context }/>
	</div>;

export default App;
