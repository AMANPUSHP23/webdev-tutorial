// Sign up user
function signupUser() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (username && email && password) {
        const userData = {
            email: email,
            password: password,
            data: []
        };

        localStorage.setItem(username, JSON.stringify(userData));
        alert('User signed up successfully!');
        window.location.href = 'login.html';
    } else {
        alert('Please fill all fields.');
    }
    return false;
}

// Log in user
function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = localStorage.getItem(username);

    if (user) {
        const userData = JSON.parse(user);
        if (userData.password === password) {
            localStorage.setItem('currentUser', username);
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            alert('Incorrect password.');
        }
    } else {
        alert('User not found.');
    }
    return false;
}

// Add data
function addData() {
    const inputData = document.getElementById('inputData').value;
    const inputImage = document.getElementById('inputImage').value;
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser && inputData && inputImage) {
        const user = JSON.parse(localStorage.getItem(currentUser));
        user.data.push({ inputData, inputImage });
        localStorage.setItem(currentUser, JSON.stringify(user));
        displayUserData(user.data);
    } else {
        alert('Please log in and fill all fields.');
    }
}

// Display user data
function displayUserData(data) {
    const contentSection = document.getElementById('contentSection');
    contentSection.innerHTML = '';

    data.forEach((item, index) => {
        const dataBox = document.createElement('div');
        dataBox.className = 'content-box';
        dataBox.textContent = item.inputData;

        const imageBox = document.createElement('div');
        imageBox.className = 'content-box';
        const imageElement = document.createElement('img');
        imageElement.src = item.inputImage;
        imageElement.alt = 'User Image';
        imageBox.appendChild(imageElement);

        const container = document.createElement('div');
        container.className = 'data-image-container';

        if (index % 2 === 0) {
            container.appendChild(dataBox);
            container.appendChild(imageBox);
        } else {
            container.appendChild(imageBox);
            container.appendChild(dataBox);
        }

        contentSection.appendChild(container);
    });
}

// Load user data on home page if logged in
window.onload = function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(localStorage.getItem(currentUser));
        if (user.data.length > 0) {
            displayUserData(user.data);
        }
        document.getElementById('inputSection').style.display = 'flex';
    }
};
