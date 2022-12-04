let dolphinsScore = [96,108,89];

let koalasScore = [88,91,110];

let dolAvgScore = Math.round(dolphinsScore.reduce((a, b) => a + b, 0) / dolphinsScore.length);
console.log(dolAvgScore);
let koalAvgScore =Math.round(koalasScore.reduce((a, b) => a + b, 0) /koalasScore.length); 

console.log(koalAvgScore);

if (dolAvgScore > koalAvgScore && dolAvgScore >=100){console.log(`dolphins win with score ${dolAvgScore}`)}else if(koalAvgScore>dolAvgScore&&koalAvgScore>=100){`koalas win with score ${koalAvgScore}`}else{console.log('NO winner!!!!!!!!!!!!!!!!hahahaahhahahah')}




