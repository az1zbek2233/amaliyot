let son1 = Number(prompt("1chi soni kiriting"));
let son2 = Number(prompt("2chi soni kiriting"));
    
let amal = Number(prompt(`Amalni tanlang:
1-qo'shish
2-ayirish
3-ko'paytirish
4-bo'lish
amalni tanlang(1/2/3/4):`
));

if (amal === 1) {
    alert(`${son1} + ${son2} = ${son1 + son2}`);
}

if (amal === 2) {
    alert(`${son1} - ${son2} = ${son1 - son2}`);
}

if (amal === 3) {
    alert(`${son1} * ${son2} = ${son1 * son2}`);
}


if (amal === 4) {
    alert(`${son1} / ${son2} = ${son1 / son2}`);
}


