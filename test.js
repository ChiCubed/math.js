import math from './src/index.js';

const namespace = (str, ns) => {
  ns = ns + '.';
  let s = String(str), m, re = /[a-zA-Z]\w*/g, a = 0;
  while ((m = re.exec(str)) !== null) {
    s = s.slice(0, m.index + a) + ns + s.slice(m.index + a);
    a += ns.length;
  }
  return s;
};

window.$ = q => document.querySelector(q);

Math.ln = Math.log;
Math.log = (a, b) => Math.ln(a) / Math.ln(b);

Math.cos = x => Math.sin(Math.PI / 2 + x);
Math.tan = x => Math.sin(x) / Math.cos(x);

Math.csc = x => 1 / Math.sin(x);
Math.sec = x => 1 / Math.cos(x);
Math.cot = x => 1 / Math.tan(x);

Math.e = Math.E;
Math.pi = Math.PI;

$('#input').addEventListener('input', () => {
  try {
    $('#output1').innerHTML = eval(namespace(input.value, 'math'));
  } catch (e) {
    $('#output1').innerHTML = 'error';
  }
  
  try {
    $('#output2').innerHTML = eval(namespace(input.value, 'Math'));
  } catch (e) {
    $('#output2').innerHTML = 'error';
  }
  
  try {
    const a = eval(namespace(input.value, 'math'));
    const b = eval(namespace(input.value, 'Math'));
    
    $('#output3').innerHTML = (1 - a / b).toFixed(16) + '%';
  } catch (e) {
    $('#output3').innerHTML = 'error';
  }
});
