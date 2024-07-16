
let soatid = document.getElementById('soat')
let minutid = document.getElementById('minut')
let sekundid = document.getElementById('sekund')

// let soat = 0;
// let minut = 0
// let sekund = 0;

// setInterval(function(){
//     sekund++
//     if (sekund === 60) {
//         sekund = 0
//         minut = minut + 1
//      }
//      if(minut === 60){
//         minut = 0
//         soat = soat + 1

//      }
//     sekundid.innerHTML=sekund
//     minutid.innerHTML=minut + " : "
//     soatid.innerHTML=soat + " : "
// },1000)










setInterval(function(){
    let vaqt = new Date();
    soatid.innerHTML= vaqt.getHours()  
    minutid.innerHTML = vaqt.getMinutes()
    sekundid.innerHTML= + vaqt.getSeconds()
},1000)






