import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card';
import Controls from './components/controls';

class Container extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		let html = (
			<div className="container">
				<Card />
				<Controls />
			</div>
		);

		return (html);
	}
}

ReactDOM.render(<Container />, document.getElementById('root'));


