// more-history

const moreHistoryBtn = document.querySelector('#more-history')
const history = document.querySelector('.more-history')
if (moreHistoryBtn) {
    console.log(moreHistoryBtn);
    moreHistoryBtn.addEventListener('click', function(){
        console.log('a');
        history.style.display = 'block'
    }, {passive: true})
} 


const typeElsCatalog = document.querySelectorAll('.type-el')
if (typeElsCatalog){
    typeElsCatalog.forEach(typeEL => {
    const line = typeEL.querySelector('.type-el-line')
    typeEL.addEventListener('mouseenter', function(){
        line.style.animationName = 'fadeInLine'
        line.style.display = 'block'
        line.style.width = '10rem'
    })
    typeEL.addEventListener('mouseleave', function(){
        line.style.animationName = 'fadeOutLine'
        setTimeout(() => {
            line.style.display = 'none'
        }, 200)
        
    })
});
}

//small-menu
const menuOpen = document.querySelector('#small-menu-open')
const smallMenu = document.querySelector('.small-menu')
const menuClose = document.querySelector('#small-menu-close')
const smallMenuWrap = document.querySelector('.small-menu-wrap')
const welcome = document.querySelector('.welcome')
const typesCatalog = document.querySelector('.types-catalog')
let typesCatalogA = []
if (typesCatalog){
    typesCatalogA = typesCatalog.querySelectorAll('a')
}

menuOpen.addEventListener('click', function(){
    smallMenuWrap.style.display = 'block'
    welcome.style.zIndex = '-1'
    typesCatalogA.forEach(el => {
        el.style.zIndex = '-1'
    })
    setTimeout(() => {
        smallMenu.style.right = '0'
        smallMenu.classList.add('animate_animated', 'animate_fadeInRight')
    }, 0)
    document.body.style.overflowY = 'hidden';
    document.body.style.position = 'fixed';
})
menuClose.addEventListener('click', function(){
    smallMenu.style.right = '-23rem'
    document.body.style.overflowY = 'scroll';
    document.body.style.position = 'static';
    smallMenu.classList.add('animate_animated', 'animate_fadeOutRight')
    setTimeout(() => {
        smallMenuWrap.style.display = 'none'
        welcome.style.zIndex = '0'
        typesCatalogA.forEach(el => {
            el.style.zIndex = '0'
        })
    }, 400)
    
    
    
})


let timeout
const moreMenuBtn = document.querySelector('.more-menu-btn')
const moreMenu = document.querySelector('.more-menu')
let moreMenuFlag = false
moreMenuBtn.addEventListener('mouseenter', () => {
    moreMenu.style.display = 'block'
})
moreMenu.addEventListener('mouseenter', () => {
    moreMenuFlag = true
    moreMenu.style.display = 'block'
})
moreMenuBtn.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        if (!moreMenuFlag){
            moreMenu.style.display = 'none'  
            moreMenuFlag = false
        }
    }, 0)
})


moreMenu.addEventListener('mouseleave', () => {
    moreMenuFlag = false
    moreMenu.style.display = 'none'
})


//menu dropdown
const productDropdownBtn = document.querySelector('.menu-product-catalog')
const productDropdownMenu = document.querySelector('.product-dropdown-menu')
let menuFlag = false
productDropdownBtn.addEventListener('mouseenter', () => {
    productDropdownMenu.style.display = 'block'
})
productDropdownMenu.addEventListener('mouseenter', (e) => {
    menuFlag = true
    productDropdownMenu.style.display = 'block'  
})

productDropdownBtn.addEventListener('mouseleave', () => {
     timeout = setTimeout(() => {
        if (!menuFlag){
            productDropdownMenu.style.display = 'none'  
            menuFlag = false
        }
    }, 200)
})

productDropdownMenu.addEventListener('mouseleave', (e) => {
    productDropdownMenu.style.display = 'none'  
    menuFlag = false
    clearTimeout(timeout)
})

//language dropdown

const languageDropdownMenu = document.querySelector('.language-dropdown-menu')
const languageDropdownBtn = document.querySelector('#dropdownMenuButton')
let languageMenuFlag = false
languageDropdownBtn.addEventListener('mouseenter', () => {
    languageDropdownMenu.style.display = 'block'
})

languageDropdownMenu.addEventListener('mouseenter', () => {
    languageMenuFlag = true
    languageDropdownMenu.style.display = 'block'
    languageDropdownMenu.style.position = 'absolute'
})
languageDropdownMenu.addEventListener('mouseleave', () => {
    languageMenuFlag = false
    languageDropdownMenu.style.display = 'none'
})
languageDropdownBtn.addEventListener('focusout', () => {
    languageDropdownBtn.style.backgroundColor = '$blue'
})
languageDropdownBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!languageMenuFlag){
            languageMenuFlag = false
            languageDropdownMenu.style.display = 'none'
            languageDropdownBtn.style.color = '$bg-black'
        }
    }, 100)
    
})