  let i;
let input_city = document.getElementById("exampleFormControlInput1");
let input_btn = document.getElementById("btn");
let input_eng = document.getElementById("english");
let input_hin = document.getElementById("hindi");
let output_city = document.getElementById("cname");
let output_summary = document.getElementById("summary");
let allsummary =document.getElementById("allsummary")
let select1=document.getElementById("select1");
let select=document.getElementById("select2");
let flexRadioDefault1=document.getElementById("flexRadioDefault1");
let flexRadioDefault2=document.getElementById("flexRadioDefault2");
var image = document.getElementById('myImage');
const deeps = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5eb6da0b09msh41448f6b6d6a03cp1076ccjsncde905608fc2",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};



input_btn.addEventListener("click", () => {
if(isNaN(input_city.value))
{
  text = "Please Number Only";

}
else{
  
    if(select1.selected==true)
  {
    output_city.style.visibility='visible';
    // document.write("1");
    if(flexRadioDefault1.checked==true)
    {
      if(input_city.value==1)
      {
        image.src = "./Images/अर्जुनविषादयोग.jpeg";
        
      }
      else if(input_city.value==2)
      {
        image.src = "./Images/Gita2.jpg";
      }
      else if(input_city.value==3)
      {
        image.src = "./Images/3.png";
      }
      else if(input_city.value==4)
      {
        image.src = "./Images/4.png";
      }
      else if(input_city.value==5)
      {
        image.src = "./Images/5.jpg";
      }
      else if(input_city.value==6)
      {
        image.src = "./Images/6.png";
      }
      else if(input_city.value==7)
      {
        image.src = "./Images/7.webp";
      }
      else if(input_city.value==8)
      {
        image.src = "./Images/8.jpg";
      }
      else if(input_city.value==9)
      {
        image.src = "./Images/9.jpg";
      }
      else if(input_city.value==10)
      {
        image.src = "./Images/10.jpg";
      }
      else if(input_city.value==11)
      {
        image.src = "./Images/11.jpg";
      }
      else if(input_city.value==12)
      {
        image.src = "./Images/12.jpg";
      }
      else if(input_city.value==13)
      {
        image.src = "./Images/Gita2.jpg";
      }
      else if(input_city.value==14)
      {
        image.src = "./Images/14.jpg";
      }
      else if(input_city.value==15)
      {
        image.src = "./Images/15.jpg";
      }
      else if(input_city.value==16)
      {
        image.src = "./Images/16.jpg";
      }
      else if(input_city.value==17)
      {
        image.src = "./Images/17.jpg";
      }
      else if(input_city.value==18)
      {
        image.src = "./Images/.jpg";
      }
      
      fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/" + input_city.value + "/", deeps)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        output_city.innerHTML = `<div>Chapter Name : ` +data.name+`</div>`;
        allsummary.innerHTML = `<div>Chapter summary :` +data.chapter_summary;
      })
      .catch((err) => console.error(err));
    }
    else if(flexRadioDefault2.checked==true)
    {
        // document.write("hindi");
        if(input_city.value==1)
      {
        image.src = "./Images/अर्जुनविषादयोग.jpeg";
        
      }
      else if(input_city.value==2)
      {
        image.src = "./Images/Gita2.jpg";
      }
      else if(input_city.value==3)
      {
        image.src = "./Images/3.png";
      }
      else if(input_city.value==4)
      {
        image.src = "./Images/4.png";
      }
      else if(input_city.value==5)
      {
        image.src = "./Images/5.jpg";
      }
      else if(input_city.value==6)
      {
        image.src = "./Images/6.png";
      }
      else if(input_city.value==7)
      {
        image.src = "./Images/7.webp";
      }
      else if(input_city.value==8)
      {
        image.src = "./Images/8.jpg";
      }
      else if(input_city.value==9)
      {
        image.src = "./Images/9.jpg";
      }
      else if(input_city.value==10)
      {
        image.src = "./Images/10.jpg";
      }
      else if(input_city.value==11)
      {
        image.src = "./Images/11.jpg";
      }
      else if(input_city.value==12)
      {
        image.src = "./Images/12.jpg";
      }
      else if(input_city.value==13)
      {
        image.src = "./Images/Gita2.jpg";
      }
      else if(input_city.value==14)
      {
        image.src = "./Images/14.jpg";
      }
      else if(input_city.value==15)
      {
        image.src = "./Images/15.jpg";
      }
      else if(input_city.value==16)
      {
        image.src = "./Images/16.jpg";
      }
      else if(input_city.value==17)
      {
        image.src = "./Images/17.jpg";
      }
      else if(input_city.value==18)
      {
        image.src = "./Images/.jpg";
      }
      else(input_city.value < 18 || input_city.value== NaN )
      {
        // output_city.innerHTML= "There is only 18 Chapter"
      
      }
        
        fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+ input_city.value + "/", deeps)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        output_city.innerHTML = "<span>अध्याय नाम : </span>" +"<span>"+ data.name+"</span>";
        allsummary.innerHTML = "<span>अध्याय सारांश : </span>"+ "<br>"+ data.chapter_summary_hindi;
      })
      .catch((err) => console.error(err));
    }
    else
    {
      // alert("Please select language");
    }


  }
  else if(select2.selected==true)
  {
    output_city.style.visibility='invisible';
    // document.write("2");
    if(input_city.value==1)
      {
        image.src = "./Images/अर्जुनविषादयोग.jpeg";
        
      }
      else if(input_city.value==2)
      {
        image.src = "./Images/Gita2.jpg";
      }
      else if(input_city.value==3)
      {
        image.src = "./Images/3.png";
      }
      else if(input_city.value==4)
      {
        image.src = "./Images/4.png";
      }
      else if(input_city.value==5)
      {
        image.src = "./Images/5.jpg";
      }
      else if(input_city.value==6)
      {
        image.src = "./Images/6.png";
      }
      else if(input_city.value==7)
      {
        image.src = "./Images/7.webp";
      }
      else if(input_city.value==8)
      {
        image.src = "./Images/8.jpg";
      }
      else if(input_city.value==9)
      {
        image.src = "./Images/9.jpg";
      }
      else if(input_city.value==10)
      {
        image.src = "./Images/10.jpg";
      }
      else if(input_city.value==11)
      {
        image.src = "./Images/11.jpg";
      }
      else if(input_city.value==12)
      {
        image.src = "./Images/12.jpg";
      }
      else if(input_city.value==13)
      {
        image.src = "./Images/Gita2.jpg";
      }
      else if(input_city.value==14)
      {
        image.src = "./Images/14.jpg";
      }
      else if(input_city.value==15)
      {
        image.src = "./Images/15.jpg";
      }
      else if(input_city.value==16)
      {
        image.src = "./Images/16.jpg";
      }
      else if(input_city.value==17)
      {
        image.src = "./Images/17.jpg";
      }
      else if(input_city.value==18)
      {
        image.src = "./Images/18.jpg";
      }
      // location.reload()
      
    if(flexRadioDefault1.checked==true)
    {
        // document.write("english");
        // location.reload()
        fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+ input_city.value +"/verses/", deeps)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (i = 0; i < data.length; i++) 
        {
            
              document.getElementById('allsummary').innerHTML +="<span>  Verses "+data[i].verse_number+"</span>"+"<br>"+data[i].transliteration+"<br>"+"<span> Explanation</span>"+"<br>"+data[i].word_meanings+"<br>";

          
             
          
        }
        
      })
      .catch((err) => console.error(err));
    }
    else if(flexRadioDefault2.checked==true)
    {
        fetch('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/'+ input_city.value +'/verses/', deeps)
        
        .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (i = 0; i < data.length; i++) 
        {
          document.getElementById('allsummary').innerHTML +="<span>श्लोक "+data[i].verse_number+"</span><br>"+data[i].text+"<br>";
          const phoneticsArray = data[i].translations;
          // console.log("hindi"+ JSON.stringify(phoneticsArray))
          for(const obj of phoneticsArray)
          {
            const author=obj.author_name;
            const des=obj.description;

            console.log(author)
            if(author=="Swami Tejomayananda")
            {
              // alert("true")
              console.log("DESCripton"+des)
              document.getElementById('allsummary').innerHTML +="<br><span>अर्थ</span>"+"<br>"+des+"<br>"
            }
          }
        
          
        }
        
      })
      .catch((err) => console.error(err));
      
    }
    else
    {
      alert("Please select language")
    }
  }
  else
  {
    alert("Please select Chapter with summary or chapter with shlock")
  }

}
output_city.innerHTML=text; 
});