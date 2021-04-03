alert("Результат 1го задания в консоли");
console.log(10 + 101 + "130");
console.log(110 + 103 + +"1");
console.log(610 / -"");
console.log(1 / +"2,5");

/* 2ое задание */
let a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b);

/* 3е задание */
let x = prompt('Введите x', 10);
x = Number.parseInt(x);
let y = prompt('Введите y', 1);
y = Number.parseInt(y);
if (x > 0 && y > 0) {
    alert(x+y);
} else {
    if (x < 0 && y < 0) {
        alert(x-y);
    } else {
        if (x > 0 && y < 0){
            alert(x*y);
        } else {
            if (x < 0 && y > 0){
                alert(x*y);
            }
        }
    }
}

/* 4ое задание */
function sloj (x,y) {
    return x+y;
}
function vichet (x,y) {
    return x-y;
}
function proiz (x,y) {
    return x*y;
}
function del (x,y) {
    return x/y;
}

/* 5ое задание */
function result (x,y,operation) {
    if (operation == "сложение") {
        alert("Результат функции сложения:" + sloj(x,y));
    } else {
        if (operation == "вычитание") {
            alert("Результат функции вычитания:" + vichet(x,y));
        } else {
            if (operation == "умножение") {
                alert("Результат функции умножения:" + proiz(x,y));
            } else {
                if (operation == "деление") {
                    alert("Результат функции деления:" + del(x,y));
                }
            }
        }
    }
}

result(x,y,"сложение");
result(x,y,"вычитание");
result(x,y,"умножение");
result(x,y,"деление");

/* 6ое задание */
let i = prompt('Введите кол-во уровней пирамиды', 10);
let j = 1;
let k = 0;
let kk = 0;
let str = "";
while(k < i){
    while(kk < j) {
        str+="x";
        kk++;
    }
    k++;
    j++;
    kk = 0;
    console.log(str+"\n");
    str = "";
}