
import './App.css';

  
  let buttons = document.querySelector('.buttons');
  let btn = document.querySelectorAll('span');
  let value = document.getElementById('value');
  let toggleBtn = document.querySelector('.toggleBtn');
  let body = document.querySelector('body')

  for(let i=0; i<btn.length;i++){
    btn[i].addEventListener("click", function(){
 
      if(this.innerHTML=="="){
        value.innerHTML = eval(value.innerHTML);
      }else{ 
        if(this.innerHTML=="Clear"){
          value.innerHTML = "";  
        }
        else{
          value.innerHTML += this.innerHTML;
        }
      }
    }
    ) 
    toggleBtn.onClick = function () {
      body.classList.toggle('dark')
    }
  };
  
  
function App() {
  
  return (
   
    <div className='body'>
    <div className="toggleBtn"> </div>
    <div className="calculator">
       <div className="buttons">
        <h2 id="value"></h2>
        <span id="clear">Clear</span>
        <span>/</span>
        <span>*</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>-</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span id="plus">+</span>
        <span >1</span>
        <span>2</span>
        <span>3</span>
        <span>0</span>
        <span>00</span>
        <span>.</span>
        <span id="equal">=</span>
       </div>
    </div>
    </div>
    
  );
}


export default App;
