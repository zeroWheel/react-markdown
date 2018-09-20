import React from 'react';

class Markdown extends React.Component {
	constructor(props) {
        super(props);
	}

	render() {
		let html = (
			<div className="markdown">
				<div className="markdown__header">
					<h2 className="markdown__title">Markdown</h2>
				</div>
				<textarea className="markdown__content" id="editor">
					{ this.props.markdownText }
				</textarea>
			</div>
		);

		return(html);
	}
}

export default Markdown;