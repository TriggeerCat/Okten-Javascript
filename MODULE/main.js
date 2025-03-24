const input = document.getElementById('nvInput');
const textArea = document.getElementById('nvTextArea')
const buttonAdd = document.getElementById('buttonAdd');
const buttonSortName = document.getElementById('buttonSortName');
const buttonSortValue = document.getElementById('buttonSortValue');
const buttonDelete = document.getElementById('buttonDelete');
const inputDiv = document.getElementById('inputDiv');

let items = []

function rewriteTextArea() {
    textArea.value = '';
    for (const item of items) {
        textArea.value += (item.name + '=' + item.value + '\n');
    }
}

buttonAdd.onclick = () => {
    const itemTemp = input.value.split(' ').join('').split('=');
    if (itemTemp.length === 2) {
        items[items.length] = {name: itemTemp[0], value: itemTemp[1]};
        rewriteTextArea();
    }
}

buttonSortName.onclick = () => {
    if (items.length > 1) {
        items.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
    }
    rewriteTextArea();
}

buttonSortValue.onclick = () => {
    if (items.length > 1) {
        items.sort((a, b) => {
            if (a.value < b.value) return -1;
            if (a.value > b.value) return 1;
            return 0;
        });
    }
    rewriteTextArea();
}

buttonDelete.onclick = () => {
    textArea.value = '';
    items = [];
}