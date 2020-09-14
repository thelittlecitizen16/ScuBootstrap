
let currentMusicalInstruments;
let currentMusicalInstrumentsFilter;
let SearchObject ={type:"", search:"", price:""}

function AddAllMusicalInstruments(fluteInstrument){
    document.getElementById('allMusicalInstruments').innerHTML = "";
    fluteInstrument.forEach(element => {
        AddMusicalInstrument(element.imagePath,element.name,element.description,element.price);
    });
}

function AddMusicalInstrument(imgSrc, title,description,price) {
    var html = `<div class="col-sm-3 border d-flex justify-content-center text-center MusicalInstruments"><div class="MusicalInstruments">
    <img  class = "MusicalInstrumentsImg" class="img-fluid" src=${imgSrc} alt="Clarinet" id="Clarinet">
    <p class="title">${title}</p>
    <p>${description}
    </p><p class="title">${price}₪</p>
    <button   class="ShoppingCart">
    <img  class = "ShoppingCartImg" src="./images/addToCart.PNG" >
    </button>
    </div>
    </div>`

    document.getElementById('allMusicalInstruments').innerHTML += html;
}

AddAllMusicalInstruments(fluteInstrument);

function GetInstrumentsByOption(optionValue) {
    if (optionValue=="all")
    {
        return fluteInstrument;
    }
    else{
        return fluteInstrument.filter(i=>i.instrumentType.name==optionValue);
    }
}

function ChangeByOption() {
    let optionValue = document.getElementById("roledDopdown").value;
    SearchObject.type=optionValue;

    FilterByAllOptions();
}

function search() {
    let data = document.getElementById("search").value;
     SearchObject.search=data;

     FilterByAllOptions();
};


function changeByPrice() {
     let checkboxElements = document.getElementsByClassName("checkbox");
     SearchObject.price=checkboxElements;

     FilterByAllOptions();
};

function FilterByAllOptions()
{
    let fluteInstrumentFilter=fluteInstrument;

    if(SearchObject.type!="")
    {
        let fluteInstrumentByType= GetInstrumentsByOption(SearchObject.type);
        fluteInstrumentFilter=fluteInstrumentByType; 
    }
    
    if(SearchObject.search!="")
    {
        let results =fluteInstrumentFilter.filter(i=>i.name.includes(SearchObject.search));
        fluteInstrumentFilter=results;
    }
    
    if(SearchObject.price.length>0)
    {
        let havePriceRannage=false;
        let MusicalInstrumentsByPrice=new Set();

        for (var i = 0; i < SearchObject.price.length; i++) {

        if(SearchObject.price[i].value.includes('*'))
        {
            if(SearchObject.price[i].checked == true)
            {
                const price = SearchObject.price[i].value.split('*')[1];

                fluteInstrumentFilter.filter(i=>i.price<=price).forEach(element => {
                    MusicalInstrumentsByPrice.add(element);
                });
                havePriceRannage=true;

            }
        }
        if(SearchObject.price[i].value.includes('+'))
        {
            if(SearchObject.price[i].checked == true)
            {
            const price = SearchObject.price[i].value.split('+')[0];
          
            fluteInstrumentFilter.filter(i=>i.price>=price).forEach(element => {
                MusicalInstrumentsByPrice.add(element);
            });
            havePriceRannage=true;
            }
        }
        if(SearchObject.price[i].value.includes('-'))
        {
            if(SearchObject.price[i].checked == true)
            {
            const prices = SearchObject.price[i].value.split('-');
          
            fluteInstrumentFilter.filter(i=>i.price>=prices[0] &&i.price<=prices[1]).forEach(element => {
                MusicalInstrumentsByPrice.add(element);
    
            });

            havePriceRannage=true;
            }
        }
    }
    if(havePriceRannage==true)
    {
        let MusicalInstrumentsByPriceArray=[];
        MusicalInstrumentsByPrice.forEach(element => {
            MusicalInstrumentsByPriceArray.push(element);
        });
        fluteInstrumentFilter=MusicalInstrumentsByPriceArray;
    }
    }
    
    AddAllMusicalInstruments(fluteInstrumentFilter);    
}
