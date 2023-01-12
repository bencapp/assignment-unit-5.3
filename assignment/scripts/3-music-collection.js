console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
  let newRecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  };
  collection.push(newRecord);
  return newRecord;
}

console.log(
  addToCollection(
    "Sgt. Pepper's Lonely Hearts Club Band",
    "The Beatles",
    1967,
    [
      "Sgt. Pepper's Lonely Hearts Club Band: 2:02",
      "With A Little Help From My Friends: 2:44",
      "Lucy In The Sky With Diamonds: 3:28",
    ]
  )
);
console.log(
  addToCollection("The Times They Are a-Changin'", "Bob Dylan", 1964, [
    "The Times They Are a-Changin': 3:12",
    "Ballad of Hollis Brown: 5:02",
    "With God on Our Side: 7:04",
  ])
);
console.log(
  addToCollection("Crushing", "Julia Jacklin", 2019, [
    "Body: 5:07",
    "Head Alone: 2:58",
    "Pressure to Party: 3:02",
  ])
);
console.log(
  addToCollection("Deja Vu", "Crosby, Stills, Nash & Young", 1970, [
    "Carry On: 4:25",
    "Teach Your Children: 2:53",
    "Almost Cut My Hair: 4:29",
  ])
);
console.log(
  addToCollection("Townes Van Zandt", "Townes Van Zandt", 1969, [
    "For the Sake of the Song: 5:22",
    "Columbine: 2:34",
    "Waiting Around to Die: 2:45",
  ])
);
console.log(
  addToCollection("Bruised Orange", "John Prine", 1978, [
    "Fish and Whistle: 3:14",
    "There She Goes: 3:24",
    "If You Don't Want My Love: 3:05",
  ])
);

console.log(collection);

function showCollection(array) {
  console.log(`There are ${array.length} records in the collection:`);
  for (let record of array) {
    console.log(
      `${record.title} by ${record.artist}, published in ${record.yearPublished}\n1. ${record.tracks[0]}\n2. ${record.tracks[1]}\n3. ${record.tracks[2]}`
    );
  }
}

showCollection(collection);

function findByArtist(artist) {
  let array = [];
  for (let record of collection) {
    if (artist == record.artist) {
      array.push(record);
    }
  }
  return array;
}

console.log(findByArtist("Julia Jacklin"));
console.log(findByArtist("Bon Jovi"));
addToCollection("The Tree of Forgiveness", "John Prine", 2018, [
  "Knockin' on Your Screen Door: 2:19",
  "I Have Met My Love Today: 1:50",
  "Egg & Daughter Nite, Lincoln Nebraska, 1967 (Crazy Bone): 4:05",
]);
console.log(findByArtist("John Prine"));

//showing collection again to test most recent addition
showCollection(collection);

//Stretch Goals Below

console.log("<----Stretch Goals Below---->");

//NEED TO FIX SEARCH FUNCTION
function search(searchKey) {
  let returnArray = [];

  for (let property in searchKey) {
    // for each collection object, if there is no match, remove it from list
    for (let record of collection) {
      if (
        searchKey[property] == record[property] &&
        !returnArray.includes(record)
      ) {
        returnArray.push(record);
      }
    }
  }
  return returnArray;
}

console.log(search({ artist: "John Prine", yearPublished: 2018 }));

console.log(
  search({
    artist: "John Prine",
    yearPublished: 2018,
    tracks: [
      "Knockin' on Your Screen Door: 2:19",
      "I Have Met My Love Today: 1:50",
      "Egg & Daughter Nite, Lincoln Nebraska, 1967 (Crazy Bone): 4:05",
    ],
  })
);

console.log(search({ artist: "Julia Jacklin", yearPublished: 1969 }));
