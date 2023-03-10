const row = document.querySelector(".row")
const searchInp = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const slSort = document.querySelector(".select-sort")
const slReg = document.querySelector(".select-red")

axios(`https://restcountries.com/v2/all`)
.then((task) => {
    console.log(task.data)
    task.data.map((el) => {
        row.innerHTML += `<div class="col-4 my-4 border border-danger bg-warning-subtle text-bg-warning p-3 ">
        <img src="${el.flags.svg}" width="300px" heght="200px">
        <h1>${el.name}</h1>
        <h3> Столица: ${el.capital}</h3>
        <h2> Плошадь: ${el.area}КВ<sup>2</sup></h2>
        
        <h2> Регион: ${el.region}</h2>
        <h3> Нацеленние: ${el.population}</h3>
       
        </div>`
    })
})

let all = null

function task(API){
    axios(`https://restcountries.com/v3.1/${API}`)
    .then((res) => {
        all = res.data
        get(res.data)
    })
}

task("all")
searchInp.addEventListener("keydown",(e) => {
    if (e.key === "Enter"){
        task(`name/${searchInp.value}`)

    }
})
searchInp.addEventListener("input", (e) => {
    task(`name/${e.target.value}`)
})
searchBtn.addEventListener("click", () => {
    task(`name/${searchInp.value}`)

})


function get(data) {
    row.innerHTML = ""
    data.map((el) => {
        row.innerHTML += `<div class="col-4 my-2 border border-warning shadow-lg p-3 mb-5 bg-body-tertiary rounded text-bg-warning p-3 bg-warning-subtle">
        <img src="${el.flags.svg}" width="300px" heght="200px">
        <h1>${el.name.common}</h1>
        <h3> Столица: ${el.capital}</h3>
        <h2> Плошадь: ${el.area}КВ<sup>2</sup></h2>
        <h2> Регион: ${el.region}</h2>
        <h3> Нациленние: ${el.population}</h3>
        
        </div>`
    })
}


slSort.addEventListener("change", (e) => {
    const value = e.target.value
    if (value === "population"){
        const result = all.sort((a,b) => {
            return b.population - a.population
        })
        get(result)
    }else if (value === "area"){
        const result = all.sort((a,b) => {
            return b.area - a.area
        })
        get(result)
    }else if (value === "A-Z") {
        const result = all.sort((a,b) =>{
            if (b.name.common[0] > a.name.common[0]) {
                return -1
            }else if (b.name.common[0] < a.name.common[0]){
                return 1
            }
        })
        get(result)
    }else if (value === "Z-A"){
        const result = all.sort((a,b) =>{
            if (b.name.common[0] > a.name.common[0]) {
                return 1
            }else if (b.name.common[0] < a.name.common[0]){
                return -1
            }
        })
        get(result)

    }
})




slReg.addEventListener("change", (e) => {
    const regValue = e.target.value
    if (regValue === "asia"){
        const res = all.filter((el)=> {
            return el.region === "Asia"
        })
        get(res)
    }
    else if (regValue === "europe"){
        const res = all.filter((el)=> {
            return el.region === "Europe"
        })
        get(res)
    }
    else if (regValue === "oceania"){
        const res = all.filter((el)=> {
            return el.region === "Oceania"
        })
        get(res)
    }
    else  if (regValue === "africa"){
        const res = all.filter((el)=> {
            return el.region === "Africa"
        })
        get(res)
    } else  if (regValue === "Oceania"){
        const res = all.filter((el)=> {
            return el.region === "Oceania"
        })
        get(res)
    }
})


































