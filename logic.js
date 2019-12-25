// var age = 16;
// var result = null;

// if (age >= 20) {
//   result = '青年';
// } else {
//   result = '未成年'
// }
// document.write(result);

// var age = 65;
// var isMember = null;
// if (age >= 60 && isMember ) {
//   result = 'シニア会員割引対象です。';
// } else {
//   result = 'シニア会員割引の対象外です。'
// }
// document.write(result);

var age = 16;
var isMember = true;
var result = null;

if (age <= 15) {
  result = '800円';
} else if (isMember) {
  result = '1000円';
} else {
  result = '1800円';
}
document.write(result);
