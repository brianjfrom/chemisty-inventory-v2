let getBarcodeOther = document.querySelector(".bcnSubmitOther");
let barcodeOther;
let dropDownValue;
let lotNumberOther;
let dateOther;
let chemTestNameOther;
let chemTestShortNameOther;
let flexBoxOther;
let boxNumberOther;
let typeOther;
let referenceOther;


getBarcodeOther.onclick = function getDataOther() {
    let barcodeOther = document.querySelector(".barcodeNumberOther").value;
    let dropDownValue = document.querySelector("#other-supplies").value;
    console.log(dropDownValue);

    if (dropDownValue == 5) {
        let globalTradeNumberOther = barcodeOther.slice(2, 16);
        lotNumberOther = barcodeOther.slice(18, 23);
        console.log(lotNumberOther, "lot #")
        let expDateStringOther = barcodeOther.slice(25, 31);
        console.log(expDateStringOther, "date string")
        let monthOther = expDateStringOther.slice(2, 4);
        console.log(monthOther, "month")
        let dayOther = expDateStringOther.slice(4, 7);
        console.log(dayOther, "day")
        let yearOther = expDateStringOther.slice(0, 2);
        console.log(yearOther, "year")
        dateOther = `${monthOther}-${dayOther}-${yearOther}`;
        console.log(dateOther, "date")
        let expireDateOther = new Date(dateOther);
        let refNumberOther = barcodeOther.slice(34, 42);
        console.log()
        console.log(globalTradeNumberOther, "value 5");
        document.querySelector("#refNumOther").innerHTML = refNumberOther;
        document.querySelector("#lotNumberOther").innerHTML = lotNumberOther;
        document.querySelector("#exDateOther").innerHTML = displayDate(expireDateOther);
        document.querySelector('.noteOther').innerHTML = "";

        let indexOther = reagentData.findIndex(function (refChems, index) {
            return refChems.refChem == refNumberOther
        });
        console.log(indexOther);

        chemTestNameOther = reagentData[indexOther].name.toUpperCase();
        document.querySelector('#test_nameOther').innerHTML = chemTestNameOther;
        chemTestShortNameOther = reagentData[indexOther].shName;
        flexBoxOther = reagentData[indexOther].flexPerBox;
        document.querySelector('#flexPerBoxOther').innerHTML = flexBoxOther;
        typeOther = reagentData[indexOther].type;
        referenceOther = reagentData[indexOther].refChem

    } else if(dropDownValue == 9) {
        let globalTradeNumberOther = barcodeOther.slice(2, 16);
        lotNumberOther = barcodeOther.slice(18, 27);
        let expDateStringOther = barcodeOther.slice(29, 35);
        let monthOther = expDateStringOther.slice(2, 4);
        let dayOther = expDateStringOther.slice(4, 7);
        let yearOther = expDateStringOther.slice(0, 2);
        dateOther = `${monthOther}-${dayOther}-${yearOther}`;
        let expireDateOther = new Date(dateOther);
        let refNumberOther = barcodeOther.slice(38, 46);
        console.log(refNumberOther, "value 9");
        document.querySelector("#refNumOther").innerHTML = refNumberOther;
        document.querySelector("#lotNumberOther").innerHTML = lotNumberOther;
        document.querySelector("#exDateOther").innerHTML = displayDate(expireDateOther);
        document.querySelector('.noteOther').innerHTML = "";

        let indexOther = reagentData.findIndex(function (refChems, index) {
          return refChems.refChem == refNumberOther
        });
        console.log(indexOther);

        chemTestNameOther = reagentData[indexOther].name.toUpperCase();
          document.querySelector('#test_nameOther').innerHTML = chemTestNameOther;
          chemTestShortNameOther = reagentData[indexOther].shName;
          flexBoxOther = reagentData[indexOther].flexPerBox;
          document.querySelector('#flexPerBoxOther').innerHTML = flexBoxOther;
          typeOther = reagentData[indexOther].type;
          referenceOther = reagentData[indexOther].refChem

    } else if (dropDownValue == 10) {
        let globalTradeNumberOther = barcodeOther.slice(2, 16);
        lotNumberOther = barcodeOther.slice(18, 28);
        let expDateStringOther = barcodeOther.slice(30, 36);
        let monthOther = expDateStringOther.slice(2, 4);
        let dayOther = expDateStringOther.slice(4, 7);
        let yearOther = expDateStringOther.slice(0, 2);
        dateOther = `${monthOther}-${dayOther}-${yearOther}`;
        let expireDateOther = new Date(dateOther);
        let refNumberOther = barcodeOther.slice(39, 47);
        console.log(refNumberOther);
        document.querySelector("#refNumOther").innerHTML = refNumberOther;
        document.querySelector("#lotNumberOther").innerHTML = lotNumberOther;
        document.querySelector("#exDateOther").innerHTML = displayDate(expireDateOther);
        document.querySelector('.noteOther').innerHTML = "";

        let indexOther = reagentData.findIndex(function (refChems, index) {
          return refChems.refChem == refNumberOther
        });
        console.log(indexOther);
        chemTestNameOther = reagentData[indexOther].name.toUpperCase();
          document.querySelector('#test_nameOther').innerHTML = chemTestNameOther;
          chemTestShortNameOther = reagentData[indexOther].shName;
          flexBoxOther = reagentData[indexOther].flexPerBox;
          document.querySelector('#flexPerBoxOther').innerHTML = flexBoxOther;
          typeOther = reagentData[indexOther].type;
          referenceOther = reagentData[indexOther].refChem

    }
}