// ========================================
// 1. LENIS SMOOTH SCROLL INITIALIZATION
// ========================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: 'vertical',
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ========================================
// 2. GSAP REGISTRATION
// ========================================
gsap.registerPlugin(ScrollTrigger);

// ========================================
// 3. HERO ANIMATIONS
// ========================================
const heroTitle = new SplitType('.animate-text', { types: 'lines, words' });

const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });

tlHero.from(".word", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.05,
    delay: 0.2
})
.to(".hero p", { opacity: 1, duration: 1, y: -20 }, "-=0.8")
.to(".badge-container", { opacity: 1, y: -10, duration: 0.8 }, "-=0.8")
.from(".btn", { y: 20, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.6");

// ========================================
// 4. SCROLL REVEALS
// ========================================

// Generic Reveal Up
gsap.utils.toArray('.reveal-up').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: { trigger: elem, start: "top 85%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
    });
});

// Left/Right Reveals
gsap.utils.toArray('.reveal-left').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: { trigger: elem, start: "top 85%" },
        x: -50, opacity: 0, duration: 1, ease: "power3.out"
    });
});

gsap.utils.toArray('.reveal-right').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: { trigger: elem, start: "top 85%" },
        x: 50, opacity: 0, duration: 1, ease: "power3.out"
    });
});
// ========================================
// 5. HOW IT WORKS - LINE DRAWING
// ========================================
gsap.to(".step-line-fill", {
    scrollTrigger: {
        trigger: ".steps-container",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 0.5
    },
    height: "100%",
    ease: "none"
});

// Step Markers activation
const steps = document.querySelectorAll('.step-row');
steps.forEach((step, i) => {
    ScrollTrigger.create({
        trigger: step,
        start: "top 60%",
        onEnter: () => step.classList.add('active'),
        onLeaveBack: () => step.classList.remove('active')
    });
});

// ========================================
// 6. SPOTLIGHT EFFECT ON CARDS
// ========================================
const cards = document.querySelectorAll('.spotlight-card, .card-wrapper');
document.addEventListener('mousemove', e => {
    for(const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
});

// ========================================
// 7. MAGNETIC BUTTONS
// ========================================
const magneticBtns = document.querySelectorAll('.magnetic-btn');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { duration: 0.3, x: x * 0.3, y: y * 0.3, ease: "power2.out" });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { duration: 0.3, x: 0, y: 0, ease: "power2.out" });
    });
});

// ========================================
// 8. FAQ LOGIC
// ========================================
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        const answer = item.querySelector('.faq-answer');
        
        // Close others
        document.querySelectorAll('.faq-item.active').forEach(act => {
            if(act !== item) {
                act.classList.remove('active');
                gsap.to(act.querySelector('.faq-answer'), { height: 0, duration: 0.3 });
            }
        });

        item.classList.toggle('active');
        if(item.classList.contains('active')) {
            gsap.to(answer, { height: "auto", duration: 0.3 });
        } else {
            gsap.to(answer, { height: 0, duration: 0.3 });
        }
    });
});

// ========================================
// 9. CANVAS BACKGROUND (NEURAL NET)
// ========================================
const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');
let width, height, particles;

function initCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    particles = [];
    const count = Math.floor(width * height / 25000); 
    for(let i=0; i<count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 1.5 + 0.5
        });
    }
}

function animateCanvas() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(59, 130, 246, 0.3)'; 
    
    particles.forEach((p, index) => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > width) p.vx *= -1;
        if(p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fill();

        // Connections
        for(let j=index+1; j<particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if(dist < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist/120)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animateCanvas);
}

window.addEventListener('resize', initCanvas);
initCanvas();
animateCanvas();

// ========================================
// 10. TYPING ANIMATION HELPER (HTML-AWARE)
// ========================================
function typeWriterHTML(element, htmlContent, speed = 20) {
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // Extract text content only for typing
    const textContent = tempDiv.textContent || tempDiv.innerText;
    
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < textContent.length) {
            element.textContent += textContent.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // After typing is complete, replace with full HTML
            element.innerHTML = htmlContent;
        }
    }
    type();
}

// ========================================
// 11. INDUSTRY CHAT SCENARIOS
// ========================================
const chatScenarios = {
    finance: [
        { type: 'user', text: 'What were our Q3 revenue figures for APAC?' },
        { 
            type: 'ai', 
            text: 'Q3 Revenue for APAC was <strong>$4.2M</strong>, a <span style="color: #22c55e;">15% increase</span> YoY.', 
            hasData: true, 
            data: [
                { k: 'Singapore', v: '$1.8M' },
                { k: 'Japan', v: '$1.4M' },
                { k: 'India', v: '$1.0M' }
            ]
        }
    ],
    healthcare: [
        { type: 'user', text: 'Show protocol for Type 2 Diabetes intake.' },
        { 
            type: 'ai', 
            text: 'Standard protocol requires immediate <strong>HgbA1c test</strong> followed by <em>Metformin initiation</em> if levels > 7.5%.' 
        }
    ],
    manufacturing: [
        { type: 'user', text: 'Machine A-12 is throwing Error 504.' },
        { 
            type: 'ai', 
            text: '<strong style="color: #ef4444;">Error 504</strong> indicates Hydraulic Pressure Loss. Check the main seal on <strong>Valve B</strong>. See maintenance manual page 47.' 
        }
    ],
    legal: [
        { type: 'user', text: 'List contracts expiring in the next 30 days.' },
        { 
            type: 'ai', 
            text: 'Found <strong>3 contracts</strong> expiring soon:', 
            hasData: true, 
            data: [
                { k: 'Vendor X', v: 'Feb 12, 2026' },
                { k: 'Logistics Co', v: 'Feb 18, 2026' }
            ]
        }
    ]
};

let currentScenario = '';
let currentIndustryTitle = '';

function getIndustryTitle(key) {
    const titles = {
        'finance': 'Finance',
        'healthcare': 'Healthcare',
        'manufacturing': 'Manufacturing',
        'legal': 'Legal'
    };
    return titles[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

function playChatAnimation(key) {
    console.log('=== PLAY CHAT ANIMATION ===');
    console.log('Animation key:', key);
    
    const container = document.getElementById('dynamic-chat-body');
    const modelElement = document.querySelector('.tag-model .model');
    
    console.log('Container found:', !!container);
    console.log('Model element found:', !!modelElement);
    
    if (!container || !modelElement) {
        console.error('Missing required elements!');
        return;
    }
    
    // Update the Title/Tag
    const title = getIndustryTitle(key);
    console.log('Industry title:', title);
    console.log('Current industry title:', currentIndustryTitle);
    
    if (currentIndustryTitle !== title) {
        currentIndustryTitle = title;
        modelElement.innerText = currentIndustryTitle;
        console.log('✓ Updated title to:', title);
    }

    if (currentScenario === key) {
        console.log('⊘ Scenario already active, skipping');
        return;
    }

    console.log('▶ Starting new scenario:', key);
    currentScenario = key;
    container.innerHTML = '';
    const messages = chatScenarios[key];
    
    console.log('Messages to display:', messages.length);
    
    let delay = 0;
    messages.forEach((msg, msgIndex) => {
        console.log(`Scheduling message ${msgIndex}:`, msg.type, 'delay:', delay);
        setTimeout(() => {
            console.log(`Displaying message ${msgIndex}`);
            const row = document.createElement('div');
            row.className = `msg-row ${msg.type === 'user' ? 'user' : 'ai'}`;
            
            const avatar = document.createElement('div');
            avatar.className = `avatar ${msg.type === 'user' ? 'u' : 'ai'}`;

            if(msg.type === 'user') {
                avatar.innerText = 'U';
            } else {
                const logoImg = document.createElement('img');
                logoImg.src = 'logo.png';
                logoImg.alt = 'Aryabhat';
                logoImg.style.cssText = 'width: 65%; height: 65%; object-fit: contain; filter: invert(1)';
                avatar.appendChild(logoImg);
            }
            
            const bubble = document.createElement('div');
            bubble.className = 'msg-bubble';
            
            if (msg.type === 'user') {
                bubble.innerHTML = msg.text;
            } else {
                typeWriterHTML(bubble, msg.text, 15);
            }

            if(msg.hasData) {
                const card = document.createElement('div');
                card.className = 'data-card';
                msg.data.forEach(d => {
                    const dRow = document.createElement('div');
                    dRow.className = 'data-row';
                    dRow.innerHTML = `<span>${d.k}</span><span>${d.v}</span>`;
                    card.appendChild(dRow);
                });
                
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = msg.text;
                const textLength = (tempDiv.textContent || tempDiv.innerText).length;
                
                setTimeout(() => {
                    bubble.appendChild(card);
                    console.log('✓ Data card appended to message');
                }, textLength * 15 + 100);
            }

            row.appendChild(avatar);
            row.appendChild(bubble);
            container.appendChild(row);

            setTimeout(() => {
                row.classList.add('show');
                console.log('✓ Message shown');
            }, 50);
        }, delay);
        delay += (msg.type === 'user' ? 500 : 1800);
    });
}

// ========================================
// 12. INDUSTRY SCROLL SPY
// ========================================
const industryBlocks = document.querySelectorAll('.industry-info-block');
const scrollSpy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            industryBlocks.forEach(b => b.classList.remove('active'));
            entry.target.classList.add('active');
            
            const scenarioKey = entry.target.getAttribute('data-id');
            if(currentScenario !== scenarioKey) {
                playChatAnimation(scenarioKey);
            }
        }
    });
}, { threshold: 0.5 });

industryBlocks.forEach(block => scrollSpy.observe(block));

// ========================================
// 13. TESTIMONIAL CAROUSEL
// ========================================
let testimonialIndex = 0;
let testimonialInterval;
let isPaused = false;

function initTestimonials() {
    const track = document.getElementById('testimonial-track');
    const cards = track.querySelectorAll('.review-v-card');
    const dotsContainer = document.getElementById('testimonial-dots');
    const pauseBtn = document.getElementById('pauseTestimonial');
    
    if(!track || cards.length === 0) return;
    
    // Create dots
    cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if(i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(i));
        dotsContainer.appendChild(dot);
    });
    
    function startAutoScroll() {
        if (testimonialInterval) clearInterval(testimonialInterval);
        console.log("Testimonial Auto-Scroll: Starting new interval.");
        testimonialInterval = setInterval(() => {
            if(!isPaused) {
                testimonialIndex = (testimonialIndex + 1) % cards.length;
                updateTestimonial();
            }
        }, 5000);
    }
    
    function updateTestimonial() {
        console.log(`Testimonial Update: Index ${testimonialIndex}`);
        const cardWidth = cards[0].offsetWidth;
        console.log(`Card Width: ${cardWidth}`);
        const gap = 30;
        const offset = -testimonialIndex * (cardWidth + gap);
        track.style.transform = `translateX(${offset}px)`;
        
        document.querySelectorAll('.testimonial-dots .dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === testimonialIndex);
        });
    }
    
    function goToTestimonial(index) {
        testimonialIndex = index;
        updateTestimonial();
        if (!isPaused) startAutoScroll(); 
        
    }
    
    document.getElementById('prevTestimonial').addEventListener('click', () => {
        testimonialIndex = (testimonialIndex - 1 + cards.length) % cards.length;
        updateTestimonial();
        if (!isPaused) startAutoScroll();

    });
    
    document.getElementById('nextTestimonial').addEventListener('click', () => {
        testimonialIndex = (testimonialIndex + 1) % cards.length;
        updateTestimonial();
        if (!isPaused) startAutoScroll();
    });
    
    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseBtn.querySelector('i').className = isPaused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
        if (!isPaused) {
            startAutoScroll();
        } else {
            clearInterval(testimonialInterval);
        }
    });
    
        window.addEventListener('resize', () => {
        updateTestimonial(); 
        if (!isPaused) startAutoScroll(); 
    });
    
    startAutoScroll();


    document.addEventListener('keydown', (e) => {
        if (isPaused) return; 

        if (e.key === "ArrowLeft") {
            e.preventDefault();
            testimonialIndex = (testimonialIndex - 1 + cards.length) % cards.length;
            goToTestimonial(testimonialIndex); 
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            testimonialIndex = (testimonialIndex + 1) % cards.length;
            goToTestimonial(testimonialIndex);
            
        }
    });
}

// ========================================
// 14. INITIALIZATION ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial industry title
    currentIndustryTitle = getIndustryTitle('finance');
    const initialModelElement = document.querySelector('.tag-model .model');
    if(initialModelElement) {
        initialModelElement.innerText = currentIndustryTitle;
    }
    
    // Run first chat animation
    playChatAnimation('finance');
    
    // Initialize testimonials
    // initTestimonials();
});