<template>
  <div class="sheet">
    <div :id="audioId" class="abc-tune" />
    <div :id="tuneId" class="abc-sheet" />


    <v-btn icon small :ripple="false" class="loop" @click="toggleLoop">
      <v-icon :color="loop ? 'success' : ''">mdi-infinity</v-icon>
    </v-btn>
    <v-btn icon small :ripple="false" class="stop" :disabled="!isPlaying" @click="stop">
      <v-icon>mdi-stop</v-icon>
    </v-btn>
    <v-btn icon small :ripple="false" class="pause" :disabled="!isPlaying" @click="pause">
      <v-icon>mdi-pause</v-icon>
    </v-btn>
    <v-btn icon small :ripple="false" class="play" :disabled="isPlaying" @click="play">
      <v-icon>mdi-play</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: [ 'abcTune', 'abcOptions' ],
  data() {
    const uid = `${Math.random()}`.replace(".", "")
    
    return {
      tuneId: `tune_${uid}`,
      audioId: `audio_${uid}`,
      abcObj: null,
      synthControl: null,
      isPlaying: false,
      loop: false
    }
  },
  mounted() {
    this.abcObj = this.$abcjs.renderAbc(this.tuneId, this.abcTune, this.abcOptions)
    this.initWidget()
  },
  methods: {
    play() {
      if (this.synthControl && !this.isPlaying) {
        this.synthControl.play()
        this.isPlaying = true
      }
    },
    pause() {
      if (this.synthControl && this.isPlaying) {
        this.synthControl.pause()
        this.synthControl.play()
        this.synthControl.pause()
        this.isPlaying = false
      }
    },
    stop() {
      if (this.synthControl) {
        this.synthControl.restart()
        this.pause()
        
        this.isPlaying = false
      }
    },
    toggleLoop() {
      if (this.synthControl) {
        this.synthControl.toggleLoop()
        this.loop = !this.loop
      }
    },
    async initWidget() {
      const self = this

      const CursorControl = function() {
        this.onFinished = function() {
          self.isPlaying = false
        }
      };
      const audioParams = { chordsOff: true };

      if (this.$abcjs.synth.supportsAudio()) {
	      const synthControl = new this.$abcjs.synth.SynthController();
	      synthControl.load(`#${this.audioId}`, 
          new CursorControl(), 
          {
            displayProgress: true, 
            displayWarp: true
          }
        );
        await synthControl.setTune(this.abcObj[0] , false, audioParams)
        this.synthControl = synthControl
      }
    }
  }
}
</script>

<style>
  .sheet {
    position: relative;
  }

  .play, .pause, .stop, .loop {
    position: absolute;
    top: -2px;
  }

  .play {
    right: 0;
  }

  .pause {
    right: 25px;
  }

  .stop {
    right: 50px;
  }

  .loop {
    right: 75px;
  }

  .abc-tune {
    background-color: grey;
  }

  .abc-sheet {
    background-color: white;
  }

  @media print {
    .abc-sheet {
      width: 21cm;
    }
  }
</style>