// ==================================================
// PsyConf 2026 - Floating Navigation Menu
// Simpan file ini sebagai nav-menu.js dan panggil dengan <script src="nav-menu.js"></script>
// ==================================================

(function() {
    'use strict';

    // Konfigurasi menu - sesuaikan path sesuai struktur folder Anda
    const menuItems = [
        { 
            name: 'Landing Page', 
            icon: 'home', 
            url: 'index.html',
            color: '#9B7B9C'
        },
        { 
            name: 'Registrasi', 
            icon: 'how_to_reg', 
            url: 'regispem.html',
            color: '#9B7B9C'
        },
        { 
            name: 'Autentikasi', 
            icon: 'lock', 
            url: 'autent.html',
            color: '#9B7B9C'
        },
        { 
            name: 'Submission', 
            icon: 'edit_note', 
            url: 'submisson.html',
            color: '#9B7B9C'
        },
        { 
            name: 'Review', 
            icon: 'rate_review', 
            url: 'review.html',
            color: '#9B7B9C'
        },
        { 
            name: 'Dashboard Admin', 
            icon: 'dashboard', 
            url: 'dashadmin.html',
            color: '#9B7B9C'
        },
        { 
            name: 'Dashboard Admin 2', 
            icon: 'admin_panel_settings', 
            url: 'dashadmin2.html',
            color: '#9B7B9C'
        },
        { 
            name: 'Fitur Simulasi', 
            icon: 'science', 
            url: 'fitursim.html',
            color: '#9B7B9C'
        }
    ];

    // CSS Styles untuk floating menu
    const styles = `
        .psyconf-floating-menu * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .psyconf-floating-menu {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .psyconf-menu-toggle {
            width: 56px;
            height: 56px;
            border-radius: 28px;
            background: linear-gradient(135deg, #9B7B9C 0%, #7E5F7F 100%);
            border: none;
            box-shadow: 0 4px 20px rgba(155, 123, 156, 0.4);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            color: white;
        }
        
        .psyconf-menu-toggle:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 24px rgba(155, 123, 156, 0.5);
        }
        
        .psyconf-menu-toggle .material-icons {
            font-size: 28px;
            transition: transform 0.3s ease;
        }
        
        .psyconf-menu-toggle.active .material-icons {
            transform: rotate(45deg);
        }
        
        .psyconf-menu-panel {
            position: absolute;
            bottom: 70px;
            right: 0;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(155, 123, 156, 0.1);
            padding: 12px 8px;
            min-width: 200px;
            max-width: 280px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease;
        }
        
        .psyconf-menu-panel.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .psyconf-menu-header {
            padding: 8px 12px 12px 12px;
            border-bottom: 1px solid #F3ECF4;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .psyconf-menu-header .material-icons {
            color: #9B7B9C;
            font-size: 20px;
        }
        
        .psyconf-menu-header span {
            font-weight: 600;
            font-size: 14px;
            color: #5E3F5F;
        }
        
        .psyconf-menu-items {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        
        .psyconf-menu-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            border-radius: 10px;
            text-decoration: none;
            color: #4a4a4a;
            font-size: 14px;
            font-weight: 500;
            transition: background-color 0.15s ease;
            cursor: pointer;
            border: none;
            background: transparent;
            width: 100%;
            text-align: left;
        }
        
        .psyconf-menu-item:hover {
            background-color: #F3ECF4;
        }
        
        .psyconf-menu-item .material-icons {
            font-size: 22px;
            width: 24px;
            text-align: center;
        }
        
        .psyconf-menu-item .item-name {
            flex: 1;
        }
        
        .psyconf-menu-item .item-badge {
            font-size: 10px;
            color: #9B7B9C;
            opacity: 0.7;
        }
        
        .psyconf-current-page-indicator {
            background-color: #EDE1EE;
        }
        
        .psyconf-current-page-indicator .material-icons {
            color: #7E5F7F;
        }
        
        .psyconf-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: transparent;
            z-index: 9998;
            display: none;
        }
        
        .psyconf-backdrop.active {
            display: block;
        }
        
        /* Responsive */
        @media (max-width: 640px) {
            .psyconf-floating-menu {
                bottom: 16px;
                right: 16px;
            }
            .psyconf-menu-toggle {
                width: 50px;
                height: 50px;
            }
            .psyconf-menu-panel {
                min-width: 180px;
                bottom: 64px;
            }
        }
    `;

    // Deteksi halaman saat ini
    function getCurrentPage() {
        const path = window.location.pathname;
        const fileName = path.split('/').pop() || 'index.html';
        return fileName;
    }

    // Buat element style
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    // Cek apakah Material Icons sudah ada
    if (!document.querySelector('link[href*="material-icons"]')) {
        const iconLink = document.createElement('link');
        iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
        iconLink.rel = 'stylesheet';
        document.head.appendChild(iconLink);
    }

    // Cek font Inter
    if (!document.querySelector('link[href*="Inter"]')) {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
    }

    // Buat struktur menu
    const menuContainer = document.createElement('div');
    menuContainer.className = 'psyconf-floating-menu';
    
    const currentPage = getCurrentPage();
    
    menuContainer.innerHTML = `
        <button class="psyconf-menu-toggle" id="psyconfMenuToggle" aria-label="Menu Navigasi">
            <span class="material-icons">menu</span>
        </button>
        <div class="psyconf-menu-panel" id="psyconfMenuPanel">
            <div class="psyconf-menu-header">
                <span class="material-icons">psychology_alt</span>
                <span>PsyConf 2026</span>
            </div>
            <div class="psyconf-menu-items" id="psyconfMenuItems"></div>
        </div>
    `;
    
    document.body.appendChild(menuContainer);

    // Backdrop untuk menutup menu saat klik di luar
    const backdrop = document.createElement('div');
    backdrop.className = 'psyconf-backdrop';
    document.body.appendChild(backdrop);

    // Isi menu items
    const menuItemsContainer = document.getElementById('psyconfMenuItems');
    
    menuItems.forEach(item => {
        const isCurrentPage = currentPage === item.url || 
                             (currentPage === '' && item.url === 'index.html') ||
                             currentPage.includes(item.url.replace('.html', ''));
        
        const menuItem = document.createElement('a');
        menuItem.className = 'psyconf-menu-item' + (isCurrentPage ? ' psyconf-current-page-indicator' : '');
        menuItem.href = item.url;
        menuItem.setAttribute('data-url', item.url);
        
        menuItem.innerHTML = `
            <span class="material-icons" style="color: ${item.color}">${item.icon}</span>
            <span class="item-name">${item.name}</span>
            ${isCurrentPage ? '<span class="item-badge">aktif</span>' : ''}
        `;
        
        menuItem.addEventListener('click', function(e) {
            // Navigasi normal - tidak perlu preventDefault
            closeMenu();
        });
        
        menuItemsContainer.appendChild(menuItem);
    });

    // Toggle menu
    const toggleBtn = document.getElementById('psyconfMenuToggle');
    const panel = document.getElementById('psyconfMenuPanel');
    
    function openMenu() {
        panel.classList.add('active');
        toggleBtn.classList.add('active');
        backdrop.classList.add('active');
        toggleBtn.querySelector('.material-icons').textContent = 'close';
    }
    
    function closeMenu() {
        panel.classList.remove('active');
        toggleBtn.classList.remove('active');
        backdrop.classList.remove('active');
        toggleBtn.querySelector('.material-icons').textContent = 'menu';
    }
    
    toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (panel.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    backdrop.addEventListener('click', closeMenu);
    
    // Tutup menu dengan tombol ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && panel.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Tutup menu saat klik di luar (fallback)
    document.addEventListener('click', function(e) {
        if (!menuContainer.contains(e.target) && panel.classList.contains('active')) {
            closeMenu();
        }
    });

    // Ekspos ke global untuk debugging (opsional)
    window.PsyConfMenu = {
        open: openMenu,
        close: closeMenu,
        toggle: () => panel.classList.contains('active') ? closeMenu() : openMenu()
    };

    console.log('PsyConf Navigation Menu loaded - current page:', currentPage);
})();