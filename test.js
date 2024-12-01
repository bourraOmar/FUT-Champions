let st = document.getElementById('cardSt'); 
let lw = document.getElementById('cardLw');
let rw = document.getElementById('cardRw'); 
let lCm = document.getElementById('cardCml'); 
let rCm = document.getElementById('cardCmr'); 
let cDm = document.getElementById('cardCdm'); 
let lb = document.getElementById('cardLb'); 
let lCb = document.getElementById('cardCbl'); 
let rCb = document.getElementById('cardCbr'); 
let rb = document.getElementById('cardRb');
let gk = document.getElementById('cardGk'); 


const ajoutForm = document.getElementById('ajoutForm');
const createForm = document.getElementById('createForm');

let inputName = document.getElementById('Name');
let inputNastion = document.getElementById('Nastionality');
let inputClub = document.getElementById('Club');
let inputPost = document.getElementById('Position');
let inputStatus = document.getElementById('Status')
let paceInput = document.getElementById('Pace');
let shoInput = document.getElementById('Sho');
let pasInput = document.getElementById('Pas');
let driInput = document.getElementById('Dri');
let defInput = document.getElementById('Def');
let phyInput = document.getElementById('Phy');


let addToTshkila = document.getElementById('add-to-tshkila');
let PlayerPlanCount = 0;
let gkPlanCount = 0;
let occupiedPositions = {};

let staduim = document.getElementById('staduim');
let replacemet = document.getElementById('replacemet');


let array = [];
console.log(array);

let index = -1;

const openPopup = document.getElementById('open');
const closePopup = document.getElementById('close');
const formPopup = document.getElementById('form');
let addPlayer = document.getElementById('addPlayer');


openPopup.addEventListener("click", () => {
  formPopup.classList.remove('hidden');
});
closePopup.addEventListener("click", () => {
  formPopup.classList.add('hidden');
});


addToTshkila.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputName.value !== "" && inputNastion.value !== "" && inputClub.value !== "" && inputPost.value !== "" && inputStatus.value !== "" && paceInput.value !== "" && shoInput.value !== "" && pasInput.value !== "" && driInput.value !== "" && defInput.value !== "" && phyInput.value !== "") {
    if (index > -1) {
      array[index] = {
        Name: inputName.value,
        Post: inputPost.value,
        pace: paceInput.value,
        status: inputStatus.value,
        sho: shoInput.value,
        pas: pasInput.value,
        dri: driInput.value,
        def: defInput.value,
        phy: phyInput.value,
      };
      index = -1;
      addToTshkila.value = "Add New Player";
    }else{
      ajoutePlayer(inputName.value, inputPost.value, inputStatus.value, paceInput.value, shoInput.value, pasInput.value, driInput.value, defInput.value, phyInput.value);
    }
    formPopup.classList.add("hidden");
    
  } else {
    alert('Please complete the form!');
  }
});


function addToList(Name, Post, pace, status, sho, pas, dri, def, phy) {
  let cardElement = {
    Name: Name,
    Post: Post,
    pace: pace,
    status : status,
    sho: sho,
    pas: pas,
    dri: dri,
    def: def,
    phy: phy,
  };
  array.push(cardElement);

  if (index === -1) {  
    inputName.value = "";
    inputNastion.value = "";
    inputClub.value = "";
    inputPost.value = "";
    inputStatus.value = "";
    paceInput.value = "";
    shoInput.value = "";
    pasInput.value = "";
    driInput.value = "";
    defInput.value = "";
    phyInput.value = "";
  }
}


function ajoutePlayer(Name, Post, pace, status, sho, pas, dri, def, phy) {
  staduim.innerHTML = "";
  replacemet.innerHTML = "";

  array.forEach((cardElement, Id) => {
      let div = document.createElement("div");
      div.innerHTML = `
     <div class="relative flex flex-col justify-center mt-3 md:mt-0 md:w-24 md:h-32 w-10 h-12 bg-[url('img/card-normal.webp')] bg-no-repeat bg-cover bg-center">
          <div class="scale-[2] ml-9 mt-[0.3rem]">
            <div class="absolute ml-1 mt-1">
              <p class="text-[0.3rem] font-bold">${Math.floor((Number(pace) + Number(sho) + Number(pas) + Number(dri) + Number(def) + Number(phy))/6)}</p>
              <p class="text-[0.2rem] ">${Post}</p>
            </div>
            <img class="w-7 ml-2 mt-1 z-20" src="img/player.webp" alt="">
            <p class="absolute ml-4 font-semibold text-[0.2rem] ">${Name}</p>
            <div class="flex ml-[0.225rem] mt-[0.3rem] gap-[0.165rem]">
              <p class="text-[0.13rem]">PAC</p>
              <p class="text-[0.13rem]">SHO</p>
              <p class="text-[0.13rem]">PAS</p>
              <p class="text-[0.13rem]">DRI</p>
              <p class="text-[0.13rem]">DEF</p>
              <p class="text-[0.13rem]">PHY</p>
            </div>
            <div class="flex ml-[0.220rem] mt-[-0.05rem] gap-[0.2rem]">
              <p class="text-[0.17rem] font-bold">${pace}</p>
              <p class="text-[0.17rem] font-bold">${sho}</p>
              <p class="text-[0.17rem] font-bold">${pas}</p>
              <p class="text-[0.17rem] font-bold">${dri}</p>
              <p class="text-[0.17rem] font-bold">${def}</p>
              <p class="text-[0.17rem] font-bold">${phy}</p>
            </div>
            <div class="flex ml-[0.9rem] mt-[0.1rem] gap-[0.4rem]">
              <img class="w-[0.21rem]" src="img/120.webp" alt="">
              <img class="h-[0.2rem] w-[0.3rem] mt-[]" src="img/ar.webp" alt="">
            </div>
          </div>
        </div>
      `;
       
      if(cardElement.status === "replacemet"){
        replacemet.appendChild(div);
      }else{
        addPositionPlayer(cardElement.Post, div);
      }
  })
}

function addPositionPlayer(planPosition, div) {
  switch (planPosition) {
    case "LW":
      lw.appendChild(div);  // Append instead of overwriting
      break;
    case "ST":
      st.appendChild(div);
      break;
    case "RW":
      rw.appendChild(div);
      break;
    case "LCM":
      lCm.appendChild(div);
      break;
    case "CDM":
      cDm.appendChild(div);
      break;
    case "RCM":
      rCm.appendChild(div);
      break;
    case "LB":
      lb.appendChild(div);
      break;
    case "LCB":
      lCb.appendChild(div);
      break;
    case "RCB":
      rCb.appendChild(div);
      break;
    case "RB":
      rb.appendChild(div);
      break;
  }
}
// let titleInput = document.getElementById("title");
// let dateInput = document.getElementById("date");
// let statusSelect = document.getElementById("status");
// let prioritySelect = document.getElementById("priority");
// let descInput = document.getElementById("description");
// let submitInput = document.getElementById("submit");
// let formation = document.getElementById("myForm");

// let todoContainer = document.querySelector(".toDo");
// let doingContainer = document.querySelector(".doing");
// let doneContainer = document.querySelector(".done");

// let array = [];
// let editIndex = -1;

// const openPopupButton = document.getElementById("openPopup");
// const closePopupButton = document.getElementById("closePopup");
// const popupForm = document.getElementById("popupForm");

// openPopupButton.addEventListener("click", () => {
//   popupForm.classList.remove("hidden");
//   setTimeout(() => {
//       popupForm.classList.remove("opacity-0", "scale-90");
//       popupForm.classList.add("opacity-100", "scale-100");
//   }, 10); 
// });

// closePopupButton.addEventListener("click", () => {
//   popupForm.classList.remove("opacity-100", "scale-100");
//   popupForm.classList.add("opacity-0", "scale-95");
//   setTimeout(() => popupForm.classList.add("hidden"), 700);
// });



// formation.addEventListener("submit", function (event) {
//     event.preventDefault();
//     if (titleInput.value !== "" && dateInput.value !== "" && prioritySelect.value !== "" && statusSelect.value !== "" && descInput.value !== "") {
//         if (editIndex > -1) {
//             array[editIndex] = {
//                 title: titleInput.value,
//                 date: dateInput.value,
//                 status: statusSelect.value,
//                 priority: prioritySelect.value,
//                 desc: descInput.value
//             };
//             editIndex = -1;
//             submitInput.value = "Add";
//         } else {
//             add_to_array(titleInput.value, dateInput.value, statusSelect.value, prioritySelect.value, descInput.value);
//         }
//         renderList();
//         popupForm.classList.add("hidden");

//     } else {
//         alert("Complete the form!");
//     }
// });

// function add_to_array(title, date, status, priority, desc) {
//     let card_element = {
//         title: title,
//         date: date,
//         status: status,
//         priority: priority,
//         desc: desc,
//     };
//     array.push(card_element);

//     titleInput.value = "";
//     dateInput.value = "";
//     statusSelect.value = "";
//     prioritySelect.value = "";
//     descInput.value = "";
// }

// function renderList() {
//     todoContainer.innerHTML = "";
//     doingContainer.innerHTML = "";
//     doneContainer.innerHTML = "";

//     array.forEach((card_element, index) => {
//         let div = document.createElement("div");
//         div.classList.add('border', 'p-2', 'm-2', 'rounded');

//         if (card_element.priority === "op1") {
//             div.classList.add('border-l-4', 'border-red-500', 'bg-red-200');
//         } else if (card_element.priority === "op2") {
//             div.classList.add('border-l-4', 'border-yellow-500', 'bg-yellow-200');
//         } else if (card_element.priority === "op3") {
//             div.classList.add('border-l-4', 'border-green-500', 'bg-green-200');
//         }

//         div.innerHTML = `
//         <h3 class="text-lg font-semibold">${card_element.title}</h3>
//         <p class="text-sm text-black">Date: ${card_element.date}</p>
//         <p class="text-sm text-black">Priority: ${card_element.priority}</p>
//         <p class="text-sm text-black">Description: ${card_element.desc}</p>
//         <button class="delete-btn bg-red-500 text-white p-1 rounded mt-2 mr-2 hover:bg-red-600">Delete</button>
//         <button class="edit-btn bg-green-500 text-white p-1 rounded mt-2 mr-2 hover:bg-green-600">Edit</button>
//         `;

//         if (card_element.status === "toDo") {
//             todoContainer.appendChild(div);
//         } else if (card_element.status === "Doing") {
//             doingContainer.appendChild(div);
//         } else if (card_element.status === "Done") {
//             doneContainer.appendChild(div);
//         }
//         div.querySelector(".delete-btn").addEventListener("click", () => {
//             array.splice(index, 1);
//             renderList();
//         });

//         div.querySelector(".edit-btn").addEventListener("click", () => {
//             titleInput.value = card_element.title;
//             dateInput.value = card_element.date;
//             statusSelect.value = card_element.status;
//             prioritySelect.value = card_element.priority;
//             descInput.value = card_element.desc;

//             editIndex = index;
//             submitInput.value = "Save";
//             popupForm.classList.remove("hidden");
//         });
//     });
// }