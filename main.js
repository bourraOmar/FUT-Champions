
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
let paceInput = document.getElementById('Pace');
let shoInput = document.getElementById('Sho');
let pasInput = document.getElementById('Pas');
let driInput = document.getElementById('Dri');
let defInput = document.getElementById('Def');
let phyInput = document.getElementById('Phy');

// Buttons for adding and submitting players
let addToTshkila = document.getElementById('add-to-tshkila');
let PlayerPlanCount = 0;
let gkPlanCount = 0;
let occupiedPositions = {};

let array = [];
let index = -1;
let createCard = document.getElementById('card-replacemet');

const openPopup = document.getElementById('open');
const closePopup = document.getElementById('close');
const formPopup = document.getElementById('form');
let addPlayer = document.getElementById('addPlayer');

// Popup toggle for player form
openPopup.addEventListener("click", () => {
  formPopup.classList.remove('hidden');
});
closePopup.addEventListener("click", () => {
  formPopup.classList.add('hidden');
});

// Add player to list and positions
addPlayer.addEventListener("click", function () {
  if (inputName.value !== "" && inputNastion.value !== "" && inputClub.value !== "" && inputPost.value !== "" && paceInput.value !== "" && shoInput.value !== "" && pasInput.value !== "" && driInput.value !== "" && defInput.value !== "" && phyInput.value !== "") {
    addToList(inputName.value, inputNastion.value, inputClub.value, inputPost.value, paceInput.value, shoInput.value, pasInput.value, driInput.value, defInput.value, phyInput.value);
    renderList(inputName.value, inputPost.value, paceInput.value, shoInput.value, pasInput.value, driInput.value, defInput.value, phyInput.value);
    ajouteToPlan(inputName.value, inputPost.value, paceInput.value, shoInput.value, pasInput.value, driInput.value, defInput.value, phyInput.value);
  } else {
    alert("Complete the form!");
  }
});

// Add to the team
addToTshkila.addEventListener("click", function () {
  if (inputName.value !== "" && inputNastion.value !== "" && inputClub.value !== "" && inputPost.value !== "" && paceInput.value !== "" && shoInput.value !== "" && pasInput.value !== "" && driInput.value !== "" && defInput.value !== "" && phyInput.value !== "") {
    ajouteToPlan(inputName.value, inputPost.value, paceInput.value, shoInput.value, pasInput.value, driInput.value, defInput.value, phyInput.value);
  } else {
    alert('Please complete the form!');
  }
});

// Add player details to the list
function addToList(Name, Nastion, Club, Post, pace, sho, pas, dri, def, phy) {
  let cardElement = {
    Name: Name.value,
    Nastion: Nastion.value,
    Club: Club.value,
    Post: Post.value,
    pace: pace.value,
    sho: sho.value,
    pas: pas.value,
    dri: dri.value,
    def: def.value,
    phy: phy.value,
  };
  array.push(cardElement);

  inputName.value = "";
  inputNastion.value = "";
  inputClub.value = "";
  inputPost.value = "";
  paceInput.value = "";
  shoInput.value = "";
  pasInput.value = "";
  driInput.value = "";
  defInput.value = "";
  phyInput.value = "";
}

// Render player details in the list
// function renderList(Name, Post, pace, sho, pas, dri, def, phy) {

//   let div = document.createElement("div");
//   div.innerHTML = `
//     <div class="relative flex flex-col justify-center mt-3 md:mt-0 md:w-24 md:h-32 w-10 h-12 bg-[url('img/card-normal.webp')] bg-no-repeat bg-cover bg-center">
//       <div class="scale-[2] ml-9 mt-[0.3rem]">
//         <div class="absolute ml-1 mt-2">
//           <p class="text-[0.3rem] font-bold">90</p>
//           <p class="text-[0.2rem] ">${Post}</p>
//         </div>
//         <img class="w-7 ml-2 mt-1 z-20" src="img/player.webp" alt="">
//         <p class="absolute font-semibold text-[0.2rem] ml-[1rem]">${Name}</p>
//         <div class="flex ml-[0.4rem] mt-[0.3rem] gap-[0.07rem]">
//           <p class="text-[0.13rem]">PAC</p>
//           <p class="text-[0.13rem]">SHO</p>
//           <p class="text-[0.13rem]">PAS</p>
//           <p class="text-[0.13rem]">DRI</p>
//           <p class="text-[0.13rem]">DEF</p>
//           <p class="text-[0.13rem]">PHY</p>
//         </div>
//         <div class="flex ml-[0.4rem] mt-[-0.05rem] gap-[0.1rem]">
//           <p class="text-[0.17rem] font-bold">${pace}</p>
//           <p class="text-[0.17rem] font-bold">${sho}</p>
//           <p class="text-[0.17rem] font-bold">${pas}</p>
//           <p class="text-[0.17rem] font-bold">${dri}</p>
//           <p class="text-[0.17rem] font-bold">${def}</p>
//           <p class="text-[0.17rem] font-bold">${phy}</p>
//         </div>
//         <div class="flex ml-[0.9rem] mt-[0.1rem] gap-[0.4rem]">
//           <img class="w-[0.21rem]" src="img/120.webp" alt="">
//           <img class="h-[0.2rem] w-[0.3rem] mt-[]" src="img/ar.webp" alt="">
//         </div>
//       </div>
//     </div>
//   `;
//   createCard.appendChild(div);
// }

// Add player to the team plan based on their position
function ajouteToPlan(Name, Post, pace, sho, pas, dri, def, phy) {
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="relative flex flex-col justify-center mt-3 md:mt-0 md:w-24 md:h-32 w-10 h-12 bg-[url('img/card-normal.webp')] bg-no-repeat bg-cover bg-center">
      <div class="scale-[2] ml-9 mt-[0.3rem]">
        <div class="absolute ml-1 mt-2">
          <p class="text-[0.3rem] font-bold">90</p>
          <p class="text-[0.2rem] ">${Post}</p>
        </div>
        <img class="w-7 ml-2 mt-1 z-20" src="img/player.webp" alt="">
        <p class="absolute font-semibold text-[0.2rem] ">${Name}</p>
        <div class="flex ml-[0.4rem] mt-[0.3rem] gap-[0.07rem]">
          <p class="text-[0.13rem]">PAC</p>
          <p class="text-[0.13rem]">SHO</p>
          <p class="text-[0.13rem]">PAS</p>
          <p class="text-[0.13rem]">DRI</p>
          <p class="text-[0.13rem]">DEF</p>
          <p class="text-[0.13rem]">PHY</p>
        </div>
        <div class="flex ml-[0.4rem] mt-[-0.05rem] gap-[0.1rem]">
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
  
  // Add player to the appropriate position in the team
  addPositionToPlan(Post, div);
}

// Add the player card to the correct position section
function addPositionToPlan(planPosition, div) {
  switch (planPosition) {
    case "LW":
      lw.innerHTML = "";
      lw.appendChild(div);
      break;
    case "ST":
      st.innerHTML = "";
      st.appendChild(div);
      break;
    case "RW":
      rw.innerHTML = "";
      rw.appendChild(div);
      break;
    case "LCM":
      lCm.innerHTML = "";
      lCm.appendChild(div);
      break;
    case "CDM":
      cDm.innerHTML = "";
      cDm.appendChild(div);
      break;
    case "RCM":
      rCm.innerHTML = "";
      rCm.appendChild(div);
      break;
    case "LB":
      lb.innerHTML = "";
      lb.appendChild(div);
      break;
    case "LCB":
      lCb.innerHTML = "";
      lCb.appendChild(div);
      break;
    case "RCB":
      rCb.innerHTML = "";
      rCb.appendChild(div);
      break;
    case "RB":
      rb.innerHTML = "";
      rb.appendChild(div);
      break;
  }
}
