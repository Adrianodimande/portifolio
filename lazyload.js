const lazyLoading=()=>{
    const listElements=document.querySelectorAll('[data]');

    listElements.forEach((element)=>{
        if(element.getBoundingClientRect().top <window.innerHeight){
            element.src=element.getAttribute('data');
            element.removeAttribute('data');
        }
    })
}

// window.onload=()=>{
//     lazyLoading()
// }

window.onscroll=()=>{
    lazyLoading()
}