/**
 * Universal Force Justify Script
 * Menerapkan text-align: justify ke semua deskripsi
 * di halaman utama dan project pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Helper function untuk apply justify
    function applyJustify(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
            el.style.textAlign = 'justify';
            el.style.textJustify = 'inter-word';
            el.style.textAlignLast = 'left';
        });
    }
    
    // === HALAMAN UTAMA (index.html) ===
    applyJustify('.hero-desc');
    applyJustify('.about-text p');
    applyJustify('.skill-card p');
    applyJustify('.timeline-content p');
    applyJustify('.timeline-content li');
    applyJustify('.contact-desc');
    applyJustify('.section p');
    
    // === PROJECT PAGES ===
    applyJustify('.project-subtitle');
    applyJustify('.page-subtitle');
    applyJustify('.detail-section p');
    applyJustify('.detail-list li p');
    applyJustify('.result-card p');
    applyJustify('.vendor-card > p');
    applyJustify('.project-content p');
    
    console.log('Force Justify: Applied to all descriptions');
});
