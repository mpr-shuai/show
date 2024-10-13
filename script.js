// 初始化AOS库
AOS.init({
    duration: 1000,
    once: true
});

// 导航菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 打字机效果
const changingText = document.getElementById('changing-text');
const words = ['网页设计', '用户体验', '前端开发'];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        changingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        changingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

type();

// 作品集筛选
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 博客轮播
const blogSlider = document.querySelector('.blog-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
    blogSlider.scrollBy({
        left: -320,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    blogSlider.scrollBy({
        left: 320,
        behavior: 'smooth'
    });
});