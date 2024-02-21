const all_btn_show = document.querySelectorAll(".btn_show")

let modal =null


let open_modal = (e)=>{
    e.preventDefault()
    modal = document.querySelector(e.target.getAttribute("href"))
    modal.classList.remove("hidden")
    modal.removeAttribute("aria-hidden")
    modal.setAttribute("aria-modal", "true")
    modal.addEventListener("click",close_modal)
    modal.querySelector("#modal_close").addEventListener("click",close_modal)
    modal.querySelector(".post_modal").addEventListener("click",stop_propagation)
}

let close_modal =(e)=>{
    e.preventDefault()
    modal.classList.add("hidden")
    modal.removeAttribute("aria-modal")
    modal.setAttribute("aria-hidden", "true")
    modal.removeEventListener("click",close_modal)
    modal.querySelector("#modal_close").removeEventListener("click",close_modal)
    modal.querySelector(".post_modal").removeEventListener("click",stop_propagation)
}


let stop_propagation = (e)=>{
    e.stopPropagation()
}





/******************************** main *****************/

all_btn_show.forEach(element=>{
    element.addEventListener("click",open_modal)
})


document.addEventListener("keydown", e=>{
    if(e.key =="Escape")
        close_modal(e)
})