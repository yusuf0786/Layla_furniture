// targeting the elements
let nav_li = document.querySelectorAll(".mynavigation .mynav li")
let decoration_btn = nav_li[1]
let decoration_tab = document.querySelector(".decorations_tab")
let menu_btn = document.querySelector(".menu_btn")
let resp_nav = document.querySelector(".resp_nav")
let resp_nav_close = document.querySelector(".close")
let resp_nav_back = document.querySelector(".back")
let resp_nav_li = document.querySelectorAll(".resp_nav .nav_pg_1 ul li")
let resp_nav_decoration = resp_nav_li[1]
let resp_nav_pg2 = document.querySelector(".resp_nav .nav_pg_2")
let overlay = document.querySelector(".overlay")

// doing the functions
decoration_btn.addEventListener('mouseover', () => { decoration_tab.classList.add("decorationShow") })
decoration_btn.addEventListener('mouseleave', () => { decoration_tab.classList.remove("decorationShow") })

decoration_tab.addEventListener('mouseover', () => { decoration_tab.classList.add("decorationShow") })
decoration_tab.addEventListener('mouseleave', () => { decoration_tab.classList.remove("decorationShow") })

menu_btn.addEventListener("click", function(){
    resp_nav.classList.add("My_slideInRight")

    overlay.style.display = "block"
})
resp_nav_close.addEventListener("click", function(){
    resp_nav.classList.remove("My_slideInRight")

    resp_nav_pg2.classList.remove("My_slideInRight")
    resp_nav_back.classList.remove("My_slideInRight")
    resp_nav_pg2.classList.remove("My_slideOutRight")
    resp_nav_back.classList.remove("My_slideOutRight")

    overlay.style.display = "none"
})
resp_nav_decoration.addEventListener("click", function(){
    resp_nav_pg2.classList.remove("My_slideOutRight")
    resp_nav_back.classList.remove("My_slideOutRight")

    resp_nav_pg2.classList.add("My_slideInRight")
    resp_nav_back.classList.add("My_slideInRight")
})
resp_nav_back.addEventListener("click", function(){
    resp_nav_pg2.classList.remove("My_slideInRight")
    resp_nav_back.classList.remove("My_slideInRight")

    resp_nav_pg2.classList.add("My_slideOutRight")
    resp_nav_back.classList.add("My_slideOutRight")
})


// for threesection 
let threesec_secAll = document.querySelectorAll(".threesec_sec .sec")
let threesec_smallsec_bgAll = document.querySelectorAll(".threesec_sec .sec .small_sec_bg")
let threesec_btnAll = document.querySelectorAll(".threesec_sec .sec button")
let threesec_h3All = document.querySelectorAll(".threesec_sec .small_sec_cont h3")

console.log(threesec_secAll.length)

for(let i = 0; i <= threesec_secAll.length-1; i++){
    let threesec_sec = threesec_secAll[i]
    let threesec_btn = threesec_btnAll[i]
    let threesec_smallsec_bg = threesec_smallsec_bgAll[i]
    let threesec_h3 = threesec_h3All[i]

    threesec_sec.addEventListener("mouseover", function(){
        threesec_smallsec_bg.style.backgroundColor = "black"
        threesec_btn.style.backgroundColor = "rgba(0,0,0,0.5)"
        threesec_btn.style.color = "#fff"
        threesec_h3.style.color = "#fff"
    })
    threesec_sec.addEventListener("mouseleave", function(){
        threesec_smallsec_bg.style.backgroundColor = "#32cf9d"
        threesec_btn.style.backgroundColor = "#fff"
        threesec_btn.style.color = "#32cf9d"
        threesec_h3.style.color = "#000"
    })
}


// for sixsec
let sixsec_secAll = document.querySelectorAll(".sixsec_sec .sec_align")
let sixsec_btnAll = document.querySelectorAll(".sixsec_sec .sec_align button")

for(let i = 0; i <= sixsec_secAll.length-1; i++){
    let sixsec_sec = sixsec_secAll[i]
    let sixsec_btn = sixsec_btnAll[i]

    sixsec_sec.addEventListener("mouseover", function(){
        sixsec_sec.style.border = "2px solid #32cf9d"
        sixsec_btn.style.backgroundColor = "#32cf9d"
        sixsec_btn.style.borderColor = "#fff"
    })
    sixsec_sec.addEventListener("mouseleave", function(){
        sixsec_sec.style.border = "2px solid #fff"
        sixsec_btn.style.backgroundColor = "grey"
        sixsec_btn.style.borderColor = "grey"
    })
}