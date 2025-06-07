//  sessionStorage.setItem('test', 'jack');
//  sessionStorage.setItem('test2', '42');


 //creare la coppia chiave-valore nel sessionStorage(dura solo quella sessione)
//  alert(sessionStorage.getItem('test2'))
// legge il valore della chiave 'email' dal sessionStorage
//console.log(sessionStorage.getItem('email));

//session se borran cuando se cierra la sesion

//local jamas se borran hasta que se borran los datos locales

const btnAdd = document.getElementById('btnAdd');
const btnRemove = document.getElementById('btnRemove');
const btnShow = document.getElementById('btnShow');

const colors = ['red','green','blue','yellow','purple','orange'];

const persona = {
  id:1,
  name:'michy'
}

 btnAdd.addEventListener('click',()=>{
  localStorage.setItem('prova','querty1234')
  localStorage.setItem('colors',JSON.stringify(colors))// cuando es un objeto complejo debemos pasarlo a una string
  localStorage.setItem('person', JSON.stringify(persona))
 });

 ``
 btnShow.addEventListener('click',()=>{
   //alert(localStorage.getItem('prova'));
    //const colori = JSON.parse(localStorage.getItem('colors'))// la volvemos a convertir en un array
    //alert(colori[1]);
    const person = JSON.parse(localStorage.getItem('person'))
   alert(person.name);
 });


btnRemove.addEventListener('click',()=>{

     alert(localStorage.clear()) //elimina todo

    //localStorage.removeItem('prova') //elimina solo el item que elegimos
});

