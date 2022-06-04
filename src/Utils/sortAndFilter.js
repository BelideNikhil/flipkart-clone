function sortByPrice(list, sortBy) {
    if (sortBy === "lowToHigh") {
        return list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
        return list.sort((a, b) => b.price - a.price);
    }
    return list;
}

function filterByGender(list, idealFor) {
    if (idealFor.length > 0) {
        return list.filter((product) => idealFor.includes(product.idealFor));
    }
    return list;
}

function filterBySize(list, selectedSizes) {
    if (selectedSizes.length > 0) {
        let arr = [];
        for (let i = 0; i < list.length; i++) {
            const product = list[i];
            for (let j = 0; j < product.sizes.length; j++) {
                const foundInarr = arr.find((item) => product.id === item.id);
                if (selectedSizes.includes(product.sizes[j]) && foundInarr === undefined) {
                    arr = [...arr, product];
                }
            }
        }
        return arr;
    }
    return list;
}

export function sortAndFilter(list, filters) {
    const { sortBy, idealFor, productSizes } = filters;

    const sortedByPrice = sortByPrice(list, sortBy);
    const filteredByGender = filterByGender(sortedByPrice, idealFor);
    const filteredBySize = filterBySize(filteredByGender, productSizes);
    return filteredBySize;
}
