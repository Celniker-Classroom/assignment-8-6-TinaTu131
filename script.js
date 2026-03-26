// ----- Functions to implement -----

// 1) myFunc(): persistent counter
let count = 0;
function myFunc(){
  count++;
  return count;
}

// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max){
  max= parseInt(max)
  if (isNaN(max) || max < 1) return 0;
  return Math.floor(Math.random() * max) + 1;
}

// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
  return parseFloat(x) + parseFloat(y);
}

// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2) {
   x1 = parseFloat(x1); 
   y1 = parseFloat(y1);
   x2 = parseFloat(x2);
   y2 = parseFloat(y2);
   return Math.sqrt((x2-x1)**2+(y2-y1)**2);
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c){
  a=parseFloat(a); b=parseFloat(b); c=parseFloat(c);
  const disc = b*b - 4*a*c;

  if (disc>0){
    return [(-b + Math.sqrt(disc))/(2*a), (-b - Math.sqrt(disc))/(2*a)];
  } else if (disc === 0) {  
    return [-b/(2*a)];
  } else{
    const real = -b/(2*a);  
    const imag = Math.sqrt(-disc)/(2*a); 
     return [real + "+" + imag + "i", real + "-" + imag + "i"];
  }
}

// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
