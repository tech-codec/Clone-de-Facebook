const btn_next = document.querySelector(".carousel_next")

const btn_prev = document.querySelector(".carousel_prev")

const carousel = document.querySelector(".carousel")


let crurrent_index = 0

let is_mobile = false


const carousel_item_laptop_visible = 4


const carousel_item_mobile_visible = 3

const carousel_item_laptop_scrol = 4

const carousel_item_mobile_scrol = 3

let carousel_item_visible = ()=>{
    return is_mobile ? carousel_item_mobile_visible : carousel_item_laptop_visible
}


let carousel_item_scrol = ()=>{
    return is_mobile ? carousel_item_mobile_scrol : carousel_item_laptop_scrol
}


let width_carousel_carousel_item = ()=>{
    let ratio = carousel.children.length / carousel_item_visible()
    carousel.style.width = (100*ratio) +"%"
    let lits_children = [...carousel.children]
    lits_children.forEach(element=>{
        element.style.width = 100 / (carousel_item_visible() * ratio)+"%"
    })
}


let next = ()=>{
    scrol(crurrent_index + carousel_item_scrol())
}

let prev = ()=>{
    scrol(crurrent_index - carousel_item_scrol())
}


let scrol = (index)=>{
    if(index >= carousel.children.length || (carousel.children[crurrent_index+carousel_item_visible()]==undefined && index > crurrent_index )){
        index = 0
    }
    if(index <0){
        index = carousel.children.length - carousel_item_visible()
    }
    if(index == 0){
        btn_prev.classList.add("btn_hidden")
    }else{
        btn_prev.classList.remove("btn_hidden")
    }

    if(index === carousel.children.length - carousel_item_visible()){
        btn_next.classList.add("btn_hidden")
    }else{
        btn_next.classList.remove("btn_hidden")
    }
    let translate_x = index * (-100 / carousel.children.length)
    carousel.style.transform = 'translate3d(' + translate_x + "%, 0, 0"
    crurrent_index = index
}


let init_scrol = ()=>{
    if(crurrent_index == 0){
        btn_prev.classList.add("btn_hidden")
    }
}


window.addEventListener("keydown", e=>{
    if(e.key == "ArrowRight")
        next()
    if(e.key == "ArrowLeft")
        prev()
})

let rezise = ()=>{
    let resize = window.innerWidth <=1024
    if(resize !== is_mobile){
        is_mobile = resize
        width_carousel_carousel_item()
    }
}

/******  main **************/


carousel_item_visible()
width_carousel_carousel_item()
init_scrol()
window.addEventListener("resize", rezise)
btn_next.addEventListener("click", next)
btn_prev.addEventListener("click", prev)