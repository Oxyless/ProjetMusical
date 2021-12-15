import Chord from './chord'
import { CHORDS } from "./constants/chords"

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
      const nbChords = this.chords .length   
      let abc = ""
      let z = (nbChords == 1 ? 'z6' : 'z2')
       
      for (const chord of this.chords ) {
        abc += `"${chord.name}"[${chord.toAbc()}]2 ${z}`
      }
 
      return abc
    } else {
      return "z8"
    }
  }

  extractChords() {
    const chordNames = this.bar.match(/\"[A-Z]+[a-zA-Z0-9\/\-\#\/]+\"/g)
    const chords = []

    if (chordNames) {
      for (const chordName of chordNames) {
        let name = chordName.replaceAll('"', '')

        if (CHORDS[name]) {
          chords.push(new Chord(name))
        } else {
          console.log("not found", name)
        }
      }

      return chords
    } else {
      return null
    }
  }
}