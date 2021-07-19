function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];
  // namesArray.sort()
  // console.log(namesArray.map((item) => item.toUpperCase()))
  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}
const result = namesArray(function (name){
  return name.map(function(string){
    return string.touppercase()
  })
})

console.log(result)
