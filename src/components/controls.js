import React from 'react';

class Controls extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let controls = (
			<div className="social">
				<ul className="social__list">
					<li className="social__item">
						<a className="social__link" target="_blank" title="Front End Libraries Projects - Build a Markdown Previewer" href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer">
							<i className="social__icon  fab fa-free-code-camp"></i>
						</a>

					</li>
					<li className="social__item">
						Coded by <a href="https://www.freecodecamp.org/zerowheel" target="_blank" className="social__link">ZeroWheel</a> . Check the source code
					</li>
					<li className="social__item">
						<a href="https://github.com/zeroWheel" target="_blank" className="social__link"><i className="social__icon fab fa-github"></i></a>
					</li>
				</ul>
			</div>
		);

		return (controls);
	}
}

export default Controls;