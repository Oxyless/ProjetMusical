import Note from "../Note"

const chords = {
  "": { intervals: [ "tonic", "thirdMajor", "fifth" ] },
  "min": { intervals: [ "tonic", "thirdMinor", "fifth" ] },
  "maj7": { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor" ] },
  "min7": { intervals: [ "tonic", "thirdMinor", "fifth", "seventhMinor" ] },
  "7": { intervals: [ "tonic", "thirdMinor", "fifthDiminished", "seventhMinor" ] },
  "min7b5": { intervals: [ "tonic", "thirdMinor", "fifthDiminished", "seventhMinor" ] },
  "min7maj7": { intervals: [ "tonic", "thirdMinor", "fifth", "seventhMajor" ] },
  "6": { intervals: [ "tonic", "thirdMajor", "fifth", "sixthMajor" ] },
  "min6": { intervals: [ "tonic", "thirdMinor", "fifth", "sixthMajor" ] },
  "6/9": { intervals: [ "tonic", "thirdMajor", "fifth", "sixthMajor", "ninth" ] },
  "5": { intervals: [ "tonic", "fifth" ] },
  "9": { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMinor", "ninth"  ] },
  "min9": { intervals: [ "tonic", "thirdMinor", "fifth", "seventhMinor", "ninth"  ] },
  "maj9": { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor", "ninth"  ] },
  "11":  { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMinor", "ninth", "eleventh" ] },
  "min11":  { intervals: [ "tonic", "thirdMinor", "fifth", "seventhMinor", "ninth", "eleventh" ] },
  "13":  { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMinor", "ninth", "eleventh", 'thirteenth' ] },
  "min13":  { intervals: [ "tonic", "thirdMinor", "fifth", "seventhMinor", "ninth", "eleventh", 'thirteenth' ] },
  "maj13":  { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor", "ninth", "eleventh", 'thirteenth' ] },
  "add9":  { intervals: [ "tonic", "thirdMinor", "fifth", "ninth" ] },
  "add2":  { intervals: [ "tonic", "thirdMinor", "fifth", "second" ] },
  "min7b5":  { intervals: [ "tonic", "thirdMinor", "fifthDiminished", "seventhMinor" ] },
  "7sus": { intervals: [ "tonic", "fourth", "fifthDiminished", "seventhMinor" ] },
  "7sus4": { intervals: [ "tonic", "fourth", "fifthDiminished", "seventhMinor" ] },
  "7sus2": { intervals: [ "tonic", "second", "fifthDiminished", "seventhMinor" ] },
  "9sus": { intervals: [ "tonic", "fourth", "fifth", "seventhMinor", "ninth"  ] },
  "9sus4": { intervals: [ "tonic", "fourth", "fifth", "seventhMinor", "ninth"  ] },
  "9sus2": { intervals: [ "tonic", "second", "fifth", "seventhMinor", "ninth"  ] }
}

// // transformer min et - en m
export const CHORDS = function() {
  const result = {}

  for (const baseNote of ['A', 'B', 'C', 'D', 'E', 'F', 'G']) {
    const note = new Note(baseNote)
    for (const [chordName, chord] of Object.entries(chords)) {
      const notes = {
        notes: chord.intervals.map(interval => note.addInterval(interval))
      }
      
      result[`${baseNote}${chordName}`] = notes
      result[`${baseNote}${chordName}`.replace("maj", "M")] = notes
      result[`${baseNote}${chordName}`.replace("maj", "+")] = notes
      result[`${baseNote}${chordName}`.replace("min", "m")] = notes
      result[`${baseNote}${chordName}`.replace("min", "-")] = notes
    }
  }

  return result
}()

// const majorChords = function(baseNote) {
//   return {
//     '1': { names: [ 'maj7' ], intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor" ] },
//     '2': { names: [ '-7' ], intervals: [ "tonic", "thirdMinor", "fifth", "seventhMinor" ] },
//     '3': { names: [ 'maj7' ], intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor" ] },
//     '4': { names: [ 'maj7' ], intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor" ] },
//     '5': { names: [ '7' ], intervals: [ "tonic", "thirdMajor", "fifth", "seventhMinor" ] },
//     '6': { names: [ '-7' ], intervals: [ "tonic", "thirdMinor", "fifth", "seventhMinor" ] },
//     '7': { names: [ '-7b5' ], intervals: [ "tonic", "thirdMinor", "fifthDiminished", "seventhMinor" ] }
//   }
// }

// const minorChords = function(baseNote) {
//   return {
//     '1': { intervals: [ "tonic", "thirdMinor", "fifth", "seventhMinor" ] },
//     '2': { intervals: [ "tonic", "thirdMinor", "fifthDiminished", "seventhMinor" ] },
//     '3': { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor" ] },
//     '4': { intervals: [ "tonic", "thirdMinor", "fifth", "seventhMinor" ] },
//     '5': { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor" ] },
//     '6': { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMajor" ] },
//     '7': { intervals: [ "tonic", "thirdMajor", "fifth", "seventhMinor" ] }
//   }
// }

