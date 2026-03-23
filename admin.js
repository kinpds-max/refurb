// Admin Dashboard Interactivity

// 1. Initialize Sales Chart
const ctx = document.getElementById('salesChart');
if (ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['월', '화', '수', '목', '금', '토', '일'],
            datasets: [{
                label: '일별 매출 (만원)',
                data: [65, 59, 80, 81, 56, 120, 140],
                fill: true,
                borderColor: '#00BFA5',
                backgroundColor: 'rgba(0, 191, 165, 0.1)',
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#00BFA5'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// 2. Modal Controls
const modal = document.getElementById('productModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close-modal');

if (openBtn) {
    openBtn.onclick = () => modal.style.display = 'block';
}

if (closeBtn) {
    closeBtn.onclick = () => modal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// 3. Add Product Mock Logic
const addProdForm = document.getElementById('addProductForm');
const prodList = document.getElementById('adminProductList');

if (addProdForm) {
    addProdForm.onsubmit = (e) => {
        e.preventDefault();

        const category = document.getElementById('prodCategory').value;
        const grade = document.getElementById('prodGrade').value;
        const name = document.getElementById('prodName').value;
        const price = document.getElementById('prodPrice').value;
        const stock = document.getElementById('prodStock').value;

        if (!name || !price || !stock) {
            alert('모든 필드를 입력해주세요!');
            return;
        }

        // Create new row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><div class="table-img"><img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=50" alt=""></div></td>
            <td><span class="badge-${grade.toLowerCase()}">${grade}-Grade</span></td>
            <td>${name}</td>
            <td>${stock}개</td>
            <td>₩${Number(price).toLocaleString()}</td>
            <td><span class="toggle active">판매중</span></td>
            <td>
                <button class="btn-icon"><i data-lucide="edit-2"></i></button>
                <button class="btn-icon delete"><i data-lucide="trash-2"></i></button>
            </td>
        `;

        prodList.prepend(row);

        // Refresh icons for new row
        if (window.lucide) {
            lucide.createIcons();
        }

        // Close modal and reset form
        modal.style.display = 'none';
        addProdForm.reset();

        alert('신규 상품이 등록되었습니다.');
    };
}

// 4. Delete Row Mock
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-icon.delete')) {
        if (confirm('이 상품을 삭제하시겠습니까?')) {
            e.target.closest('tr').remove();
        }
    }
});

// 5. Sidebar Navigation Effect
const sideLinks = document.querySelectorAll('.sidebar-nav ul li');
sideLinks.forEach(item => {
    item.onclick = () => {
        sideLinks.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    };
});
