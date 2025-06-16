let navbar_box=document.querySelector('.bar-box')
navbar_box.forEach(item => {
  navbar_box.addEventListener('mouseover', () => {
    navbar_box.forEach(i => i.classList.remove('hover')); // Remove active from all
    item.classList.add('active'); // Add active to clicked
  });
});