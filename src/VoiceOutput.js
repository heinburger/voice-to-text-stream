import React, { Component } from 'react';

class VoiceOutput extends Component {
  render() {
    return (
      <div style={{ padding: '15px', flex: '1 1 auto', display: 'flex', height: '100%' }}>
        <div style={{ color: 'gray' }}>{ this.props.guess }</div>
        <textarea
          style={{ fontSize: '24px', width: '100%', height: '100%' }}
          value={ this.props.output }
          onChange={ () => false } />

      </div>
    );
  }
}

export default VoiceOutput;
