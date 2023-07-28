// Function to filter even numbers from the array
function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}

// Function to display the array elements on the webpage
function displayArrayOnWebpage(array, elementId) {
    const element = document.getElementById(elementId);
    element.textContent = `[${array.join(', ')}]`;
}

// Main program
const originalArray = [12, 34, 45, 23, 6, 78, 54, 90];
const filteredEvenNumbers = filterEvenNumbers(originalArray);

// Display the original and filtered arrays on the webpage
displayArrayOnWebpage(originalArray, 'originalArray');
displayArrayOnWebpage(filteredEvenNumbers, 'filteredEvenNumbers');
