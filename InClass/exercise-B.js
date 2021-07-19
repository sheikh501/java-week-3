let classMembers = ["sheikh", "juha", "jarif", "keti", "abu"];
let otherClassMember = ["skjuha", "skjarif", "aketi", "SKabu"];
let all = classMembers.concat(otherClassMember);
all.sort();
console.log(all)
function func(name, names) {
  if (names.includes(name)) {
    return name + "is at the class with " + names.join(", ");
  }
  else 
  { return name + "is not at the class with " + names.join(", ") }


}
console.log (func("sheikh",classMembers));