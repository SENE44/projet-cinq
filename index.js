let validation=document.getElementById('sub');
validation.addEventListener('click', afficher)

function afficher(e){
    e.preventDefault()
    let titre=document.getElementById('titre').value;
    let montant=document.getElementById('MONTANT').value;
    let bodi=document.getElementById('tb')
    
    if(titre!=''&& montant!='')
    { 
        let newtableau=
        `
        <tr>
            <td>${titre}</td>
            <td id="letd">${montant}.F CFA</td>
            <td id="supprimer"><button  onclick= "this.parentNode.parentNode.remove()">supprimer</button></td>
        </tr>`
    let position='afterbegin'
    let newrow=bodi.insertAdjacentHTML(position, newtableau)
    }
    
    //let sous=document.querySelectorAll('#supprimer')
      //  sous[i].addEventListener('click', ()=>{
        //let puser=parseInt(document.getElementById('lasomme').textContent)
        //let mont=parseInt(montant)
      //let  pusser=`${puser-mont}F CFA`
      //let pucer=document.getElementById('lasomme')
    //console.log(pusser)

     // pusser.innerText=pusser


       // })
    
     
        i()
        n()
      let sous=document.querySelectorAll('#supprimer')
    for(let i=0; i<1; i++){
       sous[i].addEventListener('click', ()=>{
        let puser=parseInt(document.getElementById('lasomme').textContent)
        let mont=parseInt(montant)
      let  pusser=`${puser-mont}F CFA`
      let pucer=document.getElementById('lasomme')
    console.log(pusser)

      pucer.innerText=pusser
      n()
      })
    }
    }
    
    function i(){
        let numbers=parseInt(document.querySelector('#MONTANT').value)
        let puser=parseInt(document.getElementById('lasomme').textContent)
      let  pusser=`${puser+numbers}F CFA`
      let pucer=document.getElementById('lasomme')
      pucer.innerText=pusser

        }
    
//validations des revenues
let valider=document.getElementById('submi');
valider.addEventListener('click', affichage)
let number=document.querySelectorAll('tr')

function affichage(e){
    e.preventDefault()
    let titres=document.getElementById('titres').value;
    let montants=document.getElementById('MONTANTs').value;
    let bodi2=document.getElementById('tbe')
    if(titres!=''&& montants!='')
    { 
        let newtableau=
        `
        <tr>
            <td>${titres}</td>
            <td>${montants}.F CFA</td>
            <td id="supprimers"><button  onclick= "this.parentNode.parentNode.remove()">supprimer</button></td>
        </tr>`
    let positions='afterbegin'
    let newrow2=bodi2.insertAdjacentHTML(positions, newtableau)
    
    }m()
        n()
        let sous=document.querySelectorAll('#supprimers')
        for(let i=0; i<1; i++){
           sous[i].addEventListener('click', ()=>{
            let puser=parseInt(document.getElementById('lasommes').textContent)
            let mont=parseInt(montants)
          let  pusser=`${puser-mont}F CFA`
          let pucer=document.getElementById('lasommes')
        console.log(pusser)
    
          pucer.innerText=pusser
          n()
          })
        }
        
    }

    function m(){
        let numberss=parseInt(document.querySelector('#MONTANTs').value)
        let pusers=parseInt(document.getElementById('lasommes').textContent)
      let  pussers=`${pusers+numberss}F CFA`
      let pucers=document.getElementById('lasommes')
      pucers.innerText=pussers

        }
    
    function n(){
        let pusers=parseInt(document.getElementById('lasommes').textContent)
        let puser=parseInt(document.getElementById('lasomme').textContent)
        let difference=document.getElementById('diff')
        let diff=`${pusers-puser}F CFA`
        difference.innerText=diff

    }


    //affichage des formulaires 
    let action=document.getElementById('icon1')
    let dep=document.getElementById('depenses')
    action.addEventListener('click', affichageform1)
function affichageform1(){
    dep.style.visibility='visible'
}


let action2=document.getElementById('icon2')
    let dep2=document.getElementById('revenus')
    action2.addEventListener('click', affichageform2)
function affichageform2(){
    dep2.style.visibility='visible'
}

