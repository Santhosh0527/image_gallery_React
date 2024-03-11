import React from 'react';
import ReactDOM from 'react-dom/client';
import Img1 from "./assets/images/r1.jpg"
import Img2 from "./assets/images/r2.jpg"
import Img3 from "./assets/images/r3.jpg"
import Img4 from "./assets/images/r4.jpg"
import "./style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

// Component
function Gallery(probs){
  return(<div className='container'>
{
 probs.Content.map(function(item){
   return(<div>
      
    <img src={item.Img} alt="" />
    <p>{item.Title}</p>
    </div>)
  
 })
}
    
  </div>)
}

var Content=[
  {Img:Img1,
    Title:"Julie's Rabbit Ears"},
  {
    Img:Img2,
    Title:"The Innocent Look"
  },
  {
    Img:Img3,
    Title:"Big Eyed Buggy"
  },
  {
    Img:Img4,
    Title:"The Saint Doggo"
  },
  {Img:Img1,
    Title:"Julie's Rabbit Ears"},
  {
    Img:Img2,
    Title:"The Innocent Look"
  },
  {
    Img:Img3,
    Title:"Big Eyed Buggy"
  },
  {
    Img:Img4,
    Title:"The Saint Doggo"
  }    
  ]
root.render(<Gallery Content={Content}></Gallery>






)
