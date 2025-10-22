window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('productContainer');

    fetch('https://dummyjson.com/products')
        .then(response => {
            if (!response.ok) throw Error(response.status);
            return response.json();
        })
        .then(data => {
            data.products.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('product-card');
                card.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-desc">${product.description}</p>
            <p class="product-price">$${product.price}</p>
            </div>
            <div class="cart">
            <button class="product-btn">Add to Cart</button>
            </div>
          
        `;
                container.appendChild(card);
            });
        })
        .catch(error => console.log('Error:', error));

    // ✅ Slider Functionality
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
});



// Demo reviews — for UI / testing only
const demoReviews = [
    { rating: 5, title: "Beautiful shade", name: "Emily R.", location: "New York, USA", date: "2025-08-24", text: "Absolutely stunning shade! I wore it to a dinner party and got so many compliments. Smooth texture and long-lasting." },
    { rating: 4, title: "Very good", name: "Lucas M.", location: "London, UK", date: "2025-07-12", text: "Very good product. The color is bold, and it stays for hours. Slight transfer after eating, but nothing major." },
    { rating: 3, title: "Okay", name: "Sofia L.", location: "Paris, France", date: "2025-06-03", text: "Nice lipstick, but the shade looked a bit different in person. Good for everyday use." },
    { rating: 5, title: "Loved it", name: "Ava K.", location: "Sydney, Australia", date: "2025-09-02", text: "I love this lipstick! It’s creamy, elegant, and the red is so vibrant. Fast delivery and great packaging." },
    { rating: 2, title: "Not for me", name: "Oliver S.", location: "Berlin, Germany", date: "2025-05-15", text: "The texture was too dry for me. Maybe works better with a lip balm underneath." },
    { rating: 5, title: "Gorgeous", name: "Sophie W.", location: "Amsterdam, Netherlands", date: "2025-09-10", text: "This lipstick is gorgeous! It gives a luxury feel at a good price. Will definitely reorder." },
    { rating: 4, title: "Pretty color", name: "Chloe T.", location: "Toronto, Canada", date: "2025-08-19", text: "Beautiful shade! Perfect for events. It lasts quite well, but the cap felt a bit flimsy." },
    { rating: 4, title: "Nice product", name: "James D.", location: "Milan, Italy", date: "2025-06-28", text: "Nice packaging, strong color, and smooth application. Could last a bit longer." },
    { rating: 3, title: "Average", name: "Ethan B.", location: "Madrid, Spain", date: "2025-07-30", text: "Good for casual use, but it fades after a few hours. Would recommend for short wear." },
    { rating: 2, title: "Not my shade", name: "Mia P.", location: "Zurich, Switzerland", date: "2025-05-05", text: "Didn’t suit my skin tone, but the quality is fine. Just not my shade." }
];

function renderDemoReviews() {
    const container = document.getElementById('reviews');
    demoReviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
      <div class="review-header">
        <strong>${r.title}</strong>
        <span class="rating">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
      </div>
      <p class="review-text">${r.text}</p>
      <div class="review-meta">${r.name} • ${r.location} • <small>${r.date}</small></div>
    `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderDemoReviews();

    const slider = document.getElementById('reviews');
    const leftBtn = document.getElementById('arrowRight');
    const rightBtn = document.getElementById('arrowLeft');

    // Scroll Amount (match your card width + gap)
    const scrollAmount = 320;

    rightBtn.addEventListener('click', () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    leftBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
});


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

