const BrowserSpeechRecognition = typeof window !== 'undefined' && (
  window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition ||
  window.oSpeechRecognition
);
const recognition = BrowserSpeechRecognition
 ? new BrowserSpeechRecognition()
 : null;

recognition.continuous = true;
recognition.interimResults = true;

recognition.onstart = (event) => {
  console.log('SpeechRecognition.onstart');
 }

recognition.onresult = (event) => {
  console.log('SpeechRecognition.onresult');
 }

recognition.onspeechend = () => {
  console.log('SpeechRecognition.onspeechend');
 }

recognition.onerror = (event) => {
  console.log('SpeechRecognition.onerror');
  console.log(event.error);
}

recognition.onaudiostart = (event) => {
  console.log('SpeechRecognition.onaudiostart');
}

recognition.onaudioend = (event) => {
  console.log('SpeechRecognition.onaudioend');
}

recognition.onend = (event) => {
  console.log('SpeechRecognition.onend');
 }

recognition.onnomatch = (event) => {
  console.log('SpeechRecognition.onnomatch');
 }

recognition.onsoundstart = (event) => {
  console.log('SpeechRecognition.onsoundstart');
 }

recognition.onsoundend = (event) => {
  console.log('SpeechRecognition.onsoundend');
 }

recognition.onspeechstart = (event) => {
  console.log('SpeechRecognition.onspeechstart');
 }

 export default recognition;
