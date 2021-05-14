// Arreglo Burbuja

function bubbleSort(items) {
    const elementos = items.length

    console.log('elementos:', elementos)

    for (var i = (elementos - 1); i > 0; i--) {
        for (var j = (elementos - i); j > 0; j--) {
            if (items[j] < items[j - 1]) {
                [items[j], items[j - 1]] = [items[j - 1], items[j]]// [a,b] = [b,a]
            }
        }
    }
    return items
}

var array = [8, 7, 3, 5, 1];

module.export = bubbleSort;