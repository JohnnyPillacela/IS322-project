(function () {
    var itemsDB = [
        { id: '001', name: 'Item 1', price: 121, image: '', published: true },
        { id: '002', name: 'Item 2', price: 122, image: '', published: true },
        { id: '003', name: 'Item 3', price: 123, image: '', published: false },
        { id: '004', name: 'Item 4', price: 124, image: '', published: false },
        { id: '005', name: 'Item 5', price: 125, image: '', published: true },
        { id: '006', name: 'Item 6', price: 126, image: '', published: false },
        { id: '007', name: 'Item 7', price: 127, image: '', published: true },
        { id: '008', name: 'Item 8', price: 128, image: '', published: false },
        { id: '009', name: 'Item 9', price: 129, image: '', published: true },
    ];
    function renderList(results) {
        var items = document.querySelector('#items-container');
        items.innerHTML = '';
        var tableRows = results.map(function (result, index) {
            return `
            <div class="card">
                <img class="card-img-top" src="${result.image}" alt="Card image cap">
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