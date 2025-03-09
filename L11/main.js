let tasks = document.getElementsByClassName('task');

// Task 1

{
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(json => {
            let {carts} = json;
            for (const cart of carts) {
                let wrap = document.createElement('div')
                wrap.classList.add('wrap');
                tasks[0].append(wrap);
                for (const cartKey in cart) {
                    switch (cartKey) {
                        case 'products':
                            for (const product of cart[cartKey]) {
                                let innerWrap = document.createElement('div');
                                innerWrap.classList.add('inner-wrap');
                                wrap.append(innerWrap);
                                for (const productKey in product) {
                                    switch (productKey) {
                                        case 'thumbnail':
                                            let img = document.createElement('img');
                                            img.classList.add('img');
                                            img.src = product[productKey];
                                            img.alt = 'img';
                                            innerWrap.append(img);
                                            break;
                                        default:
                                            let div = document.createElement('div');
                                            div.innerText = `${productKey} : ${product[productKey]}`;
                                            innerWrap.append(div);
                                    }
                                }
                            }
                            break;
                        default:
                            let div = document.createElement('div');
                            div.innerText = `${cartKey} : ${cart[cartKey]}`;
                            wrap.append(div);
                    }
                }
            }
        });
}

// Task 2

{
    fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(json => {
            let {recipes} = json;
            console.log(recipes);
            for (const recipe of recipes) {
                let wrap = document.createElement('div')
                wrap.classList.add('wrap');
                tasks[1].append(wrap);
                for (const recipeKey in recipe) {
                    switch (recipeKey) {
                        case 'ingredients':
                            let list = document.createElement('ul')
                            wrap.innerHTML += `<div>${recipeKey} :</div>`;
                            wrap.append(list);
                            for (const ingredient of recipe[recipeKey]) {
                                list.innerHTML += `<li>${ingredient}</li>`;
                            }
                            break;
                        case 'instructions':
                            let str = document.createElement('div');
                            str.innerText = `${recipeKey} :`;
                            for (const instruction of recipe[recipeKey]) {
                                str.innerText += ' ';
                                str.innerText += instruction;
                            }
                            wrap.append(str);
                            break;
                        case 'image':
                            let img = document.createElement('img');
                            img.classList.add('img');
                            img.src = recipe[recipeKey];
                            img.alt = 'img';
                            wrap.append(img);
                            break;
                        default:
                            let div = document.createElement('div');
                            div.innerText = `${recipeKey} : ${recipe[recipeKey]}`;
                            wrap.append(div);
                    }
                }
            }
        });
}