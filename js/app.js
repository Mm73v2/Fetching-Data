// THREE WAYS TO FETCH DATA FROM AN API

// Method 1: Using XMLHttpRequest (XHR)
const xhr = new XMLHttpRequest(); // Create a new XHR object

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true); // Initialize a GET request

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Check if the request is complete and was successful
    var data = JSON.parse(xhr.responseText); // Parse the JSON response
    console.log(data, "XHR Object"); // Handle the data
  }
};

xhr.onerror = function () {
  console.error("Error:", xhr.statusText); // Handle any errors
};

xhr.send(); // Send the request

// Method 2: Using fetch API
fetch("https://jsonplaceholder.typicode.com/todos") // Make a GET request to the API
  .then((response) => response.json()) // Parse the JSON response
  .then((data) => console.log(data, "fetch api")) // Handle the data
  .catch((error) => console.error("Error:", error)); // Handle any errors

// Method 2.2: Using async/await with fetch
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // Await the fetch request
    const data = await response.json(); // Await the parsing of the JSON response
    console.log(data, "fetch with async await"); // Handle the data
  } catch (error) {
    console.error("Error:", error); // Handle any errors
  }
}

fetchData(); // Call the function to fetch data

// Method 3: Using Axios
axios
  .get("https://jsonplaceholder.typicode.com/todos") // Make a GET request to the API
  .then((response) => console.log(response.data, "Axios")) // Handle the data
  .catch((error) => console.error("Error:", error)); // Handle any errors
