// Task 2: Fetch Products With //

function fetchProductsThen() {  // function to fetch the products
    fetch('https://www.course-api.com/javascript-store-products') // fetches the urls for both apiUrl and proxyUrl
        .then(response => { // creates arrow function and if/then on next line
            if (!response.ok) { // if the response is not ok
                throw new Error('Failed to fetch product');  // give error message
            }
            return response.json(); // Parse the response as JSON
    })

    .then(products => { // then take products as arrow function
        products.forEach(product => {  // for each product
            console.log(product.fields.name); // logs the product name
        });
    })
    .catch(error => {  // if there is an error
        console.error('There was a problem with the fetch operation:', error); // logs error message
    });
}

// Task 3: Fetch Products with Async/Await //

async function fetchProductsAsync () { // declares async function
    try {
        const response = await fetch ('https://www.course-api.com/javascript-store-products');   // waits for fetching from url
        if (!response.ok) { // if response is not ok
            throw new Error ('Failed to fetch product'); // console log error message
        } 

        const products = await response.json(); // parse to JSON
        displayProducts(products); // call helper function
        } catch (error) {
        handleError(error); // If there's an error 
    }
}

function displayProducts(products) {  // create the helper function
    products.forEach(product => { // for each product
        const productElement = document.createElement('div');  // create element 
        productElement.classList.add('product'); // Optionally add a class for styling
        productElement.textContent = `${product.fields.name} - $${product.fields.price}`;  // adds text content
    });
}

function handleError(error) {  // error message function
    const errorMessage = document.getElementById('error-message'); // gets the error message
    errorMessage.textContent = `There was an error: ${error.message}`;  // logs error plus the message
}


// Task 4: Display Products //

function displayProducts(products) {  // function to display products
    const productContainer = document.querySelector('#product-container');   // selects container
    const productList = products.slice(0,5); // selects first 5 products

    productList.forEach(product => {
        const productCard = document.createElement('div') //crease element for product card
        productCard.className = 'product-card'; // assigns class to product card

        const name = document.createElement('h3'); // creates element for name
        name.textContent = product.fields.name; // assigns text content to name
        name.className = 'product-name'; // assigns class to the name

        const price = document.createElement('p'); // creates element for price
        price.textContent = `$${product.fields.price}`; // assigns text content for price
        price.className = 'product-price'; // assigns class to price

        const image = document.createElement('img'); // creates image element
        image.src = product.fields.image[0].url;
        image.alt = product.fields.name;
        image.className = 'product-image';  // assigns class to image

        productCard.append(name, price, image);  // appends the elements of the product card
        productContainer.appendChild(productCard); // appends the product container
    })
}

fetchProductsThen(); // calls the function
fetchProductsAsync(); // calls the function