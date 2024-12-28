document.addEventListener('scroll', () => {
    const firstSection = document.querySelector('.guidance_File');
    const scrollIconContainer = document.querySelector('.div_icon');

    
    const sectionBottom = firstSection.getBoundingClientRect().bottom;

    if (sectionBottom < 0) {
       
        scrollIconContainer.classList.add('visible');
    } else {
        
        scrollIconContainer.classList.remove('visible');
    }
});

const scrollIconContainer = document.querySelector('.div_icon');
scrollIconContainer.addEventListener('click', () => {
    const firstSection = document.querySelector('.guidance_File');
    firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


