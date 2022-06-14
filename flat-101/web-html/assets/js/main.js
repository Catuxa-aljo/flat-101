document.addEventListener("DOMContentLoaded", (event) => {

     
    document.querySelectorAll('.results__like').forEach(like => {
     like.addEventListener('click', () => {     
        like.querySelectorAll('.like').forEach(heart => {
        heart.classList.toggle('invisible')
      })
      })
     });

     document.querySelectorAll('.filter').forEach(filter => {
        filter.addEventListener('click', () => {     
        filter.classList.toggle('main-nav-active');
      })
    })
  })

  
  
  
  window.onload = () => {
  
  }