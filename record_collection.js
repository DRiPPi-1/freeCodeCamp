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
    
if (prop != tracks && value != "") {
     prop = value;
} else if (prop == tracks && tracks == []) {
    tracks = [value]; 
} else if (prop == tracks && value != "") {
    tracks[-1];
} else {
    pop.prop; //delete given prop property from album
}
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');