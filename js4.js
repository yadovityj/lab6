function randomName(names)
{
  var random = Math.floor(Math.random() * names.length);
  var win = names[random];
  return win + " buying coffee for all";
}
console.log(randomName(["Gorn", "Kostiuk", "Beh", "Zayats"]));
