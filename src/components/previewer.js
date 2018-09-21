import React from 'react';

class Previewer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let html = (
			<div id="previewer" dangerouslySetInnerHTML={this.props.renderedHTML}></div>
		);

		return (html);
	}
}

export default Previewer;