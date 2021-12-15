import Note from "../Note"

const chords = {
  "": { intervals: [ "root", "thirdMajor", "fifth" ] },
  "min": { intervals: [ "root", "thirdMinor", "fifth" ] },
  "maj7": { intervals: [ "root", "thirdMajor", "fifth", "seventhMajor" ] },
  "min7": { intervals: [ "root", "thirdMinor", "fifth", "seventhMinor" ] },
  "7": { intervals: [ "root", "thirdMajor", "fifth", "seventhMinor" ] },
  "min7b5": { intervals: [ "root", "thirdMinor", "fifthDiminished", "seventhMinor" ] },
  "min7maj7": { intervals: [ "root", "thirdMinor", "fifth", "seventhMajor" ] },
  "6": { intervals: [ "root", "thirdMajor", "fifth", "sixthMajor" ] },
  "min6": { intervals: [ "root", "thirdMinor", "fifth", "sixthMajor" ] },
  "6/9": { intervals: [ "root", "thirdMajor", "fifth", "sixthMajor", "ninth" ] },
  "min6/9": { intervals: [ "root", "thirdMinor", "fifth", "sixthMinor", "ninth" ] },
  "5": { intervals: [ "root", "fifth" ] },
  "9": { intervals: [ "root", "thirdMajor", "fifth", "seventhMinor", "ninth"  ] },
  "min9": { intervals: [ "root", "thirdMinor", "fifth", "seventhMinor", "ninth"  ] },
  "maj9": { intervals: [ "root", "thirdMajor", "fifth", "seventhMajor", "ninth"  ] },
  "11":  { intervals: [ "root", "thirdMajor", "fifth", "seventhMinor", "ninth", "eleventh" ] },
  "min11":  { intervals: [ "root", "thirdMinor", "fifth", "seventhMinor", "ninth", "eleventhDiminished" ] },
  "13":  { intervals: [ "root", "thirdMajor", "fifth", "seventhMinor", "ninth", "eleventh", 'thirteenth' ] },
  "min13":  { intervals: [ "root", "thirdMinor", "fifth", "seventhMinor", "ninth", "eleventh", 'thirteenth' ] },
  "maj13":  { intervals: [ "root", "thirdMajor", "fifth", "seventhMajor", "ninth", "eleventh", 'thirteenth' ] },
  "add9":  { intervals: [ "root", "thirdMinor", "fifth", "ninth" ] },
  "add2":  { intervals: [ "root", "thirdMinor", "fifth", "second" ] },
  "b7b5":  { intervals: [ "root", "thirdMajor", "fifthDiminished", "seventhMajor" ] },
  "min7b5":  { intervals: [ "root", "thirdMinor", "fifthDiminished", "seventhMinor" ] },
  "7sus": { intervals: [ "root", "fourth", "fifth", "seventhMinor" ] },
  "7sus4": { intervals: [ "root", "fourth", "fifth", "seventhMinor" ] },
  "7sus2": { intervals: [ "root", "second", "fifth", "seventhMinor" ] },
  "9sus": { intervals: [ "root", "fourth", "fifth", "seventhMinor", "ninth"  ] },
  "9sus4": { intervals: [ "root", "fourth", "fifth", "seventhMinor", "ninth"  ] },
  "9sus2": { intervals: [ "root", "second", "fifth", "seventhMinor", "ninth"  ] },
  "7#9": { intervals: [ "root", "thirdMajor", "fifth", "seventhMinor", "tenthMinor"  ] },
  "7#5": { intervals: [ "root", "thirdMajor", "fifthAugmented", "seventhMinor" ] },
  "dim7": { intervals: [ "root", "thirdMinor", "fifthDiminished", "sixthMajor"  ] },
  "dim": { intervals: [ "root", "thirdMinor", "fifthDiminished" ] }
}

// // transformer min et - en m
export const CHORDS = function() {
  const result = {}

  for (const baseNote of ["C", "D", "E", "F", "G", "A", "B", "C#", "D#", "E#", "F#", "G#", "A#", "B#", "Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"]) {
    const note = new Note(baseNote)
    for (const [chordName, chord] of Object.entries(chords)) {
      const notes = {
        notes: chord.intervals.map(interval => note.addInterval(interval))
      }
      
      result[`${baseNote}${chordName}`] = notes
      result[`${baseNote}${chordName}`.replace("maj", "M")] = notes
      result[`${baseNote}${chordName}`.replace("maj", "+")] = notes
      result[`${baseNote}${chordName}`.replace("maj", "▲")] = notes
      result[`${baseNote}${chordName}`.replace("min7b5", "ø")] = notes
      result[`${baseNote}${chordName}`.replace("min", "m")] = notes
      result[`${baseNote}${chordName}`.replace("min", "-")] = notes
      result[`${baseNote}${chordName}`.replace("dim", "o")] = notes
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

// La mineur harmonique
// 5eme 7eme -> on ajoute le sol#
// la mineur naturel

// mineur 7 b 5 demi diminué
// le rond diminué -> 7eme degré gamme mineur

// mineur 6/9 -> gamme mineur melodique ascendante

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

