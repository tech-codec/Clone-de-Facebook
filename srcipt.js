const btn_midel_1= document.querySelector("#btn-midel-1")

const btn_midel_2= document.querySelector("#btn-midel-2")

const btn_midel_3= document.querySelector("#btn-midel-3")

const btn_midel_4= document.querySelector("#btn-midel-4")

const btn_midel_5= document.querySelector("#btn-midel-5")

const sous_menu  = document.querySelector(".sous_menu")

const search_input = document.querySelector(".search_input")

const sous_search = document.querySelector(".sous_search")

const logo_search = document.querySelector(".logo_search")


let onActivate_1 = ()=>{
    btn_midel_1.classList.add("active")
    btn_midel_1.classList.remove("inactive")

    btn_midel_2.classList.remove("active")
    btn_midel_2.classList.add("inactive")

    btn_midel_3.classList.remove("active")
    btn_midel_3.classList.add("inactive")

    btn_midel_4.classList.remove("active")
    btn_midel_4.classList.add("inactive")

    btn_midel_5.classList.remove("active")
    btn_midel_5.classList.add("inactive")
}


let onActivate_2 = ()=>{
    btn_midel_1.classList.remove("active")
    btn_midel_1.classList.add("inactive")

    btn_midel_2.classList.add("active")
    btn_midel_2.classList.remove("inactive")

    btn_midel_3.classList.remove("active")
    btn_midel_3.classList.add("inactive")

    btn_midel_4.classList.remove("active")
    btn_midel_4.classList.add("inactive")

    btn_midel_5.classList.remove("active")
    btn_midel_5.classList.add("inactive")
}

let onActivate_3 = ()=>{
    btn_midel_1.classList.remove("active")
    btn_midel_1.classList.add("inactive")

    btn_midel_2.classList.remove("active")
    btn_midel_2.classList.add("inactive")

    btn_midel_3.classList.add("active")
    btn_midel_3.classList.remove("inactive")

    btn_midel_4.classList.remove("active")
    btn_midel_4.classList.add("inactive")

    btn_midel_5.classList.remove("active")
    btn_midel_5.classList.add("inactive")
}


let onActivate_4 = ()=>{
    btn_midel_1.classList.remove("active")
    btn_midel_1.classList.add("inactive")

    btn_midel_2.classList.remove("active")
    btn_midel_2.classList.add("inactive")

    btn_midel_3.classList.remove("active")
    btn_midel_3.classList.add("inactive")

    btn_midel_4.classList.add("active")
    btn_midel_4.classList.remove("inactive")

    btn_midel_5.classList.remove("active")
    btn_midel_5.classList.add("inactive")
}

let onActivate_5 = ()=>{
    btn_midel_1.classList.remove("active")
    btn_midel_1.classList.add("inactive")

    btn_midel_2.classList.remove("active")
    btn_midel_2.classList.add("inactive")

    btn_midel_3.classList.remove("active")
    btn_midel_3.classList.add("inactive")

    btn_midel_4.classList.remove("active")
    btn_midel_4.classList.add("inactive")

    btn_midel_5.classList.add("active")
    btn_midel_5.classList.remove("inactive")
}


onShow_sous_menu = ()=>{
    sous_menu.classList.toggle("hidden")
}

let close_sous_search = ()=>{
    sous_search.classList.add("hidden")
    document.querySelector("#second_search_focus").focus()
    document.querySelector(".close_sous_search").removeEventListener("click", close_sous_search)
    setTimeout(()=>{
        logo_search.classList.remove("hidden")
    },350)
}


search_input.addEventListener("focus", ()=>{
    logo_search.classList.add("hidden")
    setTimeout(()=>{
        sous_search.classList.remove("hidden")
        document.querySelector("#second_search_focus").focus()
        document.querySelector(".close_sous_search").addEventListener("click", close_sous_search)
    },350)
})