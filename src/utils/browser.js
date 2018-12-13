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
                window.oSpeechRecognition)
}

export const getBrowserSpeechRecognition = () => {
  if (speechRecognitionSupported()) {
    return window.SpeechRecognition ||
           window.webkitSpeechRecognition ||
           window.mozSpeechRecognition ||
           window.msSpeechRecognition ||
           window.oSpeechRecognition
  } else {
    console.error('Speech recognition is not supported');
  }
}

export const localStorageSupported = () => {
  return typeof window !== 'undefined' && !!window.localStorage
}

export const getLocalStorageByKey = (key) => {
  if (localStorageSupported()) {
    return window.localStorage.getItem(key)
  } else {
    console.error('localStorage is not supported')
  }
};

export const setLocalStorageByKey = (key, value) => {
  if (localStorageSupported()) {
    window.localStorage.setItem(key, value)
  } else {
    console.error('localStorage is not supported')
  }
}
