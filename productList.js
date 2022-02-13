(function () {
    var itemsDB = [
        { id: '001', name: 'MacBook Pro, M1 Pro Chip', price: 121, image: './images/M1ProMacBookPro.jpeg', published: true },
        { id: '002', name: 'iPhone 12', price: 122, image: './images/iphone12.png', published: true },
        { id: '003', name: 'iPad Pro', price: 123, image: './images/iPadProM1.jpeg', published: false },
        { id: '004', name: 'Air Pods 3rd Gen', price: 124, image: './images/airpods3.jpeg', published: false },
        { id: '005', name: 'Samsung S21', price: 125, image: './images/S21.jpeg', published: true },
        { id: '006', name: 'Samsung Galaxy Book', price: 126, image: './images/samsung-notebook.jpeg', published: false },
        { id: '007', name: 'Apple Pencil', price: 127, image: './images/apple-pencil.jpeg', published: true },
        { id: '008', name: 'Samsung Watch', price: 128, image: './images/samsungWatch.jpg', published: false },
        { id: '009', name: 'Apple Home Pod', price: 129, image: './images/appleHomePod.jpeg', published: true },
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