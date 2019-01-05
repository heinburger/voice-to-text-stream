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
    console.log('Speech recognition is not supported');
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
    console.log(e)
    return null;
  }
  return value;
};

export const setLocalStorageByKey = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    console.log(e)
    return false;
  }
  return true;
}

export const audioSupported = () => {
  return typeof window.navigator !== 'undefined' && !!window.navigator.mediaDevices;
}

export async function getAudioPermission() {
  try {
    let permissionStatus = await window.navigator.permissions.query({ name: 'microphone' });
    return permissionStatus;
  } catch (e) {
    console.log(e);
    return {};
  }
}

export const setAudioPermissionListener = (listener = () => false) => {
  try {
    window.navigator.permissions.query({ name: 'microphone' }).then((permissionStatus) => {
      permissionStatus.onchange = listener;
    })
    return true
  } catch (e) {
    console.log(e);
    return false;
  }
}

export const requestAudioPermission = () => {
  try {
    window.navigator.mediaDevices.getUserMedia({ audio: true }).then((mediaStream) => {
      const tracks = mediaStream.getAudioTracks();
      tracks[0].stop()
    })
    return true
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getAudioDevices() {
  try {
    let devices = await window.navigator.mediaDevices.enumerateDevices();
    return devices.filter((d) => d.kind === 'audioinput' && d.deviceId !== 'default');
  } catch (e) {
    console.log(e);
    return [];
  }
}

export const setAudioDeviceListener = (listener = () => false) => {
  try {
    window.navigator.mediaDevices.ondevicechange = listener
    return true
  } catch (e) {
    console.log(e);
    return false;
  }
}
