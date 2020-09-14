
function AddAllMusicalInstruments(imgSrc, title,description,price) {
    var html = `<div class="col-sm-3 border d-flex justify-content-center text-center MusicalInstruments"><div class="MusicalInstruments">
    <img  class = "MusicalInstrumentsImg" class="img-fluid" src=${imgSrc} alt="Clarinet" id="Clarinet">
    <p class="title">${title}</p>
    <p>${description}
    </p><p class="title">${price}</p>
    <button   class="ShoppingCart">
    <img  class = "ShoppingCartImg" src="./images/addToCart.PNG" >
    </button>
    </div>
    </div>`
    document.getElementById('allMusicalInstruments').innerHTML += html;
}

AddAllMusicalInstruments("./images/Clarinet.jpg","try","try2","415");