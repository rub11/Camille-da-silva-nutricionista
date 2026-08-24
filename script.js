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

// ===== LINKS LEGAIS (exibem modais ou redirecionam) =====



documentos.forEach(doc => {
    const el = document.getElementById(doc.id);
    if (el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            // Cria um modal simples (pode ser substituído por um modal mais elaborado)
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center;
                z-index: 9999; backdrop-filter: blur(4px);
            `;
            modal.innerHTML = `
                <div style="background: #fff; max-width: 560px; width: 90%; padding: 32px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); position: relative;">
                    <button style="position: absolute; top: 12px; right: 16px; background: none; border: none; font-size: 1.8rem; cursor: pointer; color: #24332C;">&times;</button>
                    <h2 style="color: #315C4A; margin-bottom: 16px;">${doc.titulo}</h2>
                    <p style="color: #2d3d34; line-height: 1.6;">${doc.conteudo}</p>
                    <p style="margin-top: 20px; font-size: 0.85rem; color: #5F806D;">Este aviso é parte integrante do site.</p>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector('button').addEventListener('click', () => modal.remove());
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
        });
    }
});