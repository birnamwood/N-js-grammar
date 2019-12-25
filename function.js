// var myBirthTime = new Date(1990,7, 29, 12, 00);

// function updateParagraph () {
//   var now = new Date();
//   var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
//   document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過';
// }
// setInterval(updateParagraph, 100);

function getCircleArea(r) {
  var pai = 3.14;
  var area = r * r * pai;
  return area;
}
document.write('面積は' + getCircleArea(5) + 'です');