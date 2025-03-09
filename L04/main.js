const PI = 3.14;

// Task 1
function areaRectangle(a, b) {
    return a * b;
}

// Task 2
function areaCircle(r) {
    return 2 * PI * r;
}

// Task 3
function areaCylinder(h, r) {
    return 2 * PI * h * r;
}

// Task 4
function arrViewer(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

// Task 5
function paragraph(a) {
    document.write(`
        <div class="task">
            <p>${a}</p>
        </div>
    `)
}

// Task 6
function listOne(a) {
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
function listTwo(a, b) {
    document.write(`<div class="task"><ul>`)
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul></div>`)
}

// Task 8
function listArr(arr) {
    document.write(`<div class="task"><ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul></div>`)
}

// Task 9
function listArrObj(arr) {
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
function minElem(arr) {
    let min = arr[0];
    for (const arrElement of arr) {
        if (min > arrElement) min = arrElement;
    }
    return min;
}

// Task 11
function sumElem(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

// Task 12
function swapElem(arr, pos1, pos2) {
    let a = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = a;
    return arr;
}

// Task 13
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) return sumUAH / currency.value;
    }
}