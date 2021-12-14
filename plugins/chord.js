import { scoreByNote } from "./constants/notes"
import Note from "./Note"

export default class Chord {
  constructor(chord) {
    this.chord = chord
  }

  toABc(duration = 8) {
    const abc = `[${this.arpeggio.map(note => note.toAbc()).join("")}]${duration}`
    return abc
  }
}