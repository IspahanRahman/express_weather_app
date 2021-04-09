const submitBtn=document.getElementById('submitBtn')
const cityName=document.getElementById('cityName')
const city_name=document.getElementById('city_name')
const temp_status=document.getElementById('temp_status')
const temp_degree=document.getElementById('temp_degree')
const dataHide=document.querySelector('.middle_layer')
const day=document.getElementById('day')
const today_date=document.getElementById('today_date')


const getInfo=async (event)=>{
    event.preventDefault()
   let cityValue=cityName.value

   if(cityValue===""){
       city_name.innerText=`Please write the city name before search`
       dataHide.classList.add('data_hide')
   }
   else{
       try{

        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=b6cd5aa4bb75fbb867c906b56db84e1b`
        const response=await fetch(url)
        const data=await response.json()
        const array=[data]

        console.log(array)
        city_name.innerText=`${array[0].name},${array[0].sys.country}`
        temp_degree.innerText=array[0].main.temp
        const temp_weather=array[0].weather[0].main
        
        // condition check whether it is sunny or cloudy

        if(temp_weather=='Clear'){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
        }
        else if(temp_weather=='Clouds'){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
        }
        else if(temp_weather=='Rain'){
            temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>"
        }
        else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
        }
      
        dataHide.classList.remove('data_hide')

       }catch{
           city_name.innerText=`Please enter the city name properly`
           dataHide.classList.add('data_hide')
       }
   }
   

}
submitBtn.addEventListener('click',getInfo)
const getCurretDay=()=>{
    var weekday=new Array(7)
    weekday[0]="Sunday"
    weekday[1]="Monday"
    weekday[2]="Tuesday"
    weekday[3]="Wednesday"
    weekday[4]="Thursday"
    weekday[5]="Friday"
    weekday[6]="Saturday"

    let currentDate=new Date()
    let days=weekday[currentDate.getDay()]
    day.innerText=days


}
getCurretDay()

const getCurrentDate=()=>{
    var month=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    let now=new Date()
    let months=month[now.getMonth()]
    let date=now.getDate()
     today_date.innerText=`${date}th ${months}`


}
getCurrentDate()