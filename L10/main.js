let tasks = document.getElementsByClassName('task');

// Task 1
{
    let text = document.createElement('div');
    let button = document.createElement('button');
    text.id = 'text';
    text.classList.add('wrap');
    tasks[0].append(text, button);

    button.onclick = () => text.remove()
}

// Task 2
{
    let form = document.createElement('form');
    let input = document.createElement('input');
    let button = document.createElement('button');

    tasks[1].append(form);
    form.append(input, button);

    form.onsubmit = function (ev) {
        ev.preventDefault();
        if (input.value < 18) input.value = 'No';
        else input.value = 'Yes';
    }
}

// Task 3
{
    let form = document.createElement('form');
    let inputName = document.createElement('input');
    let inputSurname = document.createElement('input');
    let inputAge = document.createElement('input');
    let button = document.createElement('button');

    let div = document.createElement('div')
    div.classList.add('wrap')

    tasks[2].append(form);
    form.append(inputName, inputSurname, inputAge, button, div);

    form.onsubmit = function (ev) {
        ev.preventDefault();
        div.innerHTML = `
        <p>Name: ${inputName.value}</p>
        <p>Surname: ${inputSurname.value}</p>
        <p>Age: ${inputAge.value}</p>
        `
    }
}

// Task 4
{
    let num = parseInt(localStorage.getItem('number'));
    localStorage.setItem('number', (num + 1).toString());
    // localStorage.setItem('number', '1')
    tasks[3].append(localStorage.getItem('number'));
}

// Task 5
{
    for (const arrElem of JSON.parse(localStorage.getItem('sessionsList'))) {
        let p = document.createElement('p')
        p.innerText = arrElem;
        tasks[4].append(p);
    }
}

// Task 6
{
    let inputKilograms = document.createElement('input');
    let inputPounds = document.createElement('input');

    tasks[5].append(inputKilograms, inputPounds);

    inputKilograms.oninput = () => inputPounds.value = inputKilograms.value * 2.205;
    inputPounds.oninput = () => inputKilograms.value = inputPounds.value / 2.205;
}

// Task 7
{
    function addToLocalStorage (arrayName, objToAdd) {
        let array = JSON.parse(localStorage.getItem(arrayName));
        array[array.length] = objToAdd;
        localStorage.setItem(arrayName, JSON.stringify(array));
    }
}

// Task 8
{
    let inputRows = document.createElement('input');
    let inputColumns = document.createElement('input');
    let inputInput = document.createElement('input');
    let button = document.createElement('button');

    tasks[7].append(inputRows, inputColumns, inputInput, button);

    button.onclick = function () {
        for (let i = 0; i < inputColumns.value; i++) {
            let div = document.createElement('div');
            div.classList.add('flex');
            tasks[7].append(div);
            for (let j = 0; j < inputRows.value; j++) {
                let wrap = document.createElement('div');
                wrap.classList.add('wrap');
                wrap.innerText = inputInput.value;
                div.append(wrap);
            }
        }
    }
}

// localStorage.clear();