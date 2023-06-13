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
            <td>${montant}.F CFA</td>
            <td id="supprimer" onclick= "this.parentNode.parentNode.remove()"><button>supprimer</button></td>
        </tr>`
    let position='afterbegin'
    let newrow=bodi.insertAdjacentHTML(position, newtableau)
    
    }
    };

   
    
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
            <td id="supprimer"><button  onclick= "this.parentNode.parentNode.remove()">supprimer</button></td>
        </tr>`
    let positions='afterbegin'
    let newrow2=bodi2.insertAdjacentHTML(positions, newtableau)
    
    }
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

