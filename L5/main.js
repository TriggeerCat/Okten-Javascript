const PI = 3.14;

// Task 1
let areaRectangle = (a, b) => a * b;

// Task 2
let areaCircle = (r) => 2 * PI * r;

// Task 3
let areaCylinder = (h, r) => 2 * PI * h * r;

// Task 4
let arrViewer = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

// Task 5
let paragraph = (a) => {
    document.write(`
        <div class="task">
            <p>${a}</p>
        </div>
    `)
}

// Task 6
let listOne = (a) => {
    document.write(`
        <div class="task">
            <ul>
                <li>${a}</li>
                <li>${a}</li>
                <li>${a}</li>
            </ul>
        </div>
    `)
}

// Task 7
let listTwo = (a, b) => {
    document.write(`<div class="task"><ul>`)
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul></div>`)
}

// Task 8
let listArr = (arr) => {
    document.write(`<div class="task"><ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul></div>`)
}

// Task 9
let listArrObj = (arr) => {
    document.write(`<div class="task">`)
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            document.write(`
            <div>
                ${arrElementKey}: ${arrElement[arrElementKey]}  
            </div>
            `)
        }
    }
    document.write(`</div>`)
}

// Task 10
let minElem = (arr) => {
    let min = arr[0];
    for (const arrElement of arr) {
        if (min > arrElement) min = arrElement;
    }
    return min;
}

// Task 11
let sumElem = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

// Task 12
let swapElem = (arr, pos1, pos2) => {
    let a = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = a;
    return arr;
}

// Task 13
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) return sumUAH / currency.value;
    }
}