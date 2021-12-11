import Note from "./Note"

export default class Scale {
  constructor(note) {
    this.note = new Note(note)
  }

  major() {
    return [ 'tonic', 'second', 'thirdMajor', 'fourth', 'fifth', "sixthMajor", "seventhMajor" ].map(interval => this.note.addInterval(interval))
  }

  pentatonicMajor() {
    return [ 'tonic', 'second', 'thirdMajor', 'fifth', "sixthMajor" ].map(interval => this.note.addInterval(interval))
  }

  minor() {
    return [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  pentatonicMinor() {
    return [ 'tonic', 'thirdMinor', 'fourth', 'fifth', "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  pentatonicBlues() {
    return [ 'tonic', 'thirdMinor', 'fourth', 'fifthDiminished', 'fifth', "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  melodicMinor() {
    return [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  harmonicMinor() {
    return [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMajor" ].map(interval => this.note.addInterval(interval))
  }

  bartok() {
    return [ 'tonic', 'second', 'thirdMajor', 'fourthAugmented', 'fifth', "sixthMajor", "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  tzigan() {
    return [ 'tonic', 'second', 'thirdMinor', 'fourthAugmented', 'fifth', "sixthMinor", "seventhMajor" ].map(interval => this.note.addInterval(interval))
  }

  dorian() {
    return [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  phrygian() {
    return [ 'tonic', 'secondDiminished', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  lydian() {
    return [ 'tonic', 'second', 'thirdMajor', 'fifthDiminished', 'fifth', "sixthMajor", "seventhMajor" ].map(interval => this.note.addInterval(interval))
  }

  myxolydian() {
    return [ 'tonic', 'second', 'thirdMajor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  aeolian() {
    return [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }

  locrian() {
    return [ 'tonic', 'secondDiminished', 'thirdMinor', 'fourth', 'fifthDiminished', "sixthMinor", "seventhMinor" ].map(interval => this.note.addInterval(interval))
  }
}