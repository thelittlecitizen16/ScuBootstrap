
function AddAllMusicalInstruments(){
    fluteInstrument.forEach(element => {
        AddMusicalInstrument(element.imagePath,element.name,element.description,element.price);
    });
}

function AddMusicalInstrument(imgSrc, title,description,price) {
    console.table(fluteInstrument);

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

AddAllMusicalInstruments();