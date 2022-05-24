// Write your solution here!
// create initial array 'cats'
const cats = ["Milo", "Otis", "Garfield"];

// destructively adds to end of array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// destructively adds to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// destructively removes the last item of the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// destructively removes the first cat of the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// NONdestructively adds to the end of the array
function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}