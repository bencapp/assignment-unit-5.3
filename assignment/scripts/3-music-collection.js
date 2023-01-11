console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let newRecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(newRecord);
  return newRecord;
}

console.log(
  addToCollection("Sgt. Pepper's Lonely Hearts Club Band", "The Beatles", 1967)
);
console.log(
  addToCollection("The Times They Are a-Changin'", "Bob Dylan", 1964)
);
console.log(addToCollection("Crushing", "Julia Jacklin", 2019));
console.log(addToCollection("Deja Vu", "Crosby, Stills, Nash & Young", 1970));
console.log(addToCollection("Townes Van Zandt", "Townes Van Zandt", 1969));
console.log(addToCollection("Bruised Orange", "John Prine", 1978));

console.log(collection);

function showCollection(array) {
  console.log(`There are ${array.length} records in the collection:`);
  for (let record of array) {
    console.log(
      `${record.title} by ${record.artist}, published in ${record.yearPublished}`
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
addToCollection("The Tree of Forgiveness", "John Prine", 2018);
console.log(findByArtist("John Prine"));

//Stretch Goals Below

console.log("<----Stretch Goals Below---->");

function search(searchRecord) {
  let returnArray = [];
  for (let record of collection) {
    if (
      record.artist == searchRecord.artist &&
      record.yearPublished == searchRecord.year
    ) {
      returnArray.push(record);
    }
  }
  return collection;
}
