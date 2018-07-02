const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

if (a == 0) {
   alert('Значення "А" не може =0');
}
else {
    let result = mSquare(a, b, c);
    alert(result);
    
}

function mSquare(a, b, c) {
const dis = ((Math.pow(b , 2))-4*a*c);
    let result;

    if (dis < 0) {
        result = 'Рівняння коренів немає';
    }
    else if (dis == 0) {
        result = 'x1,2 = ' (-b / (2 * a));
    }
    else if (dis > 0) {
        result = 'x1 = ' (-b - Math.sqrt(dis)) / (2 * a);
        result += ';  x2 = ' (-b + Math.sqrt(dis)) / (2 * a);
    }
    return result;
}

















