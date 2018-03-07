var random = 'http://galvanize-cors.herokuapp.com/http://api.petfinder.com/pet.getRandom?key=ebb05140e2eac8b2c2472e4e247888ae&output=basic&animal=dog&format=json'
const ul = document.querySelector('#dog')

function append(parent, el) {
    return parent.appendChild(el)
}

document.querySelector('.button').addEventListener('click', showDog)

function clearDog() {
    document.getElementById('dog').innerHTML = ''
}

function showDog() {
    clearDog()
    fetch(random)
    .then(response => response.json())
    .then(function(list) {
        var dog = list.petfinder.pet
        var li = document.createElement('li')
        img = document.createElement('img')
        span = document.createElement('span')
        span2 =document.createElement('span')
        span3 = document.createElement('span')
        span4 = document.createElement('span')
        p = document.createElement('p')
        img.src = dog.media.photos.photo["0"].$t
        span.innerHTML = "Name: " + dog.name.$t
        span2.innerHTML = "Breed: " + dog.breeds.breed.$t
        span3.innerHTML = "Sex: " + dog.sex.$t
        span4.innerHTML = "Location: " + dog.contact.city.$t + ", " + dog.contact.state.$t
        p.innerHTML = "Description: " + dog.description.$t
        append(li, img)
        append(li, span)
        append(li, span2)
        append(li, span3)
        append(li, span4)
        append(li, p)
        append(ul, li)
        console.log(dog)
    })
}