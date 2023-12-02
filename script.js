

function addProduct(){
    const valid = validate();
    if (!valid) return;

    const product = getProduct();

    const productList = getProductFromStorage();

    productList.push(product);

    saveProductToStorage(productList);

    displayProduct(productList);

    clearForm();
}

function getProduct(){

    const productNameBox = document.getElementById("productNameBox");
    const priceBox = document.getElementById("priceBox");
    const selectBox = document.getElementById("selectBox");
    const pictureLinkBox = document.getElementById("pictureLinkBox");

    const productName = productNameBox.value;
    const price = priceBox.value;
    const select = selectBox.value;
    const pictureLink = pictureLinkBox.value;

    const product = {
        productName,
        price,
        select,
        pictureLink
    };

    return product;
}

function validate(){

    const productNameBox = document.getElementById("productNameBox");
    const priceBox = document.getElementById("priceBox");
    const selectBox = document.getElementById("selectBox");
    const pictureLinkBox = document.getElementById("pictureLinkBox");

    const productName = productNameBox.value;
    const price = priceBox.value;
    const select = selectBox.value;
    const pictureLink = pictureLinkBox.value;

    const productNameErr = document.getElementById("productNameErr");
    const priceErr = document.getElementById("priceErr");
    const selectErr = document.getElementById("selectErr");
    const pictureLinkErr = document.getElementById("pictureLinkErr");

    productNameErr.innerText = "";
    priceErr.innerText = "";
    selectErr.innerText = "";
    pictureLinkErr.innerText = "";

    if(productName === ""){
        productNameErr.innerText = "Missing product name!";
        productNameBox.focus();
        return false;
    }

    if(price === ""){
        priceErr.innerText = "Missing price!";
        priceBox.focus();
        return false;
    }

    if(select === ""){
        selectErr.innerText = "Missing selection!";
        selectBox.focus();
        return false;
    }

    if(pictureLink === ""){
        pictureLinkErr.innerText = "Missing picture link!";
        pictureLinkBox.focus();
        return false;
    }

    return true;
}

function getProductFromStorage(){

    const str = localStorage.getItem("product");
    const product = str === null ? [] : JSON.parse(str);
    return product;

}

function saveProductToStorage(arr){

    const str = JSON.stringify(arr);
    localStorage.setItem("product", str);

}

function displayProduct(productList){

    const tableBody = document.getElementById("tableBody");
    let html = "";
    for (const product of productList){
        const row = `
            <tr>
                <td>${product.productName}</td>
                <td>${product.price}</td>
                <td>${product.select}</td>
                <td><img src="${product.pictureLink}" width="100" height="100"></td>
                <td><button type="button" onclick="deleteLine(this)">Delete Line</button></td>
            </tr>`;
        html += row;
    }

    tableBody.innerHTML = html;
}

function clearForm(){

    document.getElementById("productNameBox").value = "";
    document.getElementById("priceBox").value = "";
    document.getElementById("selectBox").value = "";
    document.getElementById("pictureLinkBox").value = "";
    document.getElementById("productNameBox").focus();
}

function deleteLine(button){

    const row = button.closest("tr");
    row.remove();
    
}
