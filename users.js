const user = document.querySelector(".user")


axios(`https://jsonplaceholder.typicode.com/users`)
    .then((us) => {
        console.log(us.data)
        us.data.map((el) => {
            user.innerHTML += `<div class="col-4 border border-info shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-warning text-warning-emphasis bg-success-subtle shadow-lg p-3 mb-5 bg-body-tertiary rounded" style="width: 500px">
        <img src= "img/user-img.png" alt="" class="" width="250px" height="250px" style="margin-left: 110px" >
<h1 class="text-center">NAME:${el.name}</h1>
<h2 class="text-center">EMAIL:${el.email}</h2>
<h2 class="text-center">CITY:${el.address.city}</h2>
<a href="tel:1" class="text-center" style="margin-left: 160px;">${el.phone}</a>
</div>`
        })
    })