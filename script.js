const API_URL = "https://api.escuelajs.co/api/v1/products";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("product-list");

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <img src="${item.images[0]}" alt="">
        <h3>${item.title}</h3>
        <p>Category: ${item.category.name}</p>
        <p>Price: $${item.price}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Lỗi fetch API:", error);
  });
