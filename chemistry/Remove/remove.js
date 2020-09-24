function displayDate(date) {
  return date.toLocaleDateString(
    undefined,
    { day: 'numeric', month: 'long', year: 'numeric' }
  )
}

let getBarcode = document.querySelector(".bcnSubmit");
let getBarcodeIm = document.querySelector(".bcnSubmitIM");
let barcode = document.querySelector(".barcodeNumber").value;
let barcodeIM = document.querySelector(".barcodeNumberIM").value;
let getBarcodeCal = document.querySelector('.bcnSubmitCal');
let barcodeCal = document.querySelector('.barcodeNumberCal').value;


fetch('../all').then(Response => Response.json())
  .then((reagentData) => {
    getBarcode.onclick = function getData() {
      barcode = document.querySelector(".barcodeNumber").value;
      let globalTradeNumber = barcode.slice(2, 16);
      lotNumber = barcode.slice(18, 24);
      expDateString = barcode.slice(26, 32);
      month = expDateString.slice(2, 4);
      day = expDateString.slice(4, 7);
      year = expDateString.slice(0, 2);
      date = `${month}-${day}-${year}`;
      expireDate = new Date(date);
      refNumber = barcode.slice(35, 43);
      console.log(refNumber);
      document.querySelector("#refNum").innerHTML = refNumber;
      document.querySelector("#lotNumber").innerHTML = lotNumber;
      document.querySelector("#exDate").innerHTML = displayDate(expireDate);
      document.querySelector('.note').innerHTML = "";

      let index = reagentData.findIndex(function (refChems, index) {
        return refChems.refChem == refNumber;
      });
      console.log(index);

      chemTestName = reagentData[index].name.toUpperCase();
      console.log(chemTestName);
      document.querySelector("#test_name").innerHTML = chemTestName;
      chemTestShortName = reagentData[index].shName;
      flexBox = reagentData[index].flexPerBox;
      document.querySelector("#flexPerBox").innerHTML = flexBox;
      type = reagentData[index].type;
      reference = reagentData[index].refChem;

      setTimeout(function getInfo() {
        boxNumber = 1;

        let lot = lotNumber;
        let expire = date;
        let testName = reagentData[index].name.toUpperCase();
        console.log(testName);
        let shortName = reagentData[index].shName;
        let flexPerBox = reagentData[index].flexPerBox;
        let numOfBoxs = boxNumber;
        let pkgType = reagentData[index].type;
        let partNumber = reference;
        let methodData = {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        fetch('/remove/' + testName + '.' + shortName + '.' + expire + '.' + lot + '.' + flexPerBox + '.' + numOfBoxs + "." + pkgType + "." + partNumber, methodData)
          .then(response => {
            console.log(response)
          })
        document.querySelector("#refNum").innerHTML = "";
        document.querySelector("#lotNumber").innerHTML = "";
        document.querySelector("#exDate").innerHTML = "";
        document.querySelector("#test_name").innerHTML = "";
        document.querySelector("#flexPerBox").innerHTML = "";
        // document.querySelector("#numberBoxs").value = "";
        document.querySelector(".barcodeNumber").value = "";
        document.querySelector('.note').innerHTML = '"Box Removed From Inventoy"'
        document.querySelector('.note').style.color = "red";
      }, 3000)
    }
    getBarcodeIm.onclick = function getDataIm() {
      barcodeImNotFixed = document.querySelector(".barcodeNumberIM").value;
      barcodeIm = barcodeImNotFixed.replace(/\\/g, "");

      // barcodeIm = document.querySelector(".barcodeNumberIM").value;
      let globalTradeNumberIm = barcodeIm.slice(2, 16);
      lotNumberIm = barcodeIm.slice(18, 26);
      expDateStringIm = barcodeIm.slice(28, 34);
      monthIm = expDateStringIm.slice(2, 4);
      dayIm = expDateStringIm.slice(4, 7);
      yearIm = expDateStringIm.slice(0, 2);
      dateIm = `${monthIm}-${dayIm}-${yearIm}`;
      expireDateIm = new Date(dateIm);
      refNumberIm = barcodeIm.slice(37, 45);
      console.log(refNumberIm);
      document.querySelector("#refNumIM").innerHTML = refNumberIm;
      document.querySelector("#lotNumberIM").innerHTML = lotNumberIm;
      document.querySelector("#exDateIM").innerHTML = displayDate(expireDateIm);
      document.querySelector('.noteIM').innerHTML = "";

      let indexIm = reagentData.findIndex(function (refChemsIm, index) {
        return refChemsIm.refChem == refNumberIm;
      });
      console.log(indexIm);

      chemTestNameIm = reagentData[indexIm].name.toUpperCase();
      console.log(chemTestNameIm);
      document.querySelector("#test_nameIM").innerHTML = chemTestNameIm;
      chemTestShortNameIm = reagentData[indexIm].shName;
      flexBoxIm = reagentData[indexIm].flexPerBox;
      document.querySelector("#flexPerBoxIM").innerHTML = flexBoxIm;
      typeIm = reagentData[indexIm].type;
      referenceIm = reagentData[indexIm].refChem

      setTimeout(function getInfoIm() {
        boxNumberIm = 1;

        let lotIm = lotNumberIm;
        let expireIm = dateIm;
        let testNameIm = reagentData[indexIm].name.toUpperCase();
        console.log(testNameIm);
        let shortNameIm = reagentData[indexIm].shName;
        let flexPerBoxIm = reagentData[indexIm].flexPerBox;
        let numOfBoxsIm = boxNumberIm;
        let pkgTypeIm = typeIm;
        let partNumberIm = referenceIm;
        let methodDataIm = {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        fetch('/remove/' + testNameIm + '.' + shortNameIm + '.' + expireIm + '.' + lotIm + '.' + flexPerBoxIm + '.' + numOfBoxsIm + "." + pkgTypeIm + "." + partNumberIm, methodDataIm)
          .then(response => {
            console.log(response)
          })
        document.querySelector("#refNumIM").innerHTML = "";
        document.querySelector("#lotNumberIM").innerHTML = "";
        document.querySelector("#exDateIM").innerHTML = "";
        document.querySelector("#test_nameIM").innerHTML = "";
        document.querySelector("#flexPerBoxIM").innerHTML = "";
        // document.querySelector("#numberBoxs").value = "";
        document.querySelector(".barcodeNumberIM").value = "";
        document.querySelector('.noteIM').innerHTML = '"Box Removed From Inventoy"'
        document.querySelector('.noteIM').style.color = "red";
      }, 2000)
    }
    getBarcodeCal.onclick = function getDataCal() {
      barcodeCalNotFixed = document.querySelector(".barcodeNumberCal").value;
      barcodeCal = barcodeCalNotFixed.replace(/\\/g, "");
      console.log(barcodeCal);
      let globalTradeNumberCal = barcodeCal.slice(2, 16);
      console.log(globalTradeNumberCal, "GTN");
      lotNumberCal = barcodeCal.slice(18, 24);
      console.log(lotNumberCal, 'lot');
      expDateStringCal = barcodeCal.slice(26, 32);
      console.log(expDateStringCal, 'exdate string');
      monthCal = expDateStringCal.slice(2, 4);
      console.log(monthCal, 'mon');
      dayCal = expDateStringCal.slice(4, 7);
      console.log(dayCal, 'day');
      yearCal = expDateStringCal.slice(0, 2);
      console.log(yearCal, 'year');
      dateCal = `${monthCal}-${dayCal}-${yearCal}`;
      console.log(dateCal, 'date');
      expireDateCal = new Date(dateCal);
      refNumberCal = barcodeCal.slice(35, 43);
      console.log(refNumberCal, 'refnumber')
      // console.log(lotNumberIm);
      // console.log(expireDateIm);
      document.querySelector("#refNumCal").innerHTML = refNumberCal;
      document.querySelector("#lotNumberCal").innerHTML = lotNumberCal;
      document.querySelector("#exDateCal").innerHTML = displayDate(expireDateCal);
      document.querySelector('.noteCal').innerHTML = "";

      let indexCal = reagentData.findIndex(function (refChemsCal, index) {
        return refChemsCal.refChem == refNumberCal;
      });
      console.log(indexCal);

      chemTestNameCal = reagentData[indexCal].name.toUpperCase();
      console.log(chemTestNameCal);
      document.querySelector("#test_nameCal").innerHTML = chemTestNameCal;
      chemTestShortNameCal = reagentData[indexCal].shName;
      flexBoxCal = reagentData[indexCal].flexPerBox;
      document.querySelector("#flexPerBoxCal").innerHTML = flexBoxCal;
      typeCal = reagentData[indexCal].type;
      referenceCal = reagentData[indexCal].refChem

      setTimeout(function getInfoCal() {
        boxNumberCal = 1;

        let lotCal = lotNumberCal;
        let expireCal = dateCal;
        let testNameCal = reagentData[indexCal].name.toUpperCase();
        console.log(testNameCal);
        let shortNameCal = reagentData[indexCal].shName;
        let flexPerBoxCal = reagentData[indexCal].flexPerBox;
        let numOfBoxsCal = boxNumberCal;
        let pkgTypeCal = typeCal;
        let partNumberCal = referenceCal;
        let methodDataCal = {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        fetch('/remove/' + testNameCal + '.' + shortNameCal + '.' + expireCal + '.' + lotCal + '.' + flexPerBoxCal + '.' + numOfBoxsCal + "." + pkgTypeCal + "." + partNumberCal, methodDataCal)
          .then(response => {
            console.log(response)
          })
        document.querySelector("#refNumCal").innerHTML = "";
        document.querySelector("#lotNumberCal").innerHTML = "";
        document.querySelector("#exDateCal").innerHTML = "";
        document.querySelector("#test_nameCal").innerHTML = "";
        document.querySelector("#flexPerBoxCal").innerHTML = "";
        // document.querySelector("#numberBoxs").value = "";
        document.querySelector(".barcodeNumberCal").value = "";
        document.querySelector('.noteCal').innerHTML = '"Box Removed From Inventoy"'
        document.querySelector('.noteCal').style.color = "red";
      }, 2000)
    }

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

      } else if (dropDownValue == 9) {
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
      setTimeout(function getInfoOther() {
        boxNumberOther = 1;

        let lotOther = lotNumberOther;
        let expireOther = dateOther;
        let testNameOther = chemTestNameOther;
        console.log(testNameOther);
        let shortNameOther = chemTestShortNameOther;
        let flexPerBoxOther = flexBoxOther;
        let numOfBoxsOther = boxNumberOther;
        let pkgTypeOther = typeOther;
        let partNumberOther = referenceOther;
        let methodDataOther = {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        fetch('/remove/' + testNameOther + '.' + shortNameOther + '.' + expireOther + '.' + lotOther + '.' + flexPerBoxOther + '.' + numOfBoxsOther + "." + pkgTypeOther + "." + partNumberOther, methodDataOther)
          .then(response => {
            console.log(response)
          })
        document.querySelector("#refNumOther").innerHTML = "";
        document.querySelector("#lotNumberOther").innerHTML = "";
        document.querySelector("#exDateOther").innerHTML = "";
        document.querySelector("#test_nameOther").innerHTML = "";
        document.querySelector("#flexPerBoxOther").innerHTML = "";
        // document.querySelector("#numberBoxs").value = "";
        document.querySelector(".barcodeNumberOther").value = "";
        document.querySelector('.noteOther').innerHTML = '"Box Removed From Inventoy"'
        document.querySelector('.noteOther').style.color = "red";
      }, 2000)
    }
  });