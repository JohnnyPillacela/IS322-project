(function () {
    var itemsDB = [
        { id: '001', name: 'MacBook Pro, M1 Pro Chip', price: 2000, image: './images/M1ProMacBookPro.jpeg', available: true },
        { id: '002', name: 'iPhone 12', price: 900, image: './images/iphone12.png', available: true },
        { id: '003', name: 'iPad Pro', price: 850, image: './images/iPadProM1.jpeg', available: false },
        { id: '004', name: 'Air Pods 3rd Gen', price: 190, image: './images/airpods3.jpeg', available: false },
        { id: '005', name: 'Samsung S21', price: 1000, image: './images/S21.jpeg', available: true },
        { id: '006', name: 'Samsung Galaxy Book', price: 1100, image: './images/samsung-notebook.jpeg', available: false },
        { id: '007', name: 'Apple Pencil', price: 127, image: './images/apple-pencil.jpeg', available: true },
        { id: '008', name: 'Samsung Watch', price: 200, image: './images/samsungWatch.jpg', available: false },
        { id: '009', name: 'Apple Home Pod', price: 100, image: './images/appleHomePod.jpeg', available: true },
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
                    <p class="card-text">$${result.price}</p> 

                </div>
            <div>
            `
        });
        tableRows.forEach(function (row) {
            items.innerHTML += row;
        });
    }
    renderList(itemsDB);
    function orderBy(sortValue) {
        var sortedResults = (sortValue === 'name') ?
            itemsDB.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            itemsDB.sort(function (a, b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }
    document.querySelector('#orderBy').addEventListener('change', function (event) {
        orderBy(event.target.value);
    });
})(); 