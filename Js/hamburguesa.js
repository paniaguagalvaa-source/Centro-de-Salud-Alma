    const btn = document.getElementById('menu-hamburguesa');
    const nav = document.getElementById('nav-menu');

    btn.addEventListener('click', () => {
        nav.classList.toggle('activo');
        btn.classList.toggle('abrir'); 
    });
