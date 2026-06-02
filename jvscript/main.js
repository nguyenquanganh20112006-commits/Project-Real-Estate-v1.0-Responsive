const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".close-menu");

// Đóng mở menu
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
});

// Đóng bằng nút X
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

// Click ngoài menu => đóng
document.addEventListener("click", (e) => {

    if (
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navMenu.classList.remove("active");
    }

});

const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (window.scrollY > hero.offsetHeight - 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

const properties = [
    {
        img: "assets/images/anh9.png",
        title: "New Apartment Nice View",
        price: "$34,900",
        location: "Belmont Gardens, Chicago",
        badge: "For Rent",
        badgeClass: "badge-rent",
        beds: 3,
        baths: 2,
        sqft: 3450,
        agent: "William Seklo",
        agentImg: "assets/images/william.png"
    },
    {
        img: "assets/images/anh10.png",
        title: "Modern Apartments",
        price: "$34,900",
        location: "Belmont Gardens, Chicago",
        badge: "For Sale",
        badgeClass: "badge-sale",
        beds: 3,
        baths: 2,
        sqft: 3450,
        agent: "William Seklo",
        agentImg: "assets/images/william.png"
    },
    {
        img: "assets/images/anh11.png",
        title: "Luxury villa in Rego Park",
        price: "$34,900",
        location: "Belmont Gardens, Chicago",
        badge: "For Rent",
        badgeClass: "badge-rent",
        beds: 3,
        baths: 2,
        sqft: 3450,
        agent: "William Seklo",
        agentImg: "assets/images/william.png"
    },
    {
        img: "assets/images/anh12.png",
        title: "Comfortable Apartment",
        price: "$34,900",
        location: "Belmont Gardens, Chicago",
        badge: "For Rent",
        badgeClass: "badge-rent",
        beds: 3,
        baths: 2,
        sqft: 3450,
        agent: "William Seklo",
        agentImg: "assets/images/william.png"
    }
];

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // 1. Đóng menu mobile ngay lập tức sau khi click chọn mục
        navMenu.classList.remove("active");

        // 2. Xử lý cuộn mượt mà (Smooth Scroll) đến đúng ID section
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault(); // Chặn hành vi nhảy trang giật cục mặc định
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


const container = document.getElementById("listings-cards");

properties.forEach(function (property) {
    const card = `
        <div class="listing-card">
            <div class="listing-image">
                <img src="${property.img}" alt="${property.title}">
                <span class="listing-badge ${property.badgeClass}">${property.badge}</span>
                <div class="listing-image-meta">
                    <div class="listing-location">
                        <i class="fa-solid fa-location-dot"></i> ${property.location}
                    </div>
                    <div class="listing-icons">
                        <span><i class="fa-solid fa-camera"></i> 4</span>
                        <span><i class="fa-solid fa-video"></i> 2</span>
                    </div>
                </div>
            </div>
            <div class="listing-body">
                <div class="listing-price">
                    ${property.price} <span>/Month</span>
                </div>
                <h3>${property.title}</h3>
                <p class="listing-desc">
                    Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood
                </p>
                <div class="listing-stats">
                    <div class="stat-item">
                        <i class="fa-solid fa-bed"></i>
                        <span class="stat-value">${property.beds}</span>
                        <span class="stat-label">Bedrooms</span>
                    </div>
                    <div class="stat-item">
                        <i class="fa-solid fa-bath"></i>
                        <span class="stat-value">${property.baths}</span>
                        <span class="stat-label">Bathrooms</span>
                    </div>
                    <div class="stat-item">
                        <i class="fa-solid fa-vector-square"></i>
                        <span class="stat-value">${property.sqft}</span>
                        <span class="stat-label">Square Ft</span>
                    </div>
                </div>
                <div class="listing-footer">
                    <div class="listing-agent">
                        <img src="${property.agentImg}" alt="${property.agent}" class="agent-avatar">
                        <div>
                            <div class="agent-name">${property.agent}</div>
                            <div class="agent-role">Estate Agents</div>
                        </div>
                    </div>
                    <div class="listing-actions">
                        <button class="action-btn"><i class="fa-solid fa-pen"></i></button>
                        <button class="action-btn"><i class="fa-solid fa-heart"></i></button>
                        <button class="action-btn"><i class="fa-solid fa-clock"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += card;
});


fetch('./data/news.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (newsData) {
        const newsContainer = document.getElementById('news-cards');

        newsData.forEach(function (item) {
            newsContainer.innerHTML += `
                <div class="news-card">
                    <div class="news-image">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <div class="news-body">
                        <div class="news-meta">
                            <span><i class="fa-solid fa-user"></i> ${item.author}</span>
                            <span><i class="fa-solid fa-tag"></i> ${item.category}</span>
                        </div>
                        <h3>${item.title}</h3>
                        <div class="news-footer">
                            <div class="news-date">
                                <i class="fa-solid fa-calendar"></i> ${item.date}
                            </div>
                            <a href="#" class="news-read">READ MORE</a>
                        </div>
                    </div>
                </div>
            `;
        });
    });