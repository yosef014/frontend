<template>
<<<<<<< HEAD
<section class="page-content-container">
 <div>
    <div class="speech-to-txt" @click="startTxtToSpeech">Speech to txt</div>
    <div class="speech-transciption">
      <div v-for="(word, index) in transcription" :key="index">
        {{ word }}
      </div>
      <div>{{ runtimeTranscription }}</div>
    </div>

  </div>
</section>
=======
  <section class="page-content-container">
    <div>
      <div class="speech-to-txt" @click="startTxtToSpeech">Speech to txt</div>
      <div class="speech-transciption">
        <div v-for="(word, index) in transcription_" :key="index">
          {{ word }}
        </div>
        <div>{{ runtimeTranscription_ }}</div>
      </div>

      <div class="txt-to-speech" @click="startSpeechToTxt">Txt to speech</div>
    </div>
  </section>
>>>>>>> d05dd9d0f93d2beadd929c62e790cb21a31344d1
</template>

<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      runtimeTranscription: '',
      transcription: [],
      lang_: "es-ES",
    }
  },
  mounted () {
=======
      runtimeTranscription_: "",
      transcription_: [],
      lang_: "es-ES",
    };
  },
  mounted() {
    this.startSpeechToTxt();
>>>>>>> d05dd9d0f93d2beadd929c62e790cb21a31344d1
  },
  methods: {
    startTxtToSpeech() {
      // initialisation of voicereco
<<<<<<< HEAD
     window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.addEventListener('result', e => {
      const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    const poopScript = transcript.replace(/logo design|logo|shit|dump/gi, '😜');
    this.runtimeTranscription = poopScript;
    setTimeout(()=>{
      if(poopScript) this.$router.push('/tag/logo')
    },1500)
});

// recognition.addEventListener('end', recognition.start);
     recognition.addEventListener("end", () => {
      this.transcription.push(this.runtimeTranscription);
      this.runtimeTranscription = "";
      recognition.stop();
    });

// recognition.start();
    },
}
}
=======
      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true;
      // event current voice reco word
      recognition.addEventListener("result", (event) => {
        const text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        this.runtimeTranscription_ = text;
      });
      // end of transcription
      recognition.addEventListener("end", () => {
        this.transcription_.push(this.runtimeTranscription_);
        this.runtimeTranscription_ = "";
        recognition.stop();
      });
      recognition.start();
    },
    startSpeechToTxt() {
      // start speech to txt
      var utterance = new SpeechSynthesisUtterance("Message Envoyé");
      window.speechSynthesis.speak(utterance);
    },
  },
};
>>>>>>> d05dd9d0f93d2beadd929c62e790cb21a31344d1
</script>

<style lang="scss">
.speech-to-txt,
.txt-to-speech {
  display: grid;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid grey;
  background-color: rgb(248, 245, 245);
  font-size: 38px;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  place-items: center;
}
.speech-transciption {
  width: 500px;
  padding: 20px;
  border: 2px solid grey;
  background-color: rgb(211, 228, 253);
  border-radius: 20px;
}
</style>
