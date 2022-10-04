document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.nav__trigger').addEventListener('click',triggerNav);



});

function triggerNav(ev){
    ev.preventDefault;
    let nav=document.querySelector('.nav__list');
    let icon=document.querySelector('#trigger');
    nav.classList.toggle('show');
    let isMobileMenu=nav.classList.contains('show');
    if(isMobileMenu){
        icon.className='fas fa-times' 
    }else{
        icon.className='fa fa-bars';
       
    };
    toggleArrows(nav); 
}

function toggleArrows(nav){
    let arrows=document.querySelectorAll('.dropdown-content__link--arrow');
    arrows.forEach((arrow)=>{
        if(nav.classList.contains('show')){
            arrow.className='fas fa-angle-down nav__link--arrow dropdown-content__link--arrow';
        }else{
            arrow.className='fa fa-angle-right nav__link--arrow dropdown-content__link--arrow';
            
        }

    })
}

function change(dropdown){
    let parent=dropdown.parentElement;   //parent of the i which is a
    parent.nextElementSibling.classList.toggle('show'); //  ul which is the dropdown
    dropdown.classList.toggle('fa-angle-up');
}
