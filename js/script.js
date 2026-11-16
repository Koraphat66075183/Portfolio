document.addEventListener("DOMContentLoaded", function() {
    // ใช้ Intersection Observer เพื่อตรวจจับการมองเห็นของ element
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // ถ้าเลื่อนลงมาเห็น element นั้นแล้ว ให้เพิ่มคลาส 'appear'
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, {
        threshold: 0.1 // ให้เห็นอย่างน้อย 10% ของกล่องถึงจะแสดงผล
    });

    // ค้นหาทุก element ที่มีคลาส .fade-in แล้วจับตาดู
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});