// script.js

// Signup user function
function signupUser() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (username && email && password) {
        const user = {
            username,
            email,
            password
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Signup successful! Please log in.');
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
    return false;
}

// Login user function
function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && username === user.username && password === user.password) {
        localStorage.setItem('loggedIn', 'true');
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
    return false;
}

// Check login status function
function checkLoginStatus() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
        document.getElementById('inputDataButton').style.display = 'block';
    } else {
        document.getElementById('inputDataButton').style.display = 'none';
    }
}

// Show input section function
function showInputSection() {
    const inputSection = document.getElementById('inputSection');
    inputSection.style.display = 'flex';
}

// Add data function
function addData() {
    const productInfo = document.getElementById('productInfo').value;
    const productImage = document.getElementById('productImage').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productInfo && productImage && productPrice) {
        const data = JSON.parse(localStorage.getItem('data')) || [];
        data.push({ productInfo, productImage, productPrice });
        localStorage.setItem('data', JSON.stringify(data));
        displayData();
        document.getElementById('productInfo').value = '';
        document.getElementById('productImage').value = '';
        document.getElementById('productPrice').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Display data function
function displayData() {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    const contentSection = document.getElementById('contentSection');
    contentSection.innerHTML = '';

    data.forEach((item, index) => {
        const dataImageContainer = document.createElement('div');
        dataImageContainer.className = 'data-image-container';
        dataImageContainer.style.animationDelay = `${index * 0.1}s`;

        const contentBox1 = document.createElement('div');
        contentBox1.className = 'content-box';
        contentBox1.textContent = `Product Info: ${item.productInfo}`;

        const contentBox2 = document.createElement('div');
        contentBox2.className = 'content-box';
        contentBox2.innerHTML = `<img src="${item.productImage}" alt="Product Image">`;

        const contentBox3 = document.createElement('div');
        contentBox3.className = 'content-box';
        contentBox3.textContent = `Product Price: ${item.productPrice}`;

        if (index % 2 === 0) {
            dataImageContainer.appendChild(contentBox1);
            dataImageContainer.appendChild(contentBox2);
            dataImageContainer.appendChild(contentBox3);
        } else {
            dataImageContainer.appendChild(contentBox2);
            dataImageContainer.appendChild(contentBox1);
            dataImageContainer.appendChild(contentBox3);
        }

        contentSection.appendChild(dataImageContainer);
    });
}
