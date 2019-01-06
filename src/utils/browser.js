const logError = (e) => {
  // make this better:
  if (process.env.NODE_ENV !== 'test') {
    console.error(e)
  }
}

export const getScreenWidth = () => {
  return window.innerWidth;
};

export const getScreenHeight = () => {
  return window.innerHeight;
};

export const setBodyColor = (color) => {
  document.body.style.background = color;
};

export const navigateTo = (url) => {
  window.open(url);
};

export const checkIfOnline = () => {
  return window.navigator.onLine
}

export const setOnlineListener = (listener = () => false) => {
  const wrappedListener = () => listener(checkIfOnline());
  window.addEventListener('offline', wrappedListener);
  window.addEventListener('online', wrappedListener);
}

export const speechRecognitionSupported = typeof window !== 'undefined' &&
                                          !!(window.SpeechRecognition ||
                                             window.webkitSpeechRecognition ||
                                             window.mozSpeechRecognition ||
                                             window.msSpeechRecognition ||
                                             window.oSpeechRecognition);


export const getBrowserSpeechRecognition = () => {
  if (speechRecognitionSupported) {
    return window.SpeechRecognition ||
           window.webkitSpeechRecognition ||
           window.mozSpeechRecognition ||
           window.msSpeechRecognition ||
           window.oSpeechRecognition;
  } else {
    return null;
  }
}

export const localStorageSupported = typeof window !== 'undefined' &&
                                     !!window.localStorage;

export const getLocalStorageByKey = (key) => {
  let value;
  try {
    value = window.localStorage.getItem(key);
  } catch (e) {
    logError(e)
    return null;
  }
  return value;
};

export const setLocalStorageByKey = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    logError(e)
    return false;
  }
  return true;
}

export const permissionSupported = typeof window !== 'undefined' &&
                                   typeof window.navigator !== 'undefined' &&
                                   !!window.navigator.permissions;

export async function getAudioPermission() {
  try {
    let permissionStatus = await window.navigator.permissions.query({ name: 'microphone' });
    return permissionStatus;
  } catch (e) {
    logError(e);
    return {};
  }
}

export async function requestAudioPermission() {
  try {
    let mediaStream = await window.navigator.mediaDevices.getUserMedia({ audio: true })
    const tracks = mediaStream.getAudioTracks();
    if (tracks.length) {
      tracks[0].stop();
    }
    return true;
  } catch (e) {
    logError(e);
    return false;
  }
}

export async function checkAudioPermission() {
  if (permissionSupported) {
    let permissionStatus = await getAudioPermission();
    return permissionStatus.state === 'granted';
  } else {
    let userPromptPermission = await requestAudioPermission();
    return userPromptPermission;
  }
}

export async function setAudioPermissionListener(listener = () => false) {
  try {
    let permissionStatus = await window.navigator.permissions.query({ name: 'microphone' })
    permissionStatus.onchange = listener;
    return true
  } catch (e) {
    logError(e);
    return false;
  }
}

export const audioSupported = typeof window !== 'undefined' &&
                              typeof window.navigator !== 'undefined' &&
                              !!window.navigator.mediaDevices;

export async function getAudioDevices() {
  try {
    let devices = await window.navigator.mediaDevices.enumerateDevices();
    return devices.filter((d) => d.kind === 'audioinput' && d.deviceId !== 'default');
  } catch (e) {
    logError(e);
    return [];
  }
}

export const setAudioDeviceListener = (listener = () => false) => {
  try {
    window.navigator.mediaDevices.ondevicechange = listener
    return true
  } catch (e) {
    logError(e);
    return false;
  }
}
