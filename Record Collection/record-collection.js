// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const updatedRecords = Object.assign({}, records); // Create a copy of the records object

  if (value === '') {
    delete updatedRecords[id][prop];
  } else if (prop !== 'tracks' && value !== '') {
    updatedRecords[id][prop] = value;
  } else if (prop === 'tracks' && value !== '') {
    if (!updatedRecords[id].hasOwnProperty('tracks')) {
      updatedRecords[id].tracks = [];
    }
    updatedRecords[id].tracks.push(value);
  }

  return updatedRecords;
}
