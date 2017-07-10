var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops'.toUpperCase();
var textCharsAfter = text.replace('Velociraptor' , dinosaur);
console.log(textCharsAfter.substr(0 , textCharsAfter.length/2));