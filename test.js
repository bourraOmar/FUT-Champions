let players = [];
console.log(players);

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', _ => {
    mobileMenu.classList.toggle('hidden');
});
function showHideList() {
    let form = document.getElementById("add-player");
    form.classList.toggle("hidden");
  }
  function showHideListGk() {
    let form = document.getElementById("add-Gk");
    form.classList.toggle("hidden");
  }



let playerName = document.getElementById("player-name");
let gkName = document.getElementById("gk-name");
let playerPosition = document.getElementById("player-position");
let playerGkPosition = document.getElementById("player-position-gk");
let paceStatu = document.getElementById("pace-status");
let shootingStatu = document.getElementById("shooting-status");
let passingStatu = document.getElementById("passing-status");
let dribblinStatu = document.getElementById("dribbling-status");
let defendingStatu = document.getElementById("defending-status");
let physicalStatu = document.getElementById("physical-status");
let divingStatu = document.getElementById("diving-status");
let handlingStatu = document.getElementById("handling-status");
let kickingStatu = document.getElementById("kicking-status");
let reflexesStatu = document.getElementById("reflexes-status");
let speedStatu = document.getElementById("speed-status");
let positioningStatu = document.getElementById("positioning-status");
const btnAddTeamPlayer = document.getElementById("add-team-player");
const btnAddGkPlayer = document.getElementById("add-team-gk");
let addStatiqueChoise = document.getElementById("statique-add");
const inputverifi = document.querySelectorAll('input[type="number"]');
const lw = document.getElementById("lw");
const st = document.getElementById("st");
const rw = document.getElementById("rw");
const lCm = document.getElementById("l-cm");
const cAm = document.getElementById("cam");
const rCm = document.getElementById("r-cm");
const lb = document.getElementById("lb");
const lCb = document.getElementById("l-cb");
const rCb = document.getElementById("r-cb");
const rb = document.getElementById("rb");
const gk = document.getElementById("gk");
let PlayerPlanCount = 0;
let gkPlanCount = 0;
let replacements = [];
let occupiedPositions = {};


  for (let i = 0; i < inputverifi.length; i++) {
  inputverifi[i].addEventListener("input", function () {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2); 
    }
  });
}


btnAddTeamPlayer.addEventListener("click", function () {

  if (playerName.value.trim() !== "" && playerPosition.value !== "" && paceStatu.value.trim() !== "" && shootingStatu.value.trim() !== "" && passingStatu.value.trim() !== "" && dribblinStatu.value.trim() !== "" && defendingStatu.value.trim() !== "" && physicalStatu.value.trim() !== "") {
    
    if (occupiedPositions[playerPosition.value]) {
      alert("This position is already occupied! Please choose another position.");
    } else {

      if (PlayerPlanCount < 10) {
        addToArray(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
        addToPlan(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
        PlayerPlanCount++;

        occupiedPositions[playerPosition.value] = playerName.value;

        // playerName.value = "";
        // playerPosition.value = "";
        // paceStatu.value = "";
        // shootingStatu.value = "";
        // passingStatu.value = "";
        // dribblinStatu.value = "";
        // defendingStatu.value = "";
        // physicalStatu.value = "";
      } else {
        replacements.push({
          "name": playerName.value,
          "position": playerPosition.value,
          "rating": Math.floor((Number(paceStatu.value) + Number(shootingStatu.value) + Number(passingStatu.value) + Number(dribblinStatu.value) + Number(defendingStatu.value) + Number(physicalStatu.value)) / 6),
          "pace": paceStatu.value,
          "shooting": shootingStatu.value,
          "passing": passingStatu.value,
          "dribbling": dribblinStatu.value,
          "defending": defendingStatu.value,
          "physical": physicalStatu.value
        });

        updateReplacement(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
      }
    }
  } else {
    alert("Please enter the correct info!");
  }
});



btnAddGkPlayer.addEventListener("click", function () {
  if (gkName.value.trim() !== "" && playerGkPosition.value !== "" && divingStatu.value.trim() !== "" && handlingStatu.value.trim() !== "" && kickingStatu.value.trim() !== "" && reflexesStatu.value.trim() !== "" && speedStatu.value.trim() !== "" && positioningStatu.value.trim() !== "") {
    if (gkPlanCount <= 1) {
      addToArrayA(gkName.value, playerGkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
      console.log(players);
      addGkToPlan(gkName.value, playerGkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
      // playerName.value = "";
      // playerPosition.value = "";
      // paceStatu.value = "";
      // shootingStatu.value = "";
      // passingStatu.value = "";
      // dribblinStatu.value = "";
      // defendingStatu.value = "";
      // physicalStatu.value = "";
    } else {
        replacements.push({
          "name": playerName.value,
          "position": playerGkPosition.value,
          "rating": Math.floor((Number(divingStatu.value) + Number(handlingStatu.value) + Number(kickingStatu.value) + Number(reflexesStatu.value) + Number(speedStatu.value) + Number(positioningStatu.value)) / 6),
          "diving": divingStatu.value,
          "handling": handlingStatu.value,
          "kicking": kickingStatu.value,
          "reflexes": reflexesStatu.value,
          "speed": speedStatu.value,
          "positioning": positioningStatu.value
        });

    updateReplacementGK(playerName.value, playerGkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
    }

  }else {
    alert("please entre the corect info !");
  }
});


function addToArray(name, position, pace, shooting, passing, dribbling, defending, physical){
  let playerAdded = {
    "name" : name,
    "position" : position,
    "rating" : Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6),
    "pace" : pace,
    "shooting" : shooting,
    "passing" : passing,
    "dribbling" : dribbling,
    "defending" : defending,
    "physical" : physical
  }
  players.push(playerAdded);
}

function addToArrayA(name, position, diving, handling, kicking, reflexes, speed, positioning){
  let gkAdded = {
    "name" : name,
    "position" : position,
    "rating" : Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6),
    "diving" : diving,
    "handling" : handling,
    "kicking" : kicking,
    "reflexes" : reflexes,
    "speed" : speed,
    "positioning" : positioning
  }
  players.push(gkAdded);
}

function addToPlan(name, position, pace, shooting, passing, dribbling, defending, physical) {
  let divPlayerCard = document.createElement("div");
  divPlayerCard.innerHTML =`
<button type="button" class="flex flex-col items-center">
    <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6)}</p>
                <p class="text-[0.625rem] text-white">${position}</p>
            </span>
            <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
            </div>
        </div>
         <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
            <div class=" mt-1">
                <p class="text-[0.650rem] font-medium text-white">${name}</p>
            </div>
            <div class="flex justify-center gap-1">
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAC</p>
                    <p class="text-[0.5rem] font-bold text-white">${pace}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">SHO</p>
                    <p class="text-[0.5rem] font-bold text-white">${shooting}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAS</p>
                    <p class="text-[0.5rem] font-bold text-white">${passing}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DRI</p>
                    <p class="text-[0.5rem] font-bold text-white">${dribbling}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DEF</p>
                    <p class="text-[0.5rem] font-bold text-white">${defending}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PHY</p>
                    <p class="text-[0.5rem] font-bold text-white">${physical}</p>
                </div>
            </div>
            <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
                <img src="/img/argentina.webp" class="w-2" alt="">
                <img src="/img/msl.webp" class="w-2" alt="">
                <img src="/img/inter.webp" class="w-2" alt="">
            </div>
         </div>
        
    </div>
</button>
  `

  addPositionToPlan(position, divPlayerCard); 
}

function addGkToPlan(name, position, diving, handling, kicking, reflexes, speed, positioning) {
  let divPlayerCard = document.createElement("div");
  divPlayerCard.innerHTML =`
<button type="button" class="flex flex-col items-center">
    <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6)}</p>
                <p class="text-[0.625rem] text-white">${position}</p>
            </span>
            <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
            </div>
        </div>
         <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
            <div class=" mt-1">
                <p class="text-[0.650rem] font-medium text-white">${name}</p>
            </div>
            <div class="flex justify-center gap-1">
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAC</p>
                    <p class="text-[0.5rem] font-bold text-white">${diving}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">SHO</p>
                    <p class="text-[0.5rem] font-bold text-white">${handling}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAS</p>
                    <p class="text-[0.5rem] font-bold text-white">${kicking}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DRI</p>
                    <p class="text-[0.5rem] font-bold text-white">${reflexes}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DEF</p>
                    <p class="text-[0.5rem] font-bold text-white">${speed}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PHY</p>
                    <p class="text-[0.5rem] font-bold text-white">${positioning}</p>
                </div>
            </div>
            <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
                <img src="/img/argentina.webp" class="w-2" alt="">
                <img src="/img/msl.webp" class="w-2" alt="">
                <img src="/img/inter.webp" class="w-2" alt="">
            </div>
         </div>
        
    </div>
</button>
  `

  addPositionGkToPlan(position,divPlayerCard); 
}

function addPositionToPlan(planPosition, divPlayerCard){
  switch (planPosition) {
    case "LW":
      lw.innerHTML="";
      lw.appendChild(divPlayerCard);
      break;
    case "ST":
      st.innerHTML="";
      st.appendChild(divPlayerCard);
      break;
    case "RW":
      rw.innerHTML="";
      rw.appendChild(divPlayerCard);
      break;
    case "LCM":
      lCm.innerHTML="";
      lCm.appendChild(divPlayerCard);
      break;
    case "CAM":
      cAm.innerHTML="";
      cAm.appendChild(divPlayerCard);
      break;
    case "RCM":
      rCm.innerHTML="";
      rCm.appendChild(divPlayerCard);
      break;
    case "LB":
      lb.innerHTML="";
      lb.appendChild(divPlayerCard);
      break;
    case "LCB":
      lCb.innerHTML="";
      lCb.appendChild(divPlayerCard);
      break;
    case "RCB":
      rCb.innerHTML="";
      rCb.appendChild(divPlayerCard);
      break;
    case "RB":
      rb.innerHTML="";
      rb.appendChild(divPlayerCard);
      break;
  }
}

function addPositionGkToPlan(planPosition, divPlayerCard){
  switch (planPosition) {
    case "GK":
      gk.innerHTML="";
      gk.appendChild(divPlayerCard);
      break;
  }
}

function updateReplacement(name, position, pace, shooting, passing, dribbling, defending, physical) {
  let replacementList = document.getElementById("replacement-list");
  const replacementLimit = 14; 
  
  if (replacementList.children.length >= replacementLimit) {
      alert("Replacement slots are full. Cannot add more players.");
      return;
  }

  let li = document.createElement("li");
  li.classList.add('list-none');
  li.innerHTML = `
<button type="button" class="flex flex-col items-center">
  <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
      <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
          <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
              <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6)}</p>
              <p class="text-[0.625rem] text-white">${position}</p>
          </span>
          <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
          </div>
      </div>
       <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
          <div class=" mt-1">
              <p class="text-[0.650rem] font-medium text-white">${name}</p>
          </div>
          <div class="flex justify-center gap-1">
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAC</p>
                  <p class="text-[0.5rem] font-bold text-white">${pace}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">SHO</p>
                  <p class="text-[0.5rem] font-bold text-white">${shooting}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAS</p>
                  <p class="text-[0.5rem] font-bold text-white">${passing}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DRI</p>
                  <p class="text-[0.5rem] font-bold text-white">${dribbling}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DEF</p>
                  <p class="text-[0.5rem] font-bold text-white">${defending}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PHY</p>
                  <p class="text-[0.5rem] font-bold text-white">${physical}</p>
              </div>
          </div>
          <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
              <img src="/img/argentina.webp" class="w-2" alt="">
              <img src="/img/msl.webp" class="w-2" alt="">
              <img src="/img/inter.webp" class="w-2" alt="">
          </div>
       </div>
  </div>
</button>`;

replacementList.appendChild(li);
}

function updateReplacementGK(name, position, diving, handling, kicking, reflexes, speed, positioning) {
  let replacementList = document.getElementById("replacement-list");
  const replacementLimit = 4; 
  
  if (replacementList.children.length >= replacementLimit) {
      alert("Replacement slots are full. Cannot add more players.");
      return;
  }

  let li = document.createElement("li");
  li.classList.add('list-none');
  li.innerHTML = `
<button type="button" class="flex flex-col items-center">
  <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
      <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
          <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
              <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6)}</p>
              <p class="text-[0.625rem] text-white">${position}</p>
          </span>
          <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
          </div>
      </div>
       <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
          <div class=" mt-1">
              <p class="text-[0.650rem] font-medium text-white">${name}</p>
          </div>
          <div class="flex justify-center gap-1">
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAC</p>
                  <p class="text-[0.5rem] font-bold text-white">${diving}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">SHO</p>
                  <p class="text-[0.5rem] font-bold text-white">${handling}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAS</p>
                  <p class="text-[0.5rem] font-bold text-white">${kicking}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DRI</p>
                  <p class="text-[0.5rem] font-bold text-white">${reflexes}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DEF</p>
                  <p class="text-[0.5rem] font-bold text-white">${speed}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PHY</p>
                  <p class="text-[0.5rem] font-bold text-white">${positioning}</p>
              </div>
          </div>
          <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
              <img src="/img/argentina.webp" class="w-2" alt="">
              <img src="/img/msl.webp" class="w-2" alt="">
              <img src="/img/inter.webp" class="w-2" alt="">
          </div>
       </div>
  </div>
</button>`;

replacementList.appendChild(li);
}