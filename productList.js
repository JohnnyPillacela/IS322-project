(function () {
    var itemsDB = [
        { id: '001', name: 'Item 1', price: 121, image: './images/M1ProMacBookPro.jpeg', published: true },
        { id: '002', name: 'Item 2', price: 122, image: './images/iphone12.png', published: true },
        { id: '003', name: 'Item 3', price: 123, image: './images/', published: false },
        { id: '004', name: 'Item 4', price: 124, image: './images/', published: false },
        { id: '005', name: 'Item 5', price: 125, image: './images/', published: true },
        { id: '006', name: 'Item 6', price: 126, image: './images/', published: false },
        { id: '007', name: 'Item 7', price: 127, image: './images/', published: true },
        { id: '008', name: 'Item 8', price: 128, image: './images/', published: false },
        { id: '009', name: 'Item 9', price: 129, image: './images/', published: true },
    ];
    function renderList(results) {
        var items = document.querySelector('#items-container');
        items.innerHTML = '';
        var tableRows = results.map(function (result, index) {
            return `
            <div class="card">
                <img class="card-img-top" src="${result.image}" alt="Card image">
                <div class="card-body">
                    <p class="card-text">${result.name}</p>
                </div>
            <div>
            `
        });
        tableRows.forEach(function (row) {
            items.innerHTML += row; 
        });
    }
    renderList(itemsDB);
})(); 