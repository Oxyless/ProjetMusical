import Vue from 'vue'
import Bar from './bar'
import Scale from './scale'


import { CHORDS } from './constants/chords'

class Tune {
  constructor({
    title,
    subtitle,
    measure,
    tone,
    bars,
    scales
  }
  ) {
    this.title = title
    this.subtitle = subtitle
    this.measure = measure
    this.tone = tone
    this.scales = scales
    this.bars = bars.map(barsLine =>
      barsLine.map(bar => 
        new Bar(bar)
      )
    )

    const scale = new Scale("C")
    console.log(CHORDS)
  }

  toAbc() {
    let abcTune = "X: 1\n" +
    `T: ${this.title}\n` +
    `M: ${this.measure}\n` +
    `L: 1/8\n` +
    `R: ${this.subtitle}\n` +
    `K: ${this.tone} \n` +
    this.bars.map(barsLine => {
      let annotedLine = []

      annotedLine.push("[V:1] " + barsLine.map(bar => bar.toAbc()).join("|"))

      return annotedLine.join("|\n")
    }).join("|\n") + "\n"

    return abcTune
  }

  toAbcScales() {
    if (this.scales) {
      for (const [ note, scaleName ] of Object.entries(this.scales)) {
        let scale = new Scale(note)
        const scaleNotes = scale[scaleName]().map(note => `${note.toAbc()}2`)
        abcTune += `"${note} ${scaleName}"${scaleNotes.join("")}\n`
      }
    }
  }
}

Vue.prototype.$initTune = function(tune) {
  return new Tune(tune)
}