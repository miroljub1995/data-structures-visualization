import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Pseudocode.css';

export class Pseudocode extends Component {

  componentDidMount() {
      this.componentDidUpdate();
  }

  componentDidUpdate(prevProps) {
    if (this.selected) {
      const myDomNode = ReactDOM.findDOMNode(this.selected);
        myDomNode.scrollIntoView(false);
    }
  }

  render() {
    const {text, selectedLine, style} = this.props;
    const lines = text.match(/[^\r\n]+/g);
    if (!lines)
      return null;
    const rows = lines.map((line, i) => {
      if (i === (selectedLine - 1))
        return (<div key={i} ref={e => this.selected = e} className='pseudocode-row selected'>
          <div className='line-number'>{`${i + 1}`}</div>
          <div className='text-container'>
            <pre className='text'>{line}</pre>
          </div>
        </div>);
      return (<div key={i} className='pseudocode-row'>
        <div className='line-number'>{`${i + 1}`}</div>
        <div className='text-container'>
          <pre className='text'>{line}</pre>
        </div>
      </div>);
    });
    return (<div className='pseudocode' style={style}>
      <div className='pseudocode-title'>
        <h3>Pseudocode</h3>
      </div>
      <div className='pseudocode-rows'>
        {rows}
      </div>
    </div>);
  }
}
