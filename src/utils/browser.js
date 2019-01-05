export const getScreenWidth = () => {
  return window.innerWidth;
};

export const setBodyColor = (color) => {
  document.body.style.background = color;
};

export const navigateTo = (url) => {
  window.open(url);
};

export const speechRecognitionSupported = () => {
  return typeof window !== 'undefined' && !!(
                window.SpeechRecognition ||
                window.webkitSpeechRecognition ||
                window.mozSpeechRecognition ||
                window.msSpeechRecognition ||
                window.oSpeechRecognition);
}

export const getBrowserSpeechRecognition = () => {
  if (speechRecognitionSupported()) {
    return window.SpeechRecognition ||
           window.webkitSpeechRecognition ||
           window.mozSpeechRecognition ||
           window.msSpeechRecognition ||
           window.oSpeechRecognition;
  } else {
    console.error('Speech recognition is not supported');
  }
}

export const localStorageSupported = () => {
  return typeof window !== 'undefined' && !!window.localStorage
}

export const getLocalStorageByKey = (key) => {
  let value;
  try {
    value = window.localStorage.getItem(key);
  } catch (e) {
    console.error(e)
    return null;
  }
  return value;
};

export const setLocalStorageByKey = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    console.error(e)
    return false;
  }
  return true;
}

export const audioSupported = () => {
  return typeof window.navigator !== 'undefined' && !!window.navigator.MediaDevices;
}
