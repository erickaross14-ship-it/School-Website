// // Main JavaScript Application
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize all components
//     initNavigation();
//     initScrollEffects();
//     initContactForm();
//     initCounters();
//     initAnimations();
//     initInteractiveElements();
// });

// // Navigation functionality
// function initNavigation() {
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const nav = document.querySelector('nav');
//     const navLinks = document.querySelectorAll('nav ul li a');

//     // Mobile menu toggle
//     mobileMenuBtn.addEventListener('click', () => {
//         nav.classList.toggle('active');
//         // Change icon based on state
//         const icon = mobileMenuBtn.querySelector('i');
//         if (nav.classList.contains('active')) {
//             icon.classList.remove('fa-bars');
//             icon.classList.add('fa-times');
//         } else {
//             icon.classList.remove('fa-times');
//             icon.classList.add('fa-bars');
//         }
//     });

//     // Close mobile menu when clicking on a link
//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             nav.classList.remove('active');
//             mobileMenuBtn.querySelector('i').classList.remove('fa-times');
//             mobileMenuBtn.querySelector('i').classList.add('fa-bars');
//         });
//     });

//     // Header scroll effect
//     window.addEventListener('scroll', () => {
//         const header = document.querySelector('header');
//         if (window.scrollY > 100) {
//             header.style.padding = '5px 0';
//             header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
//         } else {
//             header.style.padding = '0';
//             header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
//         }
//     });
// }

// // Scroll effects and animations
// function initScrollEffects() {
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });

//     // Active navigation highlighting
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav ul li a');

//     window.addEventListener('scroll', () => {
//         let current = '';
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//             if (scrollY >= (sectionTop - 200)) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href') === `#${current}`) {
//                 link.classList.add('active');
//             }
//         });
//     });
// }

// // Contact form functionality
// function initContactForm() {
//     const contactForm = document.getElementById('contactForm');
//     const submitBtn = document.getElementById('submitBtn');
//     const btnText = submitBtn.querySelector('.btn-text');

//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Show loading state
//         submitBtn.disabled = true;
//         btnText.textContent = 'Sending...';
//         submitBtn.insertAdjacentHTML('afterbegin', '<div class="loading"></div>');

//         // Simulate form submission
//         setTimeout(() => {
//             // Show success message
//             showNotification('Thank you! Your message has been sent successfully.', 'success');
            
//             // Reset form
//             contactForm.reset();
            
//             // Reset button state
//             submitBtn.disabled = false;
//             btnText.textContent = 'Send Message';
//             submitBtn.querySelector('.loading').remove();
//         }, 2000);
//     });

//     // Form validation
//     const formInputs = contactForm.querySelectorAll('input, textarea');
//     formInputs.forEach(input => {
//         input.addEventListener('blur', function() {
//             if (!this.value) {
//                 this.style.borderColor = '#ff6b6b';
//             } else {
//                 this.style.borderColor = '#ddd';
//             }
//         });

//         input.addEventListener('input', function() {
//             if (this.value) {
//                 this.style.borderColor = '#A1DE93';
//             }
//         });
//     });
// }

// // Counter animation for statistics
// function initCounters() {
//     const counters = document.querySelectorAll('.counter');
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const counter = entry.target;
//                 const target = +counter.getAttribute('data-target');
//                 const duration = 2000; // 2 seconds
//                 const increment = target / (duration / 16);
//                 let current = 0;

//                 const updateCounter = () => {
//                     current += increment;
//                     if (current < target) {
//                         counter.textContent = Math.ceil(current);
//                         requestAnimationFrame(updateCounter);
//                     } else {
//                         counter.textContent = target;
//                     }
//                 };

//                 updateCounter();
//                 observer.unobserve(counter);
//             }
//         });
//     });

//     counters.forEach(counter => {
//         observer.observe(counter);
//     });
// }

// // Scroll animations
// function initAnimations() {
//     const fadeElements = document.querySelectorAll('.fade-in');
    
//     const fadeObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             }
//         });
//     }, {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     });

//     fadeElements.forEach(element => {
//         fadeObserver.observe(element);
//     });

//     // Parallax effect for hero section
//     window.addEventListener('scroll', () => {
//         const scrolled = window.pageYOffset;
//         const hero = document.querySelector('.hero');
//         if (hero) {
//             hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//         }
//     });
// }

// // Interactive elements
// function initInteractiveElements() {
//     // Feature cards interaction
//     const features = document.querySelectorAll('.feature');
//     features.forEach(feature => {
//         feature.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-10px) scale(1.05)';
//         });
        
//         feature.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0) scale(1)';
//         });
//     });

//     // Class cards interaction
//     const classCards = document.querySelectorAll('.class-card');
//     classCards.forEach(card => {
//         card.addEventListener('click', function() {
//             // Toggle expanded view
//             this.classList.toggle('expanded');
            
//             if (this.classList.contains('expanded')) {
//                 this.style.zIndex = '10';
//                 showNotification('Learn more about this program!', 'info');
//             } else {
//                 this.style.zIndex = '1';
//             }
//         });
//     });

//     // Floating shapes animation enhancement
//     const shapes = document.querySelectorAll('.shape');
//     shapes.forEach(shape => {
//         shape.addEventListener('mouseenter', function() {
//             this.style.transform = 'scale(1.2)';
//             this.style.opacity = '0.5';
//         });
        
//         shape.addEventListener('mouseleave', function() {
//             this.style.transform = 'scale(1)';
//             this.style.opacity = '0.3';
//         });
//     });

//     // Add click effects to buttons
//     const buttons = document.querySelectorAll('.btn');
//     buttons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             // Create ripple effect
//             const ripple = document.createElement('span');
//             const rect = this.getBoundingClientRect();
//             const size = Math.max(rect.width, rect.height);
//             const x = e.clientX - rect.left - size / 2;
//             const y = e.clientY - rect.top - size / 2;
            
//             ripple.style.width = ripple.style.height = size + 'px';
//             ripple.style.left = x + 'px';
//             ripple.style.top = y + 'px';
//             ripple.classList.add('ripple');
            
//             this.appendChild(ripple);
            
//             // Remove ripple after animation
//             setTimeout(() => {
//                 ripple.remove();
//             }, 600);
//         });
//     });

//     // Add CSS for ripple effect
//     const style = document.createElement('style');
//     style.textContent = `
//         .ripple {
//             position: absolute;
//             border-radius: 50%;
//             background: rgba(255, 255, 255, 0.6);
//             transform: scale(0);
//             animation: ripple-animation 0.6s linear;
//         }
        
//         @keyframes ripple-animation {
//             to {
//                 transform: scale(4);
//                 opacity: 0;
//             }
//         }
        
//         .class-card.expanded {
//             transform: scale(1.05) !important;
//             box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
//         }
//     `;
//     document.head.appendChild(style);
// }

// // Notification system
// function showNotification(message, type = 'info') {
//     const notification = document.getElementById('notification');
//     const colors = {
//         success: '#A1DE93',
//         error: '#FF6B6B',
//         info: '#6DC9FF',
//         warning: '#FFD166'
//     };

//     notification.textContent = message;
//     notification.style.backgroundColor = colors[type] || colors.info;
//     notification.classList.add('show');

//     // Auto hide after 5 seconds
//     setTimeout(() => {
//         notification.classList.remove('show');
//     }, 5000);
// }

// // Dynamic content loading
// function loadDynamicContent() {
//     // Simulate loading featured programs
//     setTimeout(() => {
//         const programs = [
//             {
//                 title: 'Summer Camp',
//                 description: 'Fun-filled summer activities for all ages',
//                 image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
//             },
//             {
//                 title: 'Art Studio',
//                 description: 'Creative expression through various art forms',
//                 image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80'
//             }
//         ];

//         programs.forEach(program => {
//             const programHTML = `
//                 <div class="class-card fade-in">
//                     <div class="class-img">
//                         <img src="${program.image}" alt="${program.title}">
//                     </div>
//                     <div class="class-content">
//                         <h3>${program.title}</h3>
//                         <p>${program.description}</p>
//                         <div class="class-meta">
//                             <span><i class="far fa-clock"></i> Flexible Hours</span>
//                             <span><i class="fas fa-users"></i> All Ages</span>
//                         </div>
//                     </div>
//                 </div>
//             `;
            
//             document.querySelector('.classes-grid').insertAdjacentHTML('beforeend', programHTML);
//         });
        
//         // Re-initialize animations for new elements
//         initAnimations();
//     }, 1000);
// }

// // Weather and time display
// function initWeatherTime() {
//     const updateTime = () => {
//         const now = new Date();
//         const timeString = now.toLocaleTimeString('en-US', { 
//             hour: '2-digit', 
//             minute: '2-digit',
//             hour12: true 
//         });
//         const dateString = now.toLocaleDateString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
        
//         // Update time display if element exists
//         const timeElement = document.getElementById('current-time');
//         if (timeElement) {
//             timeElement.textContent = `${timeString} • ${dateString}`;
//         }
//     };

//     // Update time immediately and every minute
//     updateTime();
//     setInterval(updateTime, 60000);

//     // Simulate weather data
//     const weatherConditions = ['☀️ Sunny', '🌧️ Rainy', '⛅ Partly Cloudy', '☁️ Cloudy'];
//     const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    
//     // Display weather if element exists
//     const weatherElement = document.getElementById('weather');
//     if (weatherElement) {
//         weatherElement.textContent = `Today: ${randomWeather}`;
//     }
// }

// // Initialize everything when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     initNavigation();
//     initScrollEffects();
//     initContactForm();
//     initCounters();
//     initAnimations();
//     initInteractiveElements();
//     loadDynamicContent();
//     initWeatherTime();
    
//     // Add keyboard navigation
//     document.addEventListener('keydown', function(e) {
//         if (e.key === 'Escape') {
//             // Close mobile menu if open
//             const nav = document.querySelector('nav');
//             if (nav.classList.contains('active')) {
//                 nav.classList.remove('active');
//                 document.querySelector('.mobile-menu-btn i').classList.remove('fa-times');
//                 document.querySelector('.mobile-menu-btn i').classList.add('fa-bars');
//             }
            
//             // Close any expanded cards
//             document.querySelectorAll('.class-card.expanded').forEach(card => {
//                 card.classList.remove('expanded');
//             });
//         }
//     });
// });

// // Performance optimization
// function optimizePerformance() {
//     // Lazy load images
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.remove('lazy');
//                 observer.unobserve(img);
//             }
//         });
//     });

//     document.querySelectorAll('img[data-src]').forEach(img => {
//         imageObserver.observe(img);
//     });

//     // Throttle scroll events
//     let scrollTimeout;
//     window.addEventListener('scroll', () => {
//         if (!scrollTimeout) {
//             scrollTimeout = setTimeout(() => {
//                 scrollTimeout = null;
//                 // Handle scroll actions here
//             }, 100);
//         }
//     });
// }

// // Export functions for potential module use
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = {
//         initNavigation,
//         initScrollEffects,
//         initContactForm,
//         initCounters,
//         initAnimations,
//         initInteractiveElements,
//         showNotification,
//         loadDynamicContent,
//         initWeatherTime,
//         optimizePerformance
//     };
// }