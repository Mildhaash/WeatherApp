const tempratureField = document.querySelector(".temp");
const locationField = document.querySelector(".time-location p");
const datefield = document.querySelector(".time-location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search-area");
const iconfield = document.querySelector(".condition img");
const form = document.querySelector('form');

form.addEventListener(`submit`, searchForLocation);

let targetLocation = "New Delhi";


const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${targetLocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    let icon = data.current.condition.icon;


    updateDetails(locationName , time , temp , condition , icon);
    
}

function updateDetails (locationName , time , temp , condition, icon){
    let splitDate = time.split(" ")[0];


    let splitTime = time.split(" ")[1];


    let currentDay = getDayName ( new Date(splitDate).getDay())


    locationField.innerText = locationName;
    datefield.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    tempratureField.innerText = temp;
    weatherField.innerText = condition;
    iconfield.src = iconfield.src = icon.startsWith("http") ? icon : `https:${icon}`;

}


function searchForLocation(e){
    e.preventDefault()

    target = searchField.value;

    fetchResults(target);
}



fetchResults(targetLocation);

function getDayName(number){
    switch(number){
        case 0:
            return 'Sunday'
            case 1:
                  return 'Monday'
                  case 2: 
                      return 'Tuesday'
                      case 3:
                           return 'Wednesday'
                                 case 4: 
                                 return 'Thursday'
                                      case 5:
                                      return 'Friday'
                                           case 6: 
                                           return 'Saturday'

    }
}
