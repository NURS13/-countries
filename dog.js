const breedsAll = document.querySelector(".breeds")
const breedsImg = document.querySelector(".breed-img")
const select = document.querySelector(".select-sort")
const searchInp = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")


function fetchAll() {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map((el) => (
                breedsAll.innerHTML += `<button class="breeds btn btn-success m-1">${el}</button>`

            ))
            Object.keys(res.data.message).map((el) => {
                select.innerHTML += `<option value="${el}">${el}</option>`
            })
        })
        .then(() => getBtn())


}


fetchAll()

function getBtn() {
    const buttons = document.querySelectorAll(".breeds")
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            fetchImg(btn.innerHTML)

        })
    })
}

function fetchImg(name) {
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) => {
            breedsImg.innerHTML = `<img src="${res.data.message}">`
        })
}


searchBtn.addEventListener("click", (e) => {
    fetchImg(searchInp.value.trim())
})

























