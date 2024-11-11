const filterItems = (array, query) => {
    return array
        .filter(item => item.toLowerCase().includes(query.toLowerCase()))
        .map(item => `*${item}`)
        .sort();
};

const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

console.log(filterItems(friends, 'ka')); 
console.log(filterItems(friends, 'e')); 