/**
 * Force Justify Script
 * Memastikan semua subtitle dan paragraph di project detail page
 * menggunakan text-align: justify
 */

document.addEventListener('DOMContentLoaded', function() {
    // Force justify untuk subtitle di header
    const subtitles = document.querySelectorAll('.project-subtitle');
    subtitles.forEach(function(subtitle) {
        subtitle.style.textAlign = 'justify';
        subtitle.style.textJustify = 'inter-word';
        subtitle.style.textAlignLast = 'left';
    });
    
    // Force justify untuk semua paragraph di detail section
    const detailParagraphs = document.querySelectorAll('.detail-section p');
    detailParagraphs.forEach(function(p) {
        p.style.textAlign = 'justify';
        p.style.textJustify = 'inter-word';
    });
    
    // Force justify untuk paragraph di list items
    const listParagraphs = document.querySelectorAll('.detail-list li p');
    listParagraphs.forEach(function(p) {
        p.style.textAlign = 'justify';
        p.style.textJustify = 'inter-word';
    });
    
    // Force justify untuk paragraph di result cards
    const resultParagraphs = document.querySelectorAll('.result-card p');
    resultParagraphs.forEach(function(p) {
        p.style.textAlign = 'justify';
        p.style.textJustify = 'inter-word';
    });
    
    console.log('Force Justify: Applied to all project detail elements');
});
