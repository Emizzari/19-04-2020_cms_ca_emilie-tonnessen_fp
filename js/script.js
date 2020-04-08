// API url
const productsAPI = "https://www.tonnessen.com/wp-json/wc/store/products";


// Fetch API
fetch(productsAPI)
    .then(function (response) {
        return response.json();
    })

    .then(function (json) {
        createProducts(json);
    })

    .catch(function (error) {
        console.log(error);
    });


// API Function
function createProducts(json) {
    console.dir(json);

    const productsContainer = document.querySelector(".products-container");

    let newHTML = "";

    // Looping through the products with forEach
    json.forEach(function (result) {

        newHTML += `
                    <div class="single-product">
                        <a href="${result.permalink}">
                            <div class="details">
                                <img class="image" src="${result.images[0].src}" alt="${result.name}">
                                <h4 class="name">${result.name}</h4>
                                <h5 class="price">${result.prices.price_prefix} ${result.prices.price}</h5>                        
                            </div>
                        </a>
                        <a href="${result.permalink}">
                            <button class="btn">View More</button>
                        </a>
                    </div>
                `;
    });

    productsContainer.innerHTML = newHTML;
}

