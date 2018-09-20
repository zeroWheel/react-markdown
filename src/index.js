import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'marked';
import Markdown from './markdown';
import Previewer from './preview';

class Mark extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            marked: '# That how marked looks like'
        }
    }

    render() {
        let html = (
            <div className="container">
                <Markdown markdownText={ this.state.marked } />
                <Previewer previewText={ this.state.marked } />
            </div>
        );
       return(html);
    }
}

ReactDOM.render(<Mark />, document.getElementById('root'));


