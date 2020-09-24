const inventoryContainer = document.querySelector('.inventory-data');
// const inventoryTemplate = document.querySelector('.data-inventory-template');


getData().then(invData => {
    console.log(invData);

    
    function exDate(expireDate) {
        let d1 = new Date();
        let d2 = new Date(expireDate);
        let calDate = (d2 - d1);
        let calDateCor = (calDate / 86400000).toFixed(0);
        // console.log(calDateCor);
        if (calDateCor < 30) {
          return expireDate.bold().fontcolor("darkred");
        } else if (calDateCor < 60) {
          return expireDate.bold().fontcolor("forestgreen");
        } else {
          return expireDate;
        }
      }
  
      function addBoxs(numOfBoxs) {
        // console.log(numOfBoxs);
        let boxs = numOfBoxs;
        let boxFixed = boxs.toString()
        if (boxs <= 1) {
          // alert("Check inventory, reagent needs to be ordered now.");
          return boxFixed.bold().fontcolor('red')
        } else if (boxs <= 2) {
          return boxFixed.bold().fontcolor('red')
        }else if (boxs <= 3) {
          return boxFixed.bold().fontcolor('forestgreen')
        } else {
          return boxs;
        }
      }
    
    function inventoryTemplate(test) {
        return `
      <div class="grid-body">
        <p id="data-type">${test.pkgType}</p>
        <p id="data-fullname">${test.testName}</p>
        <p id="data-shortname">${test.shortName}</p>
        <p id="data-expire-date">${exDate(test.expireDate)}</p>
        <p id="data-lot">${test.lot}</p>
        <p id="data-number-boxs">${addBoxs(test.numOfBoxs)}</p>
        <p id="data-part-number">${test.partNumber}</p>
      </div>  `;
      }

    inventoryContainer.innerHTML = `${invData
        .map(inventoryTemplate)
        .join("")}`;
})

function displayDate(date) {
    return date.toLocaleDateString(
      undefined,
      { day: 'numeric', month: 'long', year: 'numeric' }
    )
  }

  function getData() {
    return fetch('../inventory').then(response => response.json())
    .then((inventoryData) => {
        return testData = inventoryData.sort(function(a, b) {
            let textA = a.testName.toUpperCase();
            let textB = b.testName.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        });
    }).then((inventoryData) => {
      return typeData = inventoryData.sort(function(a, b) {
          let typeA = a.pkgType.toUpperCase();
          let typeB = b.pkgType.toUpperCase();
          return (typeA < typeB) ? -1 : (typeA > typeB) ? 1 : 0;
        }) 
    })
}

