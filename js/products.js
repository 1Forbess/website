const products = {
    sneakers: [
        {
            id: 1,
            name: "Nike Dunk Low Retro",
            price: "86,97",
            description: "Эксклюзивные кроссовки ручной работы",
            image: "images/sneakers1.jpg",
            details: {
                material: "Итальянская кожа высшего качества",
                construction: "Ручная работа",
                origin: "Сделано в Италии",
                features: [
                    "Кожаная подошва",
                    "Уникальный дизайн",
                    "Ограниченная серия",
                    "Индивидуальная нумерация"
                ]
            }
        },
        // Добавьте больше товаров
    ],
    // Добавьте другие категории
};

function displayProducts(category) {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    productsContainer.innerHTML = '';
    
    let productsToShow = [];
    if (category === 'all') {
        Object.values(products).forEach(categoryProducts => {
            productsToShow = productsToShow.concat(categoryProducts);
        });
    } else {
        productsToShow = products[category] || [];
    }
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-aos', 'fade-up');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">$${product.price}</div>
            </div>
        `;
        
        productCard.onclick = () => showProductDetails(product);
        productsContainer.appendChild(productCard);
    });
}

function showProductDetails(product) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <div class="product-modal">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-modal-info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="price">$${product.price}</div>
                <div class="product-details">
                    <h3>Характеристики</h3>
                    <ul>
                        <li>Материал: ${product.details.material}</li>
                        <li>Конструкция: ${product.details.construction}</li>
                        <li>Происхождение: ${product.details.origin}</li>
                    </ul>
                    <h3>Особенности</h3>
                    <ul>
                        ${product.details.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = "block";
}

// Закрытие модального окна
document.getElementById('modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Отображаем товары при загрузке
document.addEventListener('DOMContentLoaded', () => {
    displayProducts('all'); // Отображаем все товары
});
