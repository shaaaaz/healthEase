const close = document.querySelector(".close")
const part1 = document.querySelector(".page1")
const part2 = document.querySelector(".page2")
const button = document.querySelector(".next")

close.onclick = () => {
    part2.classList.add("hidden")
    part1.classList.remove("hidden")
    console.log(s1)
}

button.onclick = () => {
    part2.classList.remove("hidden")
    part1.classList.add("hidden")
    store()
}

function store(){
    const sym1 = document.querySelector("#sym1")
    const sym2 = document.querySelector("#sym2")
    const sym3 = document.querySelector("#sym3")
    const sym4 = document.querySelector("#sym4")

    const s1 = sym1.value
    const s2 = sym2.value
    const s3 = sym3.value
    const s4 = sym4.value

    const name1 = document.querySelector(".name1")
    const name2 = document.querySelector(".name2")
    const name3 = document.querySelector(".name3")
    const name4 = document.querySelector(".name4")

    name1.innerHTML= s1
    name2.innerHTML= s2
    name3.innerHTML= s3
    name4.innerHTML= s4

    const d1 = document.querySelector(".d1")
    const d2 = document.querySelector(".d2")
    const d3 = document.querySelector(".d3")

    const t1 = document.querySelector(".test1")
    const t2 = document.querySelector(".test2")
    const t3 = document.querySelector(".test3")


}

