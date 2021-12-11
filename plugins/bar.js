import Chord from './chord'

export default class Bar {
  constructor(bar) {
    this.bar = bar
  }

  toAbc() {
    return this.bar
  }

  toAbcChords() {
    const chords = this.extractChords()

    if (chords) {
      const abc = chords.map(chord => chord.toABc(8 / chords.length)).join(" ")
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