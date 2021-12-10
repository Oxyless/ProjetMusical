import Chord from './chord'

export default class Bar {
  constructor(bar) {
    this.bar = bar
    this.chords = this.extractChords()
  }

  toAbc() {
    return this.bar
  }

  toAbcChords() {
    if (this.chords) {
      const abc = this.chords.map(chord => chord.toABc(8 / this.chords.length)).join(" ")
      return abc
    } else {
      return "z8"
    }
  }

  extractChords() {
    const chords = this.bar.match(/\"[A-Z]+[a-zA-Z0-9\/\-\#]+\"/g)

    if (chords) {
      return chords.map(chord => new Chord(chord.replaceAll('"', '')))
    } else {
      return null
    }
  }
}