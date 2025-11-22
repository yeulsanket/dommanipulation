var but1 = document.querySelector('button');

var min1 = document.querySelector('main');
but1.addEventListener('click',function(){
   var arr = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Do something today that your future self will thank you for.",
  "The best way to predict the future is to create it.",
  "Every moment is a fresh beginning.",
  "Small steps in the right direction can turn out to be the biggest steps of your life.",
  "Don’t stop until you’re proud.",
  "What you think, you become.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];
var arr1 = Math.floor(Math.random()*arr.length);


    var div = document.createElement('div');
    div.style.height ='30px';
    
    var po1 = Math.floor(Math.random() * 100);
    var po2 = Math.floor(Math.random() * 100);
    var po3 = Math.floor(Math.random() * 100);
    var rot1 = Math.floor(Math.random () *360);




    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);

    // div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

    div.style.left = po1 + "%";
    div.style.top = po2 + "%";
    div.style.right = po3 + "%";
    div.style.rotate =rot1 + 'Deg'
    div.style.color = 'red';
    div.style.fontSize = '45px';
    div.style.fontWeight='300px'
    div.innerText = arr[arr1];

    div.style.position = 'absolute'
    
    min1.appendChild(div); 
    
})
