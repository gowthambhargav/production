const  colors = ['red',"#EEEEEE",'#FFA1C9','#96CEB4','#EA99D5','#4FBDBA','#FFF89A','#FF7F3F','#F999B7'];

const btn = document.getElementById('btns');
const color = document.querySelector('.color')

btn.addEventListener('click',function(){
    const randomNumber = getRandomNumbers() ;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
    console.log(getRandomNumbers());
   
})

function getRandomNumbers () {
    return Math.floor( Math.random()*colors.length);
};

// console.log(getRandomNumbers);






















