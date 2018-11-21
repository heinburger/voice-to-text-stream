import React, { Component } from 'react';

class VoiceControls extends Component {
  render() {
    return (
      <div style={{ flex: '0 0 auto'}}>
        <button
          disabled={ this.props.recording }
          onClick={ this.props.onStartClick }>Start</button>
        <button
          disabled={ !this.props.recording }
          onClick={ this.props.onStopClick }>Stop</button>
        {this.props.recording && (
          <span style={{ color: 'red' }}>recording</span>
        )}
      </div>
    );
  }
}

export default VoiceControls;
