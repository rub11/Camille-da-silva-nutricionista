// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-pergunta').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        const isOpen = item.classList.contains('open');

        // Fecha todos os outros
        document.querySelectorAll('.faq-item').forEach(el => {
            el.classList.remove('open');
            el.querySelector('.faq-pergunta').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            item.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
        }
    });
});

// ===== SCROLL SUAVE PARA ÂNCORAS (opcional, já com scroll-behavior no CSS) =====
// Adiciona um pequeno offset para o header fixo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== BOTÃO DE AGENDAMENTO (apenas exemplo) =====
document.querySelectorAll('.btn-primary, .btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.classList.contains('btn-whatsapp')) {
            // Redirecionar para WhatsApp (exemplo)
            // window.location.href = 'https://wa.me/5511999999999';
           
        } else {
           
        }
    });
});