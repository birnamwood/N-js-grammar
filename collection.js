// var classes = ['A組', 'B組', 'C組', 'D組'];

// for (var grade = 1; grade <= 6; grade++) {
//   for (var i = 0; i < classes.length; i++) {
//     document.write('<p>' + grade + '年' + classes[i] + '<p>');
//   }
// }


var collection = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
// var collection2 = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for ( var i = 0; i < collection.length; i++) {
  for (var ii = 0; ii< collection.length; ii++) {
    document.write('<p>' + collection[i] + collection[ii] + '</p>');
  }
}
