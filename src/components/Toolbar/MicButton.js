import React, { Component } from 'react';
import { inject } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import Mic from '@material-ui/icons/Mic';

class MicButton extends Component {
  componentDidMount() {
    // console.log(this.button)
  }
  render() {
    return (
        <IconButton
          buttonRef={(button) => this.button = button}
          color='inherit'
          aria-label='recording'
          onClick={this.props.speechRecognition.stopRecognition}
        >
          <Mic />
        </IconButton>
    );
  }
}

export default inject('speechRecognition')(MicButton);
