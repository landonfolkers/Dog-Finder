let random = "http://galvanize-cors.herokuapp.com/http://api.petfinder.com/pet.getRandom?key=ebb05140e2eac8b2c2472e4e247888ae&output=basic&animal=dog&format=json&breed="
let dogType = "http://galvanize-cors.herokuapp.com/http://api.petfinder.com/breed.list?key=ebb05140e2eac8b2c2472e4e247888ae&output=basic&animal=dog&format=json"
const ul = document.querySelector('#dog')
const dropDown = document.getElementById("breed")
const gender = document.getElementById("sex")

function append(parent, el) {
    return parent.appendChild(el)
}

function populate() {
    fetch(dogType)
        .then(response => response.json())
        .then(function(types) {
            return types.petfinder.breeds.breed.map(function(mapped) {
                let option = document.createElement('option')
                option.className = 'option'
                option.innerHTML = mapped.$t
                append(dropDown, option)
            })
    })
}

populate()

function addValue() {
    return random = random + dropDown.value + "&sex=" + gender.value
}

function clearDog() {
    ul.innerHTML = ''
}

document.querySelector('.button').addEventListener('click', showDog)

function showDog() {
    addValue()
    clearDog()
    fetch(random)
    .then(response => response.json())
    .then(function(list) {
        let dog = list.petfinder.pet
        let li = document.createElement('li')
        let img = document.createElement('img')
        let span = document.createElement('span')
        let span2 =document.createElement('span')
        let span3 = document.createElement('span')
        let span4 = document.createElement('span')
        let p = document.createElement('p')
        if (dog.media.photos === undefined) {
            img.src = "./logonegative.png"
        } else {
            img.src = dog.media.photos.photo["0"].$t
        }
        span.innerHTML = "Name: " + dog.name.$t
        if (dog.breeds.breed.length > 1) {
            span2.innerHTML = "Breed: " + dog.breeds.breed["0"].$t + ", " + dog.breeds.breed["1"].$t
        } else {
            span2.innerHTML = "Breed: " + dog.breeds.breed.$t
        }
        span3.innerHTML = "Sex: " + dog.sex.$t
        span4.innerHTML = "Location: " + dog.contact.city.$t + ", " + dog.contact.state.$t
        if (dog.description.$t === undefined) {
            p.innerHTML = "No Description"
        } else {
            p.innerHTML = "Description: " + dog.description.$t
        }
        append(li, img)
        append(li, span)
        append(li, span2)
        append(li, span3)
        append(li, span4)
        append(li, p)
        append(ul, li)
    })
}