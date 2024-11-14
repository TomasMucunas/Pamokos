const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough bread", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [];

// ------------------ Complete the functions written below ------------------------------ //

function logItemNames() {
  // Use the .forEach() method to log the name of each item
  items.forEach((item) => {
    console.log(item.name);
  });
}

/**
 * @param {number} id
 * @returns {{id: number, name: string, price: number, category: number, inventory: number}} item
 */
function findItemById(id) {
  // TODO: use the .find() method to return the item whose id matches the passed id
  return items.find((item) => item.id === id);
}

/**
 * @returns {items[]} Returns a new array with names capitalized
 */
function capitalizeNames() {
  // TODO: use .map() and possibly .slice() to return a new array of items with names capitalized
  // DO NOT MUTATE THE ORIGINAL ARRAY IN YOUR LOGIC
  return items.map((item) => {
    return {
      ...item,
      name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    };
  });
}

/**
 * @returns {number} total sum of all inventory items
 */
function calculateTotalInventory() {
  // Use the .reduce() method to sum the inventory value of each item
  return items.reduce((total, item) => {
    return total + item.inventory;
  }, 0);
}

/**
 * @returns {number}
 */
function calculateAllInventoryPrice() {
  // TODO: Use the .reduce() method to return the total value of all items in inventory
  return items.reduce((total, item) => {
    return total + item.price * item.inventory;
  }, 0);
}

/**
 * @param {string} name
 * @returns {number} price of the given item
 */
function getItemPriceByName(name) {
  // TODO: Use your knowledge of objects and arrays to get the price of the passed item
  const item = items.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return item ? item.price : "Item not found";
}

/**
 * @param {number} categoryId category id to search for
 * @returns {items[]} array of all items that belong to this category
 */
function filterItemsByCategoryId(categoryId) {
  // TODO: use the .filter() method to filter all items that do not belong to the passed category
  return items.filter((item) => item.categoryId === categoryId);
}

function logCartItems() {
  // TODO: Iterate through your cart and use indices to log the names of all items in your cart
  cart.forEach((itemId) => {
    const item = findItemById(+itemId);
    if (item) {
      console.log(item.name);
    }
  });
}

/**
 * @returns { number } returns total cost of items in your cart
 */
function calculateTotalCartPrice() {
  // TODO: Iterate through your cart and return total cost of all items in your cart
  return cart.reduce((total, itemId) => {
    const item = findItemById(+itemId);
    return total + (item ? item.price : 0);
  }, 0);
}

// --------------------- DO NOT MODIFY CODE BELOW ------------------------ //

const ids = prompt(
  "Enter comma-separated numbers to add the IDs of the items you want to add to the cart",
  "1, 3, 5"
);

// Split the string of numbers into an array of strings.
const idArr = ids.split(", ");

// Push each id into the cart array.
idArr.forEach((id) => cart.push(id));
console.log(`All item names: `);
logItemNames();

const itemId = prompt("Enter the ID of the item you are trying to find", "1");
console.log(
  `Item with ID ${itemId}: ${JSON.stringify(findItemById(+itemId), null, 2)}`
);
console.log(
  "We can iterate through the array and return a new array with names capitalized: ",
  capitalizeNames()
);
console.log("Total inventory count of all items: ", calculateTotalInventory());
console.log(
  "Total price of all items in inventory: ",
  calculateAllInventoryPrice()
);

const itemToFind = prompt(
  "Enter the name of the item to find out its price",
  "apple"
);
console.log(`Price of ${itemToFind}: `, getItemPriceByName(itemToFind));

const categoryId = prompt(
  "Enter a number from 1 to 4 to filter items by this categoryId",
  2
);
console.log(
  `Items in category ${categoryId}: `,
  filterItemsByCategoryId(+categoryId)
);

console.log("Items in the cart: ");
logCartItems();

console.log(
  `Total price of items in your cart: `,
  calculateTotalCartPrice()
);