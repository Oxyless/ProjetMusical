export const SCALES = {
  major: { intervals: [ 'tonic', 'second', 'thirdMajor', 'fourth', 'fifth', "sixthMajor", "seventhMajor" ] },
 
  minor: { intervals: [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ] },
  melodicMinor: { intervals: [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ] },
  harmonicMinor: { intervals: [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMajor" ] },

  pentatonicMajor: { intervals: [ 'tonic', 'second', 'thirdMajor', 'fifth', "sixthMajor" ] },
  pentatonicMinor: { intervals: [ 'tonic', 'thirdMinor', 'fourth', 'fifth', "seventhMinor" ] },
  pentatonicBlues: { intervals: [ 'tonic', 'thirdMinor', 'fourth', 'fifthDiminished', 'fifth', "seventhMinor" ] },

  bartok: { intervals: [ 'tonic', 'second', 'thirdMajor', 'fourthAugmented', 'fifth', "sixthMajor", "seventhMinor" ] },
  tzigan: { intervals:  [ 'tonic', 'second', 'thirdMinor', 'fourthAugmented', 'fifth', "sixthMinor", "seventhMajor" ] } ,
  altered: { intervals: [ 'tonic', 'secondDiminished', 'secondAugmented', 'thirdMajor', 'fifthDiminished', 'fifthAugmented', "seventhMinor" ] },
  
  dorian: { intervals: [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ] },
  phrygian: { intervals: [ 'tonic', 'secondDiminished', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ] },
  lydian: { intervals: [ 'tonic', 'second', 'thirdMajor', 'fifthDiminished', 'fifth', "sixthMajor", "seventhMajor" ] },
  myxolydian: { intervals: [ 'tonic', 'second', 'thirdMajor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ] },
  aeolian: { intervals:  [ 'tonic', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ] },
  locrian: { intervals: [ 'tonic', 'secondDiminished', 'thirdMinor', 'fourth', 'fifthDiminished', "sixthMinor", "seventhMinor" ] },
}
