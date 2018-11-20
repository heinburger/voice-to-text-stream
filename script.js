var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var diagnosticPara = document.querySelector('#output');
var startBtn = document.querySelector('#start-button');
var stopBtn = document.querySelector('#stop-button');

function testSpeech() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  startBtn.textContent = 'Test in progress';
  var next = 0

  var recognition = new SpeechRecognition();
  recognition.lang = 'de-DE';
  recognition.continuous = true;

  recognition.start();
  stopBtn.addEventListener('click', function() {
    recognition.stop();
    startBtn.disabled = false;
    startBtn.textContent = 'Start';
    stopBtn.disabled = true;
  });

  recognition.onresult = function(event) {
    console.log(event.results)
    var speechResult = event.results[next][0].transcript;
    diagnosticPara.innerHTML += ' ' + speechResult;
    console.log('Confidence: ' + event.results[next][0].confidence);
    next++;
    recognition.start()
  }

  recognition.onspeechend = function() {
    recognition.start()
  }

  recognition.onerror = function(event) {
    recognition.stop()
    stopBtn.disabled = true;
    startBtn.disabled = false;
    startBtn.textContent = 'Start';
    diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
  }

  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }

  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }

  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }

  recognition.onnomatch = function(event) {
      //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
      console.log('SpeechRecognition.onnomatch');
  }

  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }

  recognition.onsoundend = function(event) {
      //Fired when any sound — recognisable speech or not — has stopped being detected.
      console.log('SpeechRecognition.onsoundend');
  }

  recognition.onspeechstart = function (event) {
      //Fired when sound that is recognised by the speech recognition service as speech has been detected.
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      console.log('SpeechRecognition.onstart');
  }
}

startBtn.addEventListener('click', testSpeech);
