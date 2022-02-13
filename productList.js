(function () {
    var itemsDB = [
        { id: '123', name: 'Article 1', published: true },
        { id: '583', name: 'Article 2', published: true },
        { id: '954', name: 'Article 3', published: false },
        { id: '384', name: 'Article 4', published: false },
        { id: '183', name: 'Article 5', published: true },
        { id: '007', name: 'Article 6', published: false },
        { id: '304', name: 'Article 7', published: true },
        { id: '729', name: 'Article 8', published: false },
        { id: '734', name: 'Article 9', published: true },
    ];
    function renderList(results) {
        var items = document.querySelector('#items-container');
        items.innerHTML = '';
        var tableRows = results.map(function (result, index) {
            return `
            <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap">
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