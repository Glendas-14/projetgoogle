const body = document.querySelector("body")
btn = body.querySelector(".btn__newContact")
menu = body.querySelector(".burgeur")
sideBar = body.querySelector(".contact__contenair")
bloc = body.querySelector(".addcontact")
btnForm = body.querySelector(".addNewContact")
form = body.querySelector(".form")
arrow = body.querySelector(".arrow")
newLibelle = body.querySelector(".newLibelle")
addLibelle = body.querySelector(".addLibelle")
btnSave = body.querySelector(".btn__saved")
inputPrenon = body.querySelector(".prenomd")
inputNom = body.querySelector(".nom")
inputEmail = body.querySelector(".email")
inputTel = body.querySelector(".tel")
inputfonction = body.querySelector(".fonction")
inputEntreprise = body.querySelector(".entreprise")
contactBlock = body.querySelector("#ajoutContact")
boutonAfficheContact = body.querySelector(".btn")
activeModal = body.querySelector(".contactLeftLibelleBlock");
allContact = body.querySelector(".allContacts")
// menu bergeur
function showMenu() {
   console.log("ok");
   sideBar.classList.toggle("afficher")
}
menu.addEventListener("click", showMenu)
function afficherContact(){
   contactBlock.classList.toggle("afficheContact")
}
boutonAfficheContact.addEventListener("click", afficherContact)

// add a pop over

function showContact() {
   bloc.classList.toggle("show")
}
btn.addEventListener("click", showContact)

// show form

function showform() {
   form.classList.toggle("showform")
   
}
btnForm.addEventListener("click", function(){
   showform()
   allContact.style.display="none"
})
arrow.addEventListener("click", showform)

// add new libelle

function showNewLibelle() {
   newLibelle.classList.toggle("showLibel")
}
addLibelle.addEventListener("click", showNewLibelle)


// add button saved

const tabAddContact = [];
function createContact(prenom, nom, email, telephon, fonction, entreprise) {
   const contactAdd = {
      prenom,
      nom,
      email,
      telephon,
      fonction,
      entreprise,
   }
   tabAddContact.push(contactAdd);
   console.log(tabAddContact);
   return contactAdd;
}
function creatElement(type, propriete = {}) {
   const element = document.createElement(type)
   Object.assign(element, propriete)
   return element;
}
btnSave.addEventListener("click", function () {
   const listContact = creatElement("ul", {id:"ajoutContactList", className:"ajoutContactList"})
   let contact = createContact(inputPrenon.value, inputNom.value, inputEmail.value, inputTel.value, inputfonction.value, inputEntreprise.value)
   const titre = creatElement("li", { textContent: `${contact.prenom} ${contact.nom}` });
   // const nom = creatElement("li", { textContent: contact.nom });
   const email = creatElement("li", { textContent: contact.email });
   const tel = creatElement("li", { textContent: contact.telephon });
   const fonction = creatElement("li", { textContent: contact.fonction });
   const entreprise = creatElement("li", { textContent: contact.entreprise });
  
   listContact.append(titre, email, tel, fonction, entreprise);
   contactBlock.append(listContact)
   showform()
   allContact.style.display="block"
})


