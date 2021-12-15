import { CHORDS } from "./constants/chords"

export default class Chord {
  constructor(name) {
    this.name = name
    this.chord = CHORDS[name]
    this.notes = this.chord.notes
  }

  toAbc() {
    const abc = `${this.notes.map(note => note.toAbc()).join("")}`

    return abc
  }
}