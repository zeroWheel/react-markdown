import React from 'react';
import marked from 'marked';

class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        function renderMarkdown( mrkd ){
            let html = marked(mrkd);

            return {__html: html};
        };

        let html = (
            <div className="preview">
				<div className="preview__header">
					<h2 className="preview__title">Preview</h2>
				</div>
				<div className="preview__content" id="previewer" dangerouslySetInnerHTML={ renderMarkdown( this.props.previewText ) }>
				</div>
			</div>
        );
        return(html);
    }
}

export default Previewer;