document.getElementById("myButton").addEventListener("click", () => {
    const phones = [
        "Te recomendamos el iPhone 17 Pro Max 📱",
        "Te recomendamos el Samsung Galaxy S25 Ultra 🚀",
        "Te recomendamos el Google Pixel 10 Pro 🤖"
    ];
    alert(phones[Math.floor(Math.random() * phones.length)]);
});
