import Vue from 'vue'
import Bar from './bar'

class Tune {
  constructor({
    title,
    subtitle,
    measure,
    tone,
    bars
  }
  ) {
    this.title = title
    this.subtitle = subtitle
    this.measure = measure
    this.tone = tone
    this.bars = bars.map(barsLine =>
      barsLine.map(bar => 
        new Bar(bar)
      )
    )
  }

  toAbc() {
    const abcTune = "X: 1\n" +
    `T: ${this.title}\n` +
    `M: ${this.measure}\n` +
    `L: 1/8\n` +
    `R: ${this.subtitle}\n` +
    `K: ${this.tone} \n` +
    this.bars.map(barsLine => {
      let annotedLine = []

      annotedLine.push("[V:1] " + barsLine.map(bar => bar.toAbc()).join("|"))
      // annotedLine.push("[V:2] " + barsLine.map(bar => bar.toAbcChords()).join("|"))

      return annotedLine.join("|\n")
    }).join("|\n")

    return abcTune
  }
}

Vue.prototype.$initTune = function(tune) {
  return new Tune(tune)
}