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
