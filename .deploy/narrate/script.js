// Initialize scripts once the DOM is fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // Mobile Navigation Drawer Logic
    // ============================================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuOverlay = document.getElementById('menu-overlay');

    /**
     * Closes the mobile navigation drawer
     * Removes active classes and restores body scrolling
     */
    function closeMenu() {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    if (menuOverlay) {
        // Clicking outside the menu panel closes the menu
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Close mobile menu whenever any navigation link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ============================================
    // Global Theme Toggle (Light / Dark Mode)
    // ============================================
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        if (isLight) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    });

    // ============================================
    // Navbar Scroll Behavior
    // ============================================
    // Adds a 'scrolled' class to the navbar when the user scrolls down,
    // which triggers the glassmorphism blur and padding changes in CSS.
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ============================================
    // Parallax Background Scrolling Logic
    // ============================================
    const grid = document.querySelector('.background-grid');
    const glow = document.querySelector('.radial-glow');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (grid) grid.style.transform = `translateY(${scrolled * 0.05}px)`;
        if (glow) glow.style.transform = `translate(-50%, ${scrolled * 0.15}px)`;
    });

    // ============================================
    // Intersection Observer Animations (Scroll Reveals)
    // ============================================
    // Observer options configuration
    const observerOptions = {
        root: null, // Viewport
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    // Enhanced Observer instance supporting stagger and directional reveals
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: unobserve after reveal
            }
        });
    }, observerOptions);

    // Apply the reveal observer to all configured items
    document.querySelectorAll('.animate-on-scroll, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .mask-reveal').forEach(el => {
        scrollObserver.observe(el);
    });

    // ============================================
    // Numbers Counter Animation Logic (Stats Section)
    // ============================================
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseInt(target.getAttribute('data-target'));
                animateValue(target, 0, endVal, 2000);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-num').forEach(el => statsObserver.observe(el));

    /**
     * Animates a numerical value smoothly from a start number to an end number
     * @param {HTMLElement} obj - The DOM element holding the number
     * @param {number} start - Starting value
     * @param {number} end - Target value
     * @param {number} duration - Total animation time in milliseconds
     */
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease-out-quart logic for a smooth deceleration effect
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            obj.innerHTML = Math.floor(easeProgress * (end - start) + start);

            // Loop recursively if animation is not finished
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = end; // Snap exactly to terminal value
            }
        };
        window.requestAnimationFrame(step);
    }

    // ============================================
    // Flashlight Spot-Glow Hover Effect (Capabilities Grid)
    // ============================================
    // Dynamically tracking the mouse position to update radial gradient variables
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            // Calculate XY offset from element boundaries
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Push values up to CSS Variables for rendering
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ============================================
    // Hero Section Automated AI Chat Demo Simulation
    // ============================================

   // ── NARRATE FLOW DEMO ANIMATION ──
    async function runNarrateFlow() {
        function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

        function setStep(n) {
            for (let i = 1; i <= 4; i++) {
                const el = document.getElementById('fstep-' + i);
                if (!el) return;
                el.classList.remove('active', 'done');
                if (i < n) el.classList.add('done');
                else if (i === n) el.classList.add('active');
            }
        }

        function showPanel(n) {
            for (let i = 1; i <= 4; i++) {
                const p = document.getElementById('fpanel-' + i);
                if (p) p.classList.remove('active');
            }
            const active = document.getElementById('fpanel-' + n);
            if (active) active.classList.add('active');
        }

        function setStatus(text) {
            const el = document.getElementById('flowStatusText');
            if (el) el.textContent = text;
        }

        function fadeIn(id, delay = 0) {
            return new Promise(r => setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.style.opacity = '1';
                r();
            }, delay));
        }

        while (true) {
            // ── PANEL 1: Connect ──
            setStep(1); showPanel(1); setStatus('connecting to Qlik...');

            // Reset all
            ['ca-2','ca-3','connectReady'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.opacity = '0';
            });
            const prog = document.getElementById('connectProgress');
            if (prog) prog.style.width = '0%';
            const s1 = document.getElementById('ca-status-1');
            const s2 = document.getElementById('ca-status-2');
            const s3 = document.getElementById('ca-status-3');
            if (s1) { s1.textContent = 'Connecting...'; s1.className = 'app-status connecting'; }
            if (s2) { s2.textContent = 'Waiting...'; s2.className = 'app-status'; }
            if (s3) { s3.textContent = 'Waiting...'; s3.className = 'app-status'; }

            await sleep(600);
            if (prog) prog.style.width = '35%';
            await sleep(800);
            if (s1) { s1.textContent = '✓ Connected'; s1.className = 'app-status connected'; }

            await fadeIn('ca-2'); if (prog) prog.style.width = '65%';
            if (s2) { s2.textContent = 'Connecting...'; s2.className = 'app-status connecting'; }
            await sleep(700);
            if (s2) { s2.textContent = '✓ Connected'; s2.className = 'app-status connected'; }

            await fadeIn('ca-3'); if (prog) prog.style.width = '100%';
            if (s3) { s3.textContent = 'Connecting...'; s3.className = 'app-status connecting'; }
            await sleep(700);
            if (s3) { s3.textContent = '✓ Connected'; s3.className = 'app-status connected'; }

            await sleep(400);
            await fadeIn('connectReady');
            setStatus('3 apps connected · ready');
            await sleep(1200);

            // ── PANEL 2: Briefing ──
            setStep(2); showPanel(2); setStatus('generating morning briefing...');
            const bc1 = document.getElementById('bc-1');
            const bc2 = document.getElementById('bc-2');
            const bh = document.getElementById('briefingHint');
            if (bc1) bc1.style.opacity = '0';
            if (bc2) bc2.style.opacity = '0';
            if (bh) bh.style.opacity = '0';

            await sleep(500);
            if (bc1) bc1.style.opacity = '1';
            await sleep(600);
            if (bc2) bc2.style.opacity = '1';
            await sleep(500);
            if (bh) bh.style.opacity = '1';
            setStatus('briefing ready · 2 items');
            await sleep(2000);

            // ── PANEL 3: Insight Detail ──
            setStep(3); showPanel(3); setStatus('loading insight detail...');
            const qap = document.getElementById('insightQAPrompt');
            if (qap) qap.style.opacity = '0';
            await sleep(600);
            if (qap) qap.style.opacity = '1';
            setStatus('insight loaded · drill down available');
            await sleep(2000);

            // ── PANEL 4: Q&A ──
            setStep(4); showPanel(4); setStatus('q&a · ask follow-up...');
            const qq = document.getElementById('qa-q');
            const qa = document.getElementById('qa-a');
            if (qq) qq.style.opacity = '0';
            if (qa) qa.style.opacity = '0';

            await sleep(500);
            if (qq) qq.style.opacity = '1';
            await sleep(1200);
            if (qa) qa.style.opacity = '1';
            setStatus('answer ready · sourced from Qlik');
            await sleep(3500);
        }
    }

    if (document.getElementById('narrateFlowDemo')) {
        runNarrateFlow();
    }


    // ============================================
    // Sequential Step Highlighting (Solution)
    // ============================================
    // ── SOLUTION SECTION STEP + GRAPHIC SYNC ──
    const solStepEls = [
        document.getElementById('sol-step-1'),
        document.getElementById('sol-step-2'),
        document.getElementById('sol-step-3')
    ];
    const solStateEls = [
        document.getElementById('sol-state-1'),
        document.getElementById('sol-state-2'),
        document.getElementById('sol-state-3')
    ];

    let solCurrentStep = 0;
    let solInterval;

    function highlightSolStep(index) {
        solStepEls.forEach((el, i) => {
            if (!el) return;
            el.classList.remove('active-step');
            if (i === index) el.classList.add('active-step');
        });
        solStateEls.forEach((el, i) => {
            if (!el) return;
            el.classList.remove('active');
            if (i === index) el.classList.add('active');
        });
    }

    function startSolCycle() {
        solInterval = setInterval(() => {
            solCurrentStep = (solCurrentStep + 1) % 3;
            highlightSolStep(solCurrentStep);
        }, 3000);
    }

    if (solStepEls[0]) {
        highlightSolStep(0);
        startSolCycle();

        solStepEls.forEach((item, index) => {
            if (!item) return;
            item.addEventListener('mouseenter', () => {
                clearInterval(solInterval);
                highlightSolStep(index);
                solCurrentStep = index;
            });
            item.addEventListener('mouseleave', () => {
                startSolCycle();
            });
        });
    }

    // ============================================
    // Magnetic Card Attraction Effect (Capabilities)
    // ============================================
    const capabilityCards = document.querySelectorAll('.feature-card.glass-card');

    capabilityCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate magnetic pull (subtle displacement towards cursor)
            const moveX = (x - centerX) / 10;
            const moveY = (y - centerY) / 10;

            // Combine with 3D tilt
            const rotateX = -(y - centerY) / 12;
            const rotateY = (x - centerX) / 12;

            card.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });

    // ============================================
    // Neural Web Animation Engine (Modular)
    // ============================================
    function initNeuralWeb(canvasId, particleCount = 60) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 200 };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        canvas.parentElement.addEventListener('mousemove', handleMouseMove);
        canvas.parentElement.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1.5;
                this.density = (Math.random() * 30) + 1;
                this.speedX = (Math.random() * 2) - 1;
                this.speedY = (Math.random() * 2) - 1;
            }

            draw() {
                const isLight = document.body.classList.contains('light');
                ctx.fillStyle = isLight ? 'rgba(27, 117, 188, 0.4)' : 'rgba(27, 117, 188, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                if (mouse.x !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * this.density * 0.6;
                        this.y -= forceDirectionY * force * this.density * 0.6;
                    }
                }
            }
        }

        function init() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isLight = document.body.classList.contains('light');

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = (1 - (distance / 150)) * (isLight ? 0.25 : 0.5);
                        ctx.strokeStyle = `rgba(27, 117, 188, ${opacity})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', init);
        init();
        animate();
    }

    // Initialize Animations
    initNeuralWeb('heroCanvas', 120);
    initNeuralWeb('contactCanvas', 100);

    // ============================================
    // Contact Form 2.0 Submission Logic
    // ============================================
    const contactCardV2 = document.querySelector('.contact-card-v2');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm && formSuccess && contactCardV2) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.contact-submit-btn-v2');

            submitBtn.disabled = true;
            submitBtn.style.width = submitBtn.offsetWidth + 'px';
            submitBtn.innerHTML = `
                <svg class="spinner" width="24" height="24" viewBox="0 0 50 50" style="animation: rotate 2s linear infinite;">
                    <circle cx="25" cy="25" r="20" fill="white" stroke="white" stroke-width="5" stroke-dasharray="90, 150" stroke-linecap="round"></circle>
                </svg>
            `;

            setTimeout(() => {
                contactForm.style.opacity = '0';
                contactForm.style.transform = 'translateY(-20px) scale(0.95)';
                contactForm.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

                setTimeout(() => {
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'flex';
                    formSuccess.style.flexDirection = 'column';
                    formSuccess.style.alignItems = 'center';

                    // Trigger a "success blast" in the background glow if possible, 
                    // or just pulse the card
                    contactCardV2.style.borderColor = '#27c93f';
                    contactCardV2.style.boxShadow = '0 0 80px rgba(39, 201, 63, 0.3)';
                    contactCardV2.style.transition = 'all 0.8s ease';

                    contactForm.reset();
                }, 600);
            }, 2000);
        });
    }

    // 3D Tilt for V2 Card
    if (contactCardV2) {
        contactCardV2.addEventListener('mousemove', (e) => {
            const rect = contactCardV2.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            contactCardV2.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        contactCardV2.addEventListener('mouseleave', () => {
            contactCardV2.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
        });
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rotate { 100% { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);
});

document.getElementById("contactForm").addEventListener("submit", function (e) 
{
        e.preventDefault();

        // Get form values
        const fullName = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const company = document.getElementById("company").value;
        const message = document.getElementById("message").value;

        // Replace with your email
        const toEmail = "hello@aryabhat.ai";

        const subject = "Inquiry";

        const body =
            `Hi,

            I'm ${fullName} from ${company}.

            ${message}

            Email: ${email}`;

                    // Create mailto link
                    const mailtoLink =
            `mailto:${toEmail}?cc=${encodeURIComponent(email)}
            &subject=${encodeURIComponent(subject)}
            &body=${encodeURIComponent(body)}`;

                    // Open email app
                    window.location.href = mailtoLink;

                    // Show minimal success message
                    document.getElementById("formSuccess").style.display = "flex";
    });
