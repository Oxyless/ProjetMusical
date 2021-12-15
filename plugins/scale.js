import Note from "./Note"
import { SCALES } from './constants/scales'

export default class Scale {
  constructor(baseNote, scaleName) {
    this.note = new Note(baseNote)
    this.scaleName = scaleName
    this.baseNote = baseNote
    this.notes = SCALES[this.scaleName].intervals.map(interval => this.note.addInterval(interval))
  }


  toAbc() {
    const abc = `"${this.baseNote} ${this.scaleName}"${this.notes.map(note => `${note.toAbc()}`).join("")}`
    return abc
  }
}