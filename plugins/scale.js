import Note from "./Note"
import { SCALES } from './constants/scales'

export default class Scale {
  constructor(note) {
    this.note = new Note(note)
  }

  getScaleNotes(scaleName) {
    return SCALES[scaleName].intervals.map(interval => this.note.addInterval(interval))
  }
}