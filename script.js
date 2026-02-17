function liveExaCalc() {
    const rate = 10;
    const usdt = document.getElementById('usdtFill').value;
    const result = usdt * rate;
    document.getElementById('exaResult').value = result + " EXA";
}

const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

function toggleSubmenu(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle('open');
}

function setupChart(id, color, type='line') {
    const ctx = document.getElementById(id).getContext('2d');
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

// Charts Initialize
setupChart('chart1', '#00ffcc'); 
setupChart('chart2', '#ff00ff', 'bar'); 
setupChart('chart3', '#f1c40f'); 
setupChart('chart4', '#00d2ff');