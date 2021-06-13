for (var adj of [
  'Raging',
  'Happy',
  'Hungry',
]) {
  for (var noun of [
    'Pharmacists',
    'Squids',
    'Twins',
  ]) {
    console.log('The ' + adj + ' ' + noun);
  }
}


var otherBackpack = {
  food : ['crackers', 'chocolate', 'raisins']
}

for (var element of otherBackpack.food) {
  console.log(element);
}