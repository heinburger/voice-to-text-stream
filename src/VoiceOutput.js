import React, { Component } from 'react';

class VoiceOutput extends Component {
  render() {
    return (
      <div style={{ padding: '15px', flex: '1 1 auto', display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div style={{ color: 'gray', flex: '0 0 auto' }}>{ this.props.guess || '...'}</div>
        <textarea
          style={{ fontSize: '24px', width: '100%', flex: '1 1 auto' }}
          value={ this.props.output }
          onChange={ () => false } />

      </div>
    );
  }
}

export default VoiceOutput;
