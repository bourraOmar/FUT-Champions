console.log(players);

let teamInput = document.getElementById('teamPlan');
let stInput = document.getElementById('ST'); 
let lwInput = document.getElementById('LW');
let rwInput = document.getElementById('RW'); 
let cmlInput = document.getElementById('CML'); 
let cmrInput = document.getElementById('CMR'); 
let cdmInput = document.getElementById('CMD'); 
let lbInput = document.getElementById('LB'); 
let cblInput = document.getElementById('CBL'); 
let cbrInput = document.getElementById('CBR'); 
let rbInput = document.getElementById('RB'); 
let gkInput = document.getElementById('GK'); 

let cardstInput = document.getElementById('cardSt'); 
let cardlwInput = document.getElementById('cardLw');
let cardrwInput = document.getElementById('cardRw'); 
let cardcmlInput = document.getElementById('cardCml'); 
let cardcmrInput = document.getElementById('cardCmr'); 
let cardcdmInput = document.getElementById('cardCmd'); 
let cardlbInput = document.getElementById('cardLb'); 
let cardcblInput = document.getElementById('cardCbl'); 
let cardcbrInput = document.getElementById('cardCbr'); 
let cardrbInput = document.getElementById('cardRb'); 
let cardgkInput = document.getElementById('cardGk'); 

const openPopup = document.getElementById('open');
const closePopup = document.getElementById('close');
const formPopup = document.getElementById('form');
const addPlayer = document.getElementById('addPlayer');

const ajoutForm = document.getElementById('ajoutForm');

const createForm = document.getElementById('createForm');
let inputName = document.getElementById('Name');
let inputNastion = document.getElementById('Nationality');
let inputClub = document.getElementById('Club');
let inputPost = document.getElementById('Position');

let paceInput = document.getElementById('Pace');
let hooInput = document.getElementById('Hoo');
let pasInput = document.getElementById('Pas');
let driInput = document.getElementById('Dri');
let defInput = document.getElementById('Def');
let phyInput = document.getElementById('Phy');

let array = [];
let index = -1;

const createCard = document.querySelector('#card');
 





openPopup.addEventListener("click",()=>{
  formPopup.classList.remove('hidden')
});
closePopup.addEventListener("click",()=>{
  formPopup.classList.add('hidden')
});


creatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (inputName.value !== "" || inputNation.value !== "" || inputClub.value !== "" || inputPost.value !== "") {
      add_to_array(inputName.value, inputNation.value, inputClub.value, inputPost.value);
      renderList();

    }
    else {
      alert("Complete the form!");
    }
  });


  function add_to_list(Name,Nation,Club,Post,pace,hoo,pas,dri,def,phy){
    let card_element = {
      Name : Name,
      Nation : Nation,
      Club : Club,
      Post : Post,
      pace : pace,
      hoo : hoo,
      pas : pas,
      dri : dri,
      def : def,
      phy : phy,
    };
    array.push(card_element);

    inputName.value = "";
    inputNation.value = "";
    inputClub.value = "";
    inputPost.value = "";
    paceInput.value = "";
    hooInput.value = "";
    pasInput.value = "";
    driInput.value = "";
    defInput.value = "";
    phyInput.value = "";
  }
  function renderList(){
    createCart.innerHTML = "";

    array.forEach((card_element, index) => {
      let div = decument.creatElement("div");
      div.innerHTML = `
        <div class="relative flex flex-col justify-center mt-3 md:mt-0 md:w-24 md:h-32 w-10 h-12 bg-[url('img/card-normal.webp')] bg-no-repeat bg-cover bg-center">
              <div class="scale-[2] ml-9 mt-[0.3rem]">
                <div class="absolute ml-1 mt-2">
                  <p class="text-[0.3rem] font-bold">90</p>
                  <p class="text-[0.2rem] ">${inputPost.value}</p>
                </div>
                <img class="w-7 ml-2 mt-1 z-20 " src="img/player.webp" alt="">
                <p class="absolute font-semibold text-[0.2rem] ml-[1rem]">${inputName.value}</p>
                <div class="flex ml-[0.4rem] mt-[0.3rem] gap-[0.07rem]">
                  <p class="text-[0.13rem]">PAC</p>
                  <p class="text-[0.13rem]">SHO</p>
                  <p class="text-[0.13rem]">PAS</p>
                  <p class="text-[0.13rem]">DRI</p>
                  <p class="text-[0.13rem]">DEF</p>
                  <p class="text-[0.13rem]">PHY</p>
                </div>
                <div class="flex ml-[0.4rem] mt-[-0.05rem] gap-[0.1rem]">
                  <p class="text-[0.17rem] font-bold">${paceInput.value}</p>
                  <p class="text-[0.17rem] font-bold">${hooInput.value}</p>
                  <p class="text-[0.17rem] font-bold">${pasInput.value}</p>
                  <p class="text-[0.17rem] font-bold">${driInput.value}</p>
                  <p class="text-[0.17rem] font-bold">${defInput.value}</p>
                  <p class="text-[0.17rem] font-bold">${phyInput.value}</p>
                </div>
                <div class="flex ml-[0.9rem] mt-[0.1rem] gap-[0.4rem]">
                  <img class="w-[0.21rem] " src="img/120.webp" alt="">
                  <img class="h-[0.2rem] w-[0.3rem] mt-[]" src="img/ar.webp" alt="">
                </div>
              </div>
            </div>
      `
    })
  }