let btn_midel_1 = document.querySelector("#btn-midel-1")
let btn_midel_2 = document.querySelector("#btn-midel-2")
let btn_midel_3 = document.querySelector("#btn-midel-3")
let btn_midel_4 = document.querySelector("#btn-midel-4")
let btn_midel_5 = document.querySelector("#btn-midel-5")

let actionActive_1 = ()=>{
    btn_midel_1.classList.add("active");
    btn_midel_1.classList.remove("inactive")
    btn_midel_2.classList.remove("active");
    btn_midel_2.classList.add("inactive");
    btn_midel_3.classList.remove("active");
    btn_midel_3.classList.add("inactive")
    btn_midel_4.classList.remove("active");
    btn_midel_4.classList.add("inactive")
    btn_midel_5.classList.remove("active");
    btn_midel_5.classList.add("inactive")
}

let actionActive_2 = ()=>{
    btn_midel_2.classList.add("active");
    btn_midel_2.classList.remove("inactive")
    btn_midel_1.classList.remove("active");
    btn_midel_1.classList.add("inactive")
    btn_midel_3.classList.remove("active");
    btn_midel_3.classList.add("inactive")
    btn_midel_4.classList.remove("active");
    btn_midel_4.classList.add("inactive")
    btn_midel_5.classList.remove("active");
    btn_midel_5.classList.add("inactive")
}

let actionActive_3 = ()=>{
    btn_midel_3.classList.add("active");
    btn_midel_3.classList.remove("inactive")
    btn_midel_2.classList.remove("active");
    btn_midel_2.classList.add("inactive");
    btn_midel_1.classList.remove("active");
    btn_midel_1.classList.add("inactive")
    btn_midel_4.classList.remove("active");
    btn_midel_4.classList.add("inactive")
    btn_midel_5.classList.remove("active");
    btn_midel_5.classList.add("inactive")
}
let actionActive_4 = ()=>{
    btn_midel_4.classList.add("active");
    btn_midel_4.classList.remove("inactive")
    btn_midel_2.classList.remove("active");
    btn_midel_2.classList.add("inactive");
    btn_midel_1.classList.remove("active");
    btn_midel_1.classList.add("inactive")
    btn_midel_3.classList.remove("active");
    btn_midel_3.classList.add("inactive")
    btn_midel_5.classList.remove("active");
    btn_midel_5.classList.add("inactive")
}
let actionActive_5 = ()=>{
    btn_midel_5.classList.add("active");
    btn_midel_5.classList.remove("inactive")
    btn_midel_2.classList.remove("active");
    btn_midel_2.classList.add("inactive");
    btn_midel_1.classList.remove("active");
    btn_midel_1.classList.add("inactive")
    btn_midel_3.classList.remove("active");
    btn_midel_3.classList.add("inactive")
    btn_midel_4.classList.remove("active");
    btn_midel_4.classList.add("inactive")
}

