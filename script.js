//First 
console.log('First');
console.log('Part 1');
for(i = 1; i <= 50; i++) {
    console.log(i);
}
console.log('Part 2');
for(i = 35; i >= 8; i--) {
    console.log(i);
}

// Second
console.log('Second');
let k = 89;
while (k >= 11) {
    console.log(k);
    document.write(k, '<br/>');
    k = k - 1;
}

//Third
console.log('Third');
let sum = 0;
for(m = 0; m <= 100; m++) {
    sum = sum + m;
}
console.log('Сумма чисел равна ', sum);

//Forth
console.log('Forth');
let sumF = 0;
for(let h = 1; h <= 5; h++) {
    let sumF = 0;
    for(let j = 1; j <= h; j++) {
        sumF = sumF + j; 
    }
    console.log('Сумма ' + h + ' = ' + sumF);
}

//Fifth
console.log('Fifth');
console.log('While');
let a = 8;
while (a <= 56) {
    if(a % 2 == 0){
    console.log(a);
    }
    a++;
}
console.log('For');
for(b = 8; b <= 56; b++) {
    if(b % 2 == 0){
        console.log(b);
    }    
}

//Sixth
console.log('Sixth');
let pr = 0;
for(c = 2; c <= 10; c++) {
    for(d = 1; d <= 10; d++){
        pr = c * d;
        console.log(c + '*' + d + '=' + pr);
    }
}