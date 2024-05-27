// Accessing some html elements

const selects = document.querySelectorAll(".options select");
const form = document.querySelector("form");
const fromSelect = document.querySelector(".from-select select");
const toSelect = document.querySelector(".to-select select");
const exchangeBtn = document.getElementById("convert");
const msg = document.getElementById("msg");


// Adding all countries from JS file codes.js to show on webpage
try {
  for (let select in selects) { // Accessing  each <select> element and adding options
    for (let country in countryList) { // Accessing  each country from list
      let newOption = document.createElement("option"); // creating an option
      newOption.innerText = country;
      newOption.value = country;
      if (selects[select].name === "from" && country === "USD") { // selecting usd by default  as the base currency
        newOption.selected = "selected";
      } else if (selects[select].name === "to" && country === "PKR") {  // selecting  pkr as default currency when converting to
        newOption.selected = "selected";
      }
      selects[select].appendChild(newOption);  // appending the options
    }
    selects[select].addEventListener("change", (evt) => { // tracking the change in option to change the flag
      updateFlag(evt.target);  // calling function to change the flag and sending the code to country
    });
  }
} catch (e) {
  console.log(e);
}

const updateFlag = (ele) => {  // Function to change flag to selected country
  let code = countryList[ele.value];
  let img = ele.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${code}/shiny/64.png`;  // api link to show selected country flag
};

exchangeBtn.addEventListener("click", async (evt) => {  // async function to get  data when clicked from api of selected currency 
  evt.preventDefault();
  let amount = document.getElementById("amount");
  let amountVal = document.getElementById("amount").value;
  if (amountVal <1 || amountVal === "") {  // if user tries to enter value less then 1 then it automatically set value to 1
    amountVal = 1;
    amount.value = "1";
  }
  const URL = await fetch( 
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromSelect.value.toLowerCase()}/${toSelect.value.toLowerCase()}.json`
  ); // fecting data from api url in json format
  let data = await URL.json();  // converting api data into readable format 
  let rate = data[toSelect.value.toLowerCase()];  // selecting the country rate from the data
  let finalAmount = amountVal * rate;
  msg.innerHTML = `${amountVal} ${fromSelect.value} = ${finalAmount} ${toSelect.value} <br> Last updated ${data.date}`; // showing final value on webpage
});
