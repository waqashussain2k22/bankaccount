document.getElementById("accountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    openAccount();
});

function openAccount() {
    let name = document.getElementById("name").value;
    let balance = parseFloat(document.getElementById("balance").value);
    
    if (isNaN(balance) || balance < 0) {
        alert("Invalid initial balance.");
        return;
    }

    let accountNumber = generateAccountNumber(); // Generate unique account number
    let account = {
        accountNumber: accountNumber,
        name: name,
        balance: balance
    };

    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    accounts.push(account);
    localStorage.setItem('accounts', JSON.stringify(accounts)); // Store accounts in localStorage
    window.location.href = 'accounts.html'; // Redirect to the second page
}

function generateAccountNumber() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let accountNumber = '';
    for (let i = 0; i < 8; i++) {
        accountNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return accountNumber;
}



displayAccounts();

function displayAccounts() {
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    let accountsList = document.getElementById('accountsList');
    let output = '';
    if (accounts.length > 0) {
        accounts.forEach(function(account) {
            output += `
                <div class="account">
                    <h2>Account Number: ${account.accountNumber}</h2>
                    <p>Account Holder: ${account.name}</p>
                    <p>Balance: $${account.balance}</p>
                </div>
            `;
        });
    } else {
        output = "<p>No accounts found.</p>";
    }
    accountsList.innerHTML = output;
}

function transaction() {
    window.location.href = 'transaction.html'; // Redirect to the account opening form
}

function openAccountForm() {
    window.location.href = 'index.html'; // Redirect to the account opening form
}

