
const rawString = `[{"name":"apple","price":1.99},{"name":"banana","price":0.49}]`;
console.log(rawString.length);
// should return 62

const cookedBinaryData = JSON.parse(rawString); // Text to Binary Data

console.log(cookedBinaryData.find(f => f.name === "apple").price); 
console.log(cookedBinaryData[0].price); 
// Should both return 1.99

cookedBinaryData.push({name: "Thor God of Thunder", price: 900.78}); // Adds the name and price to the list
console.log(cookedBinaryData.find(f => f.price >= 800).name);  // Should return "Thor the killer"

const rawTextOutput = JSON.stringify(cookedBinaryData); // Binary data to Text
console.log(rawTextOutput.length, rawTextOutput); // Should return 108 since we added more keys/values
// Should also return all keys/values