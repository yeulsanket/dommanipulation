var but1 = document.querySelector('button');

var min1 = document.querySelector('main');
but1.addEventListener('click',function(){
    
    var div = document.createElement('div');
    div.style.height ='30px';
    div.style.width  ='30px';
    var po1 = Math.floor(Math.random() * 100);
    var po2 = Math.floor(Math.random() * 100);
    var po3 = Math.floor(Math.random() * 100);
    var rot1 = Math.floor(Math.random () *360);




    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

    div.style.left = po1 + "%";
    div.style.top = po2 + "%";
    div.style.top = po3 + "%";
    div.style.rotate =rot1 + 'Deg'


    div.style.position = 'absolute'
    
    min1.appendChild(div); 
    
})
