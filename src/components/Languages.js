import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { supportedLangs } from '../utils';

class Languages extends Component {
  render() {
    const { lang, setLang } = this.props.speechRecognition
    const { langSelectDisabled } = this.props.view
    return (
      <div style={{ flex: '0 0 auto'}}>
        <select
          style={{ margin: '3px' }}
          disabled={ langSelectDisabled }
          onChange={ (e) => setLang(e.target.value) }
          value={ lang }
        >
        {
          supportedLangs.map((lang) => (
            <option key={ lang } value={ lang }>{ lang }</option>
          ))
        }
        </select>
      </div>
    );
  }
}

export default inject('view', 'speechRecognition')(observer(Languages));
