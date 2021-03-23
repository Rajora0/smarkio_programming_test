const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: process.env.API_KEY }),
  serviceUrl: process.env.API_URL
});

exports.audio = function (text){

  const params = {
          text: text,
          voice: 'pt-BR_IsabelaV3Voice', // Optional voice
          accept: 'audio/wav'
        };
  
  textToSpeech
    .synthesize(params)
    .then(response => {
      const audio = response.result;
      return textToSpeech.repairWavHeaderStream(audio);
    })
    .catch(err => {
      console.log(err);
    });
    /* .then(repairedFile => {
      fs.writeFileSync('audio.wav', repairedFile);
      console.log('audio.wav written with a corrected wav header');
    }) */
}




// or, using WebSockets
//textToSpeech.synthesizeUsingWebSocket(params);
//synthStream.pipe(fs.createWriteStream('./audio.ogg'));
// see more information in examples/text_to_speech_websocket.js