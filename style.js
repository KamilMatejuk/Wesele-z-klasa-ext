function addStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
        .ext input[type=checkbox]+label::before {
            content: none;  
        }
        .ext input[type=checkbox]+label {
            background: red;
            color: white;
            padding: 5px 10px 8px 10px;
            border-radius: 5px;
            display: table;
        }
    `
    document.head.appendChild(style);
}