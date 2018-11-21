import React, { Component } from 'react';

class VoiceOutput extends Component {
  render() {
    return (
      <div className="VoiceOutput">
        <textarea value={ this.props.output } onChange={ () => false } />
      </div>
    );
  }
}

export default VoiceOutput;
