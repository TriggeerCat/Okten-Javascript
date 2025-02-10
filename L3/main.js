const QAEngineerWalksIntoTheBar = [1, 0, 99999999999, "lizard", -1, "ueicbksjdhd", true, "First real customer wals into the bar and asks where the toilet is", "Bar:", "🔥"]

// Task 1
{
    document.write(`<div class="task">`)
    for (const arrElem of QAEngineerWalksIntoTheBar) {
        document.write(`<div>${arrElem}</div>`)
    }
    document.write(`</div>`)
}

// Task 2
{
    document.write(`<div class="task">`)
    for (let i = 0; i < QAEngineerWalksIntoTheBar.length; i++) {
        const arrElem = QAEngineerWalksIntoTheBar[i];
        document.write(`<div>${i}. ${arrElem}</div>`)
    }
    document.write(`</div>`)
}

// Task 3
{
    document.write(`<div class="task">`)
    let i = 0;
    while (i < 20) {
        document.write(`<h1>${++i}</h1>`);
    }
    document.write(`</div>`)
}

// Task 4
{
    document.write(`<div class="task">`)
    let i = 0;
    while (i < 20) {
        document.write(`<h1>${i}. ${++i}</h1>`);
    }
    document.write(`</div>`)
}

// Task 5
{
    document.write(`<div class="task"><ul>`)
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    for (const arrElem of listOfItems) {
        document.write(`<li>${arrElem}</li>`)
    }
    document.write(`</ul></div>`)
}

// Task 6
{
    document.write(`<div class="task">`)
    let products = [{
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    }, {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    }, {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/images/full/tomato_noun_001_17860.jpg?version=6.0.45'
    }, {
        title: 'tea',
        price: 15,
        image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:2048/quality=value:75/3RuT7WnQsGUMxOVU10q5'
    },];
    for (const arrElem of products) {
        document.write(`
            <div class="product-card">
                <h3 class="product-title">${arrElem.title}. Price — ${arrElem.price} UAH</h3>
                <img src="${arrElem.image}" alt="" class="product-image">
            </div>  
        `)
    }
    document.write(`</div>`)
}

// Task 7
{
    document.write(`<div class="task">`)
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    document.write(`<div class="user">`)
    for (const user of users) {
        if (user.status === true) document.write(`<p>${user.name}</p>`);
    }
    document.write(`</div><div class="user">`)
    for (const user of users) {
        if (user.status === false) document.write(`<p>${user.name}</p>`);
    }
    document.write(`</div><div class="user">`)
    for (const user of users) {
        if (user.age > 30) document.write(`<p>${user.name}</p>`);
    }
    document.write(`</div></div>`)
}