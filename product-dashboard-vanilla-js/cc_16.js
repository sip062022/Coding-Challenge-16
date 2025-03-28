// Task 2: Fetch Products With //

const apiUrl = 'https://www.course-api.com/javascript-store-products'; // api URL
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // proxy URL constant to bypass CORS

function fetchProductsThen() {  // function to fetch the products
    fetch(proxyUrl + apiUrl) // fetches the urls for both apiUrl and proxyUrl
        .then(response => { // creates arrow function and if/then on next line
            if (!response.ok) { // if the response is ok
                throw new Error('Network response was not ok');  // give error message
            }
            return response.json(); // Parse the response as JSON
    })

    .then(products => { // then take products as arrow function
        products.forEach(product => {  // for each product
            console.log(product.name); // logs the product name
        });
    })
    .catch(error => {  // if there is an error
        console.error('There was a problem with the fetch operation:', error); // logs error message
    });
}

fetchProductsThen(); // calls the function