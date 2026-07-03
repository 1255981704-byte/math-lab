// --- ignite-ui.js 全局交互脚本 ---
function toggleSidebar() {
    const panel = document.getElementById('navPanel');
    const overlay = document.getElementById('sidebarOverlay');
    const btn = document.getElementById('sidebarToggleBtn');
    
    panel.classList.toggle('open');
    overlay.classList.toggle('active');
    btn.classList.toggle('hidden');
}

function switchView(viewId, btn) {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    document.querySelectorAll('.stark-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('view-' + viewId).classList.add('active');

    const bodyEl = document.querySelector('.view-body');
    if (viewId === 'assign' || viewId === 'quiz' || viewId === 'lab'|| viewId === 'notes') {
        bodyEl.classList.add('focus-mode');
    } else {
        bodyEl.classList.remove('focus-mode');
    }
}

function toggleUnit(btn) {
    const isActive = btn.classList.contains('active');
    document.querySelectorAll('.nav-unit-btn').forEach(b => {
        b.classList.remove('active');
        const menu = b.querySelector('.nav-sub-menu');
        if(menu) menu.style.display = 'none';
    });
    if (!isActive) {
        btn.classList.add('active');
        const menu = btn.querySelector('.nav-sub-menu');
        if(menu) menu.style.display = 'block';
    }
}

function loadPage(pageId) {
    event.stopPropagation();
    // 假设当前页面的 URL 包含 pageId，则只收起菜单
    if(window.location.href.includes(pageId)) {
        toggleSidebar(); 
        return; 
    }
    console.log("Loading: " + pageId);
    window.location.href = pageId + ".html";
}
