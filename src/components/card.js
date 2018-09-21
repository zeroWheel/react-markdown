import React from 'react';
import marked from 'marked';
import Previewer from './previewer';
import markdownTextDefault from '../data/default';

// Check if there is data in users local storage
let markdownText = localStorage.getItem('markdownText') ? localStorage.getItem('markdownText') : markdownTextDefault;

// Rewrite link render and add the attribut 'target="_blank"'
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
	return `<a target="_blank" href="${href}">${text}` + '</a>';
}

marked.setOptions({
	gfm: true,
	tables: true,
	sanitize: false
});

class Card extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			change: false,
			renderedHTML: { __html: marked(markdownText, { renderer }) },
			markdown: markdownText
		}

		this.renderMarked = this.renderMarked.bind(this);
	}

	renderMarked() {
		let beforeMarked = document.getElementById('editor').value;

		this.setState({
			renderedHTML: { __html: marked(beforeMarked, { renderer }) }
		});

		localStorage.setItem('markdownText', beforeMarked); // Save markdown in the local storage
	}

	render() {
		let content = (
			<div className="content">
				<textarea id="editor" onChange={this.renderMarked} >{this.state.markdown}</textarea>
				<Previewer renderedHTML={this.state.renderedHTML} />
			</div>
		);

		return (content);
	}
}

export default Card;