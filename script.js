// 1. Live EXA Calculation
function liveExaCalc() {
    const rate = 10;
    const usdtInput = document.getElementById('usdtFill');
    const resultInput = document.getElementById('exaResult');
    
    // Check if elements exist before accessing value
    if (usdtInput && resultInput) {
        const usdt = usdtInput.value;
        const result = usdt * rate;
        resultInput.value = result + " EXA";
    }
}

// 2. Sidebar & Overlay Logic
// Isko DOMContentLoaded ke andar dala hai taaki header load hone ka wait kare
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    // Sidebar toggle button check
    if (e.target.closest('#toggleBtn')) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    
    // Overlay click to close
    if (e.target.closest('#overlay')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Navigation Fix: Force links to work even after fetch
    const navLink = e.target.closest('.nav-link');
    if (navLink && navLink.getAttribute('href') !== '#' && !navLink.hasAttribute('data-bs-toggle')) {
        window.location.href = navLink.getAttribute('href');
    }
});

// 3. Submenu Toggle
function toggleSubmenu(id) {
    const menu = document.getElementById(id);
    if (menu) {
        menu.classList.toggle('open');
    }
}

// 4. Chart Setup (With Error Handling)
function setupChart(id, color, type = 'line') {
    const canvas = document.getElementById(id);
    // Agar page par chart nahi hai (jaise profile page), toh function yahi ruk jayega
    if (!canvas) return; 

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: type,
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [{
                data: [10, 25, 15, 35, 20, 45, 30],
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

// 5. Initialize Charts (Safe Mode)
// Ye error nahi dega chahe page koi bhi ho
window.onload = function() {
    setupChart('chart1', '#00ffcc'); 
    setupChart('chart2', '#ff00ff', 'bar'); 
    setupChart('chart3', '#f1c40f'); 
    setupChart('chart4', '#00d2ff');
};
