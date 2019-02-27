// # ARITHMETIC OPERATORS
function getArea(length, width) {
    let area = length * width;    
    return area;
}

function getPerimeter(length, width) {
    let perimeter = (length + width) * 2 ;
    return perimeter;
}

// # FUNCTIONS
function factorial(n) {
    return (n != 1) ? n * factorial(n-1) : 1;
}

// # LET AND CONST
function main() {
    const PI = Math.PI;
    let r = readLine();

    console.log(PI*r*r);
    console.log(2*PI*r);
}