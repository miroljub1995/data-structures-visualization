import React, {Component} from 'react';
import './Pseudocode.css';

export class Pseudocode extends Component {
  render() {
    const {text, selectedLine, style} = this.props;
    const lines = text.match(/[^\r\n]+/g);
    if(!lines)
      return null;
    const rows = lines.map((line, i) => {
      return (<div key={i} className={(
          i === (selectedLine - 1))
          ? 'pseudocode-row selected'
          : 'pseudocode-row'}>
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
