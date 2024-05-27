// Accessing HTML Elements to show data or some calculation

const srchBtn = document.getElementById("search");
const para = document.getElementById("msg-weather");
const currentTemp = document.getElementById("currents");
const feelsLike = document.getElementById("feels");
const regardTemp = document.getElementById("regards");
const humidity = document.getElementById("humidity");
const imageUrl = document.getElementById("img");
const lastUpdateMsg = document.getElementById("update");

let city; // Global  variable for the searched City

// IFEE Function to excuted the API to show the data of the default city "Islamabad" in browser
(async function () {
  try {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=Islamabad`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b30df36acemsh2df5d7048522666p115814jsna4551e7ac9ee",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    //  Fetching Data from the Weather API
    const response = await fetch(url, options);
    const result = await response.json();

    // Fetching the desired data from Weather API
    let currentData = result["current"];
    let conditionData = currentData["condition"];
    let imgIcon = "http:" + conditionData["icon"];
    let temp = currentData["temp_c"];
    let feelstemp = currentData["feelslike_c"];
    let condData = conditionData["text"];
    let humi = currentData["humidity"];
    let updateTime = currentData["last_updated"];

    // Showing the specified data on web
    imageUrl.src = imgIcon;
    currentTemp.innerText = `Current Temp: ${temp}`;
    feelsLike.innerText = `Feels Like ${feelstemp}`;
    regardTemp.innerText = `It's ${condData}`;
    humidity.innerText = `Humidity : ${humi}%`;
    lastUpdateMsg.innerText = updateTime;
  } catch (error) {
    alert("Try Again!! Something went wrong");
    console.error(error);
  }
})();

srchBtn.addEventListener("click", () => {
  const weather = async () => {
    city = document.getElementById("city-name").value;
    if (city === "") {
      alert("Please enter a valid City Name!");
    } else {
      try {
        const Url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "b30df36acemsh2df5d7048522666p115814jsna4551e7ac9ee",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        };

        //  Fetching Data from the Weather API
        const response = await fetch(Url, options);
        const result = await response.json();
        // console.log(result);

        // Fetching the desired data from Weather API
        let currentData = result["current"];
        let conditionData = currentData["condition"];
        let imgIcon = "http:" + conditionData["icon"];
        // console.log(currentData);
        let temp = currentData["temp_c"];
        let feelstemp = currentData["feelslike_c"];
        let condData = conditionData["text"];
        //   console.log(conditionData['text']);
        //   console.log(currentData['cloud']);
        let humi = currentData["humidity"];
        let updateTime = currentData["last_updated"];

        // Showing the specified data on web
        para.innerText = `Weather For ${city}`;
        imageUrl.src = imgIcon;
        currentTemp.innerText = `Current Temp : ${temp}`;
        feelsLike.innerText = `Feels Like : ${feelstemp}`;
        regardTemp.innerText = `It's ${condData}`;
        humidity.innerText = `Humidity : ${humi}%`;
        lastUpdateMsg.innerText = updateTime;
      } catch (error) {
        alert("Try Again!! Something went wrong");
        console.error(error);
      }
    }
  };
  weather(); // Calling the Function 
});
