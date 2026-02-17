/**
 * EXA COIN - Master Script
 * Sabhi pages ko link aur control karne ke liye
 */

// 1. Live EXA Calculation (For Buy Modal)
function liveExaCalc() {
    const rate = 10;
    const usdtInput = document.getElementById('usdtFill');
    const resultInput = document.getElementById('exaResult');
    
    if (usdtInput && resultInput) {
        const usdt = usdtInput.value;
        const result = usdt * rate;
        resultInput.value = result + " EXA";
    }
}

// 2. Global Event Listener for Clicks
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    // Sidebar toggle control
    if (e.target.closest('#toggleBtn')) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    
    // Overlay click to close sidebar
    if (e.target.closest('#overlay')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Navigation Link Fix
    // Taaki fetch hone ke baad bhi links properly kaam karein
    const navLink = e.target.closest('.nav-link');
    if (navLink) {
        const href = navLink.getAttribute('href');
        if (href && href !== '#' && !navLink.hasAttribute('data-bs-toggle')) {
            window.location.href = href;
        }
    }
});

// 3. Submenu Toggle
function toggleSubmenu(id) {
    const menu = document.getElementById(id);
    if (menu) {
        // Baaki sabhi menus ko band karne ke liye (Optional)
        // document.querySelectorAll('.has-submenu').forEach(m => m.id !== id && m.classList.remove('open'));
        menu.classList.toggle('open');
    }
}

// 4. Highlight Active Page in Sidebar
// Ye function header load hone ke baad har page par chalega
function activateCurrentMenu() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            // Link ko blue highlight karein
            link.classList.add('active');
            
            // Agar link submenu ke andar hai (like Profile or History), toh parent menu khol dein
            const parentSubmenu = link.closest('.has-submenu');
            if (parentSubmenu) {
                parentSubmenu.classList.add('open');
            }
        }
    });
}

// 5. Chart Setup System (Safe Mode)
function setupChart(id, color, type = 'line') {
    const canvas = document.getElementById(id);
    if (!canvas) return; 

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: type,
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [{
                data: [12, 19, 13, 25, 20, 35, 28],
                borderColor: color,
                backgroundColor: color + '33',
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { display: false }, y: { display: false } }
        }
    });
}

// 6. Initialization on Page Load
window.addEventListener('load', function() {
    // Dashboard charts init
    setupChart('chart1', '#00ffcc'); 
    setupChart('chart2', '#ff00ff', 'bar'); 
    setupChart('chart3', '#f1c40f'); 
    setupChart('chart4', '#00d2ff');
    
    // Check for active menu after a short delay (taaki fetch complete ho jaye)
    setTimeout(activateCurrentMenu, 200);
});
