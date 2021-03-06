import Vue from 'vue'
import Bar from './bar'
import Chord from './chord'
import Scale from './scale'

class Tune {
  constructor({
    title,
    subtitle,
    measure,
    tone,
    theme,
    chords,
    tempo
  }
  ) {
    this.title = title
    this.subtitle = subtitle
    this.measure = measure
    this.tone = tone
    this.tempo = (tempo ? tempo / 2 : 90)
    this.chords = chords || []
    this.bars = theme.map(barsLine =>
      barsLine.map(bar => 
        new Bar(bar)
      )
    )
  }

  toAbcTheme() {
    let toAbcTheme = "X: 1\n" +
    `T: ${this.title}\n` +
    `Q: 1/2=${this.tempo}\n`+
    `M: ${this.measure}\n` +
    `L: 1/8\n` +
    `R: ${this.subtitle}\n` +
    `K: ${this.tone} \n` +
    this.bars.map(barsLine => {
      let annotedLine = []
      let abc = barsLine.map(bar => { 
        let abcBar = bar.toAbc()

        if (bar.chords) {
          for (const chord of bar.chords) {
            abcBar = abcBar.replace(`"${chord.name}"`, "")
          }
        }

        return abcBar
      }).join("|")
      
      annotedLine.push("[V:1]" + abc + `${abc.endsWith(":|") ? '' : '|' }`)
      annotedLine.push("[V:2] " + barsLine.map(bar => bar.toAbcChords()).join("|") + `${abc.endsWith(":|") ? ':|' : '|' }`)

      return annotedLine.join("\n")
    }).join("\n")

    return toAbcTheme
  }

  toAbcChords() {
    const abcChords = []

    for (const chordData of this.chords) {
      const abcDegrees = []
      const abcScales = []
      const abcLicks = []
      const tone = chordData.tone

      if (chordData.degrees) {
        for (const degree of chordData.degrees) {
          const chord = new Chord(degree)
          const abcChord = chord.toAbc()

          abcDegrees.push(abcChord)
        }
      }

      if (chordData.scales) {
        let scaleIndex = 1

        for (const scaleData of chordData.scales) {
          const [baseNote, scaleName] = scaleData.split(" ")
          const scale = new Scale(baseNote, scaleName)
          const nbScaleNote =  scale.notes.length
          let abcScale = scale.toAbc()

          abcScales.push(abcScale)
        }
      }

      if (chordData.licks) {
        for (const lick of chordData.licks) {
          abcLicks.push(lick)
        }
      }
      
      if (abcScales.length > 0) {
        abcChords.push(`R: ${tone}\n` +
        `K: ${tone}\n` +
        abcScales.join("|"))
      }
      
      if (abcDegrees.length > 0) {
        abcChords.push(`R: ${tone}\n` +
        `K: ${tone}\n` +
        abcDegrees.join("|"))
      }

      if (abcLicks.length > 0) {
        abcChords.push(`R: ${tone}\n` +
        `K: ${tone}\n` +
        abcLicks.join("|"))
      }
    }

    return abcChords
  }

  toAbc() {
    return [ ].concat([this.toAbcTheme()], this.toAbcChords())
  }
}

Vue.prototype.$initTune = function(tune) {
  return new Tune(tune)
}