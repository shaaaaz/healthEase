const close = document.querySelector(".close")
const part1 = document.querySelector(".page1")
const part2 = document.querySelector(".page2")
const button = document.querySelector(".next")

close.onclick = () => {
    part2.classList.add("hidden")
    part1.classList.remove("hidden")
    console.log(s1)
    checkvalue()
}

button.onclick = () => {
    part2.classList.remove("hidden")
    part1.classList.add("hidden")
    store()
    checkvalue()
}

function store() {
    // const sym1 = document.querySelector("#sym1")
    // const sym2 = document.querySelector("#sym2")
    // const sym3 = document.querySelector("#sym3")
    // const sym4 = document.querySelector("#sym4")

    // const s1 = sym1.value
    // const s2 = sym2.value
    // const s3 = sym3.value
    // const s4 = sym4.value

    const name1 = document.querySelector(".name1")
    const name2 = document.querySelector(".name2")
    const name3 = document.querySelector(".name3")
    const name4 = document.querySelector(".name4")

    // name1.innerHTML = s1
    // name2.innerHTML = s2
    // name3.innerHTML = s3
    // name4.innerHTML = s4

    const d1 = document.querySelector(".d1")
    const d2 = document.querySelector(".d2")
    const d3 = document.querySelector(".d3")

    const t1 = document.querySelector(".test1")
    const t2 = document.querySelector(".test2")
    const t3 = document.querySelector(".test3")

    checkvalue()

    // let checmalaria = 0;
    // let checkdengue=0;
    // checkdis1=0;
    // checkdis2=0;
    // checkdis3=0;

    // if(s1=="fever" || s2=="fever" || s3=="fever" || s4=="fever")
    // {
    //     checmalaria++;
    //     checkdengue++;
    // }

    // if(s1=="amit" || s2=="amit" || s3=="amit" || s4=="amit" )
    // {
    //     checmalaria++;
    //     checkdis1++;
    // }

    // if(s1=="ujjawal" || s2=="ujjawal" || s3=="ujjawal" || s4=="ujjawal" )
    // {
    //     checmalaria++;
    // }

    // if(s1=="red" || s2=="red" || s3=="red" || s4=="red" )
    // {
    //     checmalaria++;
    // }

    // if(s1=="blue" || s2=="blue" || s3=="blue" || s4=="blue" )
    // {
    //     checmalaria++;
    // }

    // if(checkdengue>=4)
    // {
    //     d1.innerHTML="dengue"
    // }


}

let dv = document.getElementById("dropdown")
let v = ""

function checkvalue() {

    const d1 = document.querySelector(".d1")
    const d2 = document.querySelector(".d2")
    const d3 = document.querySelector(".d3")

    const t1 = document.querySelector(".test1")
    const t2 = document.querySelector(".test2")
    const t3 = document.querySelector(".test3")

    let sel = document.getElementById("dropdown")
    let dv = document.getElementById("dropdown").value
    let v = ""


    switch (dv) {
        case "1":
            console.log("hellow")
            v = "Influenza"
            break
        case "2":
            console.log("helecvbrnilow")
            v = "Tuberculosis";
            break;
        case "3":
            v = "Malaria";
            break;
        case "4":
            v = "HIV/AIDS:"
            break
        case "5":
            v = "Hepatitis"
            break
        case "6":
            v = "Cholera"
            break
        case "7":
            v = "Dengue Fever"
            break
        case "8":
            v = "Pneumonia"
            break
        case "9":
            v = "Lyme Disease"
            break
        case "10":
            v = "COVID-19"
            break
        case "11":
            v = "Sickle Cell Anemia"
            break
        case "12":
            v = "Cystic Fibrosis"
            break
        case "13":
            v = "Huntington's Disease"
            break
        case "14":
            v = "Down Syndrome:"
            break
        case "15":
            v = "Muscular Dystrophy"
            break
        case "16":
            v = "Hemophilia"
            break
        case "17":
            v = "Osteoporosis"
            break
        case "18":
            v = "Alzheimer's Disease"
            break
        case "19":
            v = "Hypertension (High Blood Pressure)"
            break
        case "20":
            v = "Diabetes"
            break
        case "21":
            v = "Obesity"
            break
        case "22":
            v = "Prader-Willi Syndrome"
            break
        case "23":
            v = "Turner Syndrome:"
            break
        case "24":
            v = "Marfan Syndrome"
            break
        case "25":
            v = "Fragile X Syndrome"
            break
        case "26":
            v = "Celiac Disease"
            break
        case "27":
            v = "Multiple Sclerosis"
            break
        case "28":
            v = "Epilepsy"
            break
        case "29":
            v = "Parkinson's Disease"
            break
        case "30":
            v = "Rheumatoid Arthritis"
            break
        case "31":
            v = "Systemic Lupus Erythematosus (Lupus)"
            break
        case "32":
            v = "Crohn's Disease"
            break
        case "33":
            v = "Ulcerative Colitis:"
            break
        case "34":
            v = "Ovarian Cancer"
            break
        case "35":
            v = "Breast Cancer"
            break
        case "36":
            v = "Prostate Cancer"
            break
        case "37":
            v = "Cervical Cancer"
            break
        case "38":
            v = "Osteoarthritis"
            break
        case "39":
            v = "Osteomalacia"
            break
        case "40":
            v = "Gout"
            break
        case "41":
            v = "Autism Spectrum Disorder"
            break
        case "42":
            v = "Attention Deficit Hyperactivity Disorder (ADHD)"
            break
        case "43":
            v = "Bipolar Disorder"
            break
        case "44":
            v = "Schizophrenia"
            break
        case "45":
            v = "Anorexia Nervosa"
            break
        case "46":
            v = "Bulimia Nervosa"
            break
        case "47":
            v = "Generalized Anxiety Disorder (GAD)"
            break
        case "48":
            v = "Post-Traumatic Stress Disorder (PTSD)"
            break
        case "49":
            v = "Obsessive-Compulsive Disorder (OCD)"
            break
        case "50":
            v = "Panic Disorder";
            break;

    }
    d1.innerHTML=v
    d2.innerHTML=""
    d3.innerHTML=""
    t1.innerHTML=""
    t2.innerHTML=""
    t3.innerHTML=""
}
