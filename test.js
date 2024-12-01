// // function gkForm() {
// //   let gkDiv = document.cardElement('div');
// //   gkDiv.classList.add('grid', 'grid-cols-2', 'gap-x-4', 'mx-4');
// //   gkDiv.innerHTML = `
// //             <div class="flex flex-col">
// //             <label class="text-white text-lg font-semibold mb-2">diving</label>
// //             <input id="div" class="border-2 border-gray-700 rounded-lg p-2 bg-transparent text-white" type="number"
// //               placeholder="Pace">
// //           </div>
// //           <div class="flex flex-col">
// //             <label class="text-white text-lg font-semibold mb-2">handling</label>
// //             <input id="han" class="border-2 border-gray-700 rounded-lg p-2 bg-transparent text-white" type="number"
// //               placeholder="Shooting">
// //           </div>
// //           <div class="flex flex-col">
// //             <label class="text-white text-lg font-semibold mb-2">kicking</label>
// //             <input id="kic" class="border-2 border-gray-700 rounded-lg p-2 bg-transparent text-white" type="number"
// //               placeholder="Passing">
// //           </div>
// //           <div class="flex flex-col">
// //             <label class="text-white text-lg font-semibold mb-2">reflexes</label>
// //             <input id="ref" class="border-2 border-gray-700 rounded-lg p-2 bg-transparent text-white" type="number"
// //               placeholder="Dribbling">
// //           </div>
// //           <div class="flex flex-col">
// //             <label class="text-white text-lg font-semibold mb-2">speed</label>
// //             <input id="spe" class="border-2 border-gray-700 rounded-lg p-2 bg-transparent text-white" type="number"
// //               placeholder="Defending">
// //           </div>
// //           <div class="flex flex-col">
// //             <label class="text-white text-lg font-semibold mb-2">positioning</label>
// //             <input id="pos" class="border-2 border-gray-700 rounded-lg p-2 bg-transparent text-white" type="number"
// //               placeholder="Physical">
// //           </div>`;



// // Render player details in the list
// // function renderList(Name, Post, pace, sho, pas, dri, def, phy) {

// //   let div = document.createElement("div");
// //   div.innerHTML = `
// //     <div class="relative flex flex-col justify-center mt-3 md:mt-0 md:w-24 md:h-32 w-10 h-12 bg-[url('img/card-normal.webp')] bg-no-repeat bg-cover bg-center">
// //       <div class="scale-[2] ml-9 mt-[0.3rem]">
// //         <div class="absolute ml-1 mt-2">
// //           <p class="text-[0.3rem] font-bold">90</p>
// //           <p class="text-[0.2rem] ">${Post}</p>
// //         </div>
// //         <img class="w-7 ml-2 mt-1 z-20" src="img/player.webp" alt="">
// //         <p class="absolute font-semibold text-[0.2rem] ml-[1rem]">${Name}</p>
// //         <div class="flex ml-[0.4rem] mt-[0.3rem] gap-[0.07rem]">
// //           <p class="text-[0.13rem]">PAC</p>
// //           <p class="text-[0.13rem]">SHO</p>
// //           <p class="text-[0.13rem]">PAS</p>
// //           <p class="text-[0.13rem]">DRI</p>
// //           <p class="text-[0.13rem]">DEF</p>
// //           <p class="text-[0.13rem]">PHY</p>
// //         </div>
// //         <div class="flex ml-[0.4rem] mt-[-0.05rem] gap-[0.1rem]">
// //           <p class="text-[0.17rem] font-bold">${pace}</p>
// //           <p class="text-[0.17rem] font-bold">${sho}</p>
// //           <p class="text-[0.17rem] font-bold">${pas}</p>
// //           <p class="text-[0.17rem] font-bold">${dri}</p>
// //           <p class="text-[0.17rem] font-bold">${def}</p>
// //           <p class="text-[0.17rem] font-bold">${phy}</p>
// //         </div>
// //         <div class="flex ml-[0.9rem] mt-[0.1rem] gap-[0.4rem]">
// //           <img class="w-[0.21rem]" src="img/120.webp" alt="">
// //           <img class="h-[0.2rem] w-[0.3rem] mt-[]" src="img/ar.webp" alt="">
// //         </div>
// //       </div>
// //     </div>
// //   `;
// //   createCard.appendChild(div);
// // }








// // let titleInput = document.getElementById("title");
// // let dateInput = document.getElementById("date");
// // let statusSelect = document.getElementById("status");
// // let prioritySelect = document.getElementById("priority");
// // let descInput = document.getElementById("description");
// // let submitInput = document.getElementById("submit");
// // let formation = document.getElementById("myForm");

// // let todoContainer = document.querySelector(".toDo");
// // let doingContainer = document.querySelector(".doing");
// // let doneContainer = document.querySelector(".done");

// // let array = [];
// // let editIndex = -1;

// // const openPopupButton = document.getElementById("openPopup");
// // const closePopupButton = document.getElementById("closePopup");
// // const popupForm = document.getElementById("popupForm");

// // openPopupButton.addEventListener("click", () => {
// //   popupForm.classList.remove("hidden");
// //   setTimeout(() => {
// //       popupForm.classList.remove("opacity-0", "scale-90");
// //       popupForm.classList.add("opacity-100", "scale-100");
// //   }, 10); 
// // });

// // closePopupButton.addEventListener("click", () => {
// //   popupForm.classList.remove("opacity-100", "scale-100");
// //   popupForm.classList.add("opacity-0", "scale-95");
// //   setTimeout(() => popupForm.classList.add("hidden"), 700);
// // });



// // formation.addEventListener("submit", function (event) {
// //     event.preventDefault();
// //     if (titleInput.value !== "" && dateInput.value !== "" && prioritySelect.value !== "" && statusSelect.value !== "" && descInput.value !== "") {
// //         if (editIndex > -1) {
// //             array[editIndex] = {
// //                 title: titleInput.value,
// //                 date: dateInput.value,
// //                 status: statusSelect.value,
// //                 priority: prioritySelect.value,
// //                 desc: descInput.value
// //             };
// //             editIndex = -1;
// //             submitInput.value = "Add";
// //         } else {
// //             add_to_array(titleInput.value, dateInput.value, statusSelect.value, prioritySelect.value, descInput.value);
// //         }
// //         renderList();
// //         popupForm.classList.add("hidden");

// //     } else {
// //         alert("Complete the form!");
// //     }
// // });

// // function add_to_array(title, date, status, priority, desc) {
// //     let card_element = {
// //         title: title,
// //         date: date,
// //         status: status,
// //         priority: priority,
// //         desc: desc,
// //     };
// //     array.push(card_element);

// //     titleInput.value = "";
// //     dateInput.value = "";
// //     statusSelect.value = "";
// //     prioritySelect.value = "";
// //     descInput.value = "";
// // }

// // function renderList() {
// //     todoContainer.innerHTML = "";
// //     doingContainer.innerHTML = "";
// //     doneContainer.innerHTML = "";

// //     array.forEach((card_element, index) => {
// //         let div = document.createElement("div");
// //         div.classList.add('border', 'p-2', 'm-2', 'rounded');

// //         if (card_element.priority === "op1") {
// //             div.classList.add('border-l-4', 'border-red-500', 'bg-red-200');
// //         } else if (card_element.priority === "op2") {
// //             div.classList.add('border-l-4', 'border-yellow-500', 'bg-yellow-200');
// //         } else if (card_element.priority === "op3") {
// //             div.classList.add('border-l-4', 'border-green-500', 'bg-green-200');
// //         }

// //         div.innerHTML = `
// //         <h3 class="text-lg font-semibold">${card_element.title}</h3>
// //         <p class="text-sm text-black">Date: ${card_element.date}</p>
// //         <p class="text-sm text-black">Priority: ${card_element.priority}</p>
// //         <p class="text-sm text-black">Description: ${card_element.desc}</p>
// //         <button class="delete-btn bg-red-500 text-white p-1 rounded mt-2 mr-2 hover:bg-red-600">Delete</button>
// //         <button class="edit-btn bg-green-500 text-white p-1 rounded mt-2 mr-2 hover:bg-green-600">Edit</button>
// //         `;

// //         if (card_element.status === "toDo") {
// //             todoContainer.appendChild(div);
// //         } else if (card_element.status === "Doing") {
// //             doingContainer.appendChild(div);
// //         } else if (card_element.status === "Done") {
// //             doneContainer.appendChild(div);
// //         }
// //         div.querySelector(".delete-btn").addEventListener("click", () => {
// //             array.splice(index, 1);
// //             renderList();
// //         });

// //         div.querySelector(".edit-btn").addEventListener("click", () => {
// //             titleInput.value = card_element.title;
// //             dateInput.value = card_element.date;
// //             statusSelect.value = card_element.status;
// //             prioritySelect.value = card_element.priority;
// //             descInput.value = card_element.desc;

// //             editIndex = index;
// //             submitInput.value = "Save";
// //             popupForm.classList.remove("hidden");
// //         });
// //     });
// // }





// let pName = document.getElementById("pName");
// let pPosition = document.getElementById("pPosition");
// let pNationality = document.getElementById("pNationality");

// let pClub = document.getElementById("pClub");


// let pPace = document.getElementById("pPace");
// let pShooting = document.getElementById("pShooting");
// let pPassing = document.getElementById("pPassing");
// let pDribbling = document.getElementById("pDribbling");
// let pDefending = document.getElementById("pDefending");
// let pPhysical = document.getElementById("pPhysical");

// let editName = document.getElementById("editName");

// let editPosition = document.getElementById("editPosition");
// let editNationality = document.getElementById("editNationality");

// let editClub = document.getElementById("editClub");


// let editPace = document.getElementById("editPace");
// let editShooting = document.getElementById("editShooting");
// let editPassing = document.getElementById("editPassing");
// let editDribbling = document.getElementById("editDribbling");
// let editDefending = document.getElementById("editDefending");
// let editPhysical = document.getElementById("editPhysical");

// let add = document.getElementById("add");
// let addPlayer = document.getElementById("addPlayer");
// let addModal = document.getElementById("addModal");
// let editModal = document.getElementById("editModal");


// //Array of players 
// let players = [];


// function closeAddModal() {
//     addModal.classList.add("hidden");
// }
// function closeEditModal() {
//     editModal.classList.add("hidden");
// }
// function add_Player(name,  pos, nat, flag, club, pace, shoot, pass, dribl, def, phys, status) {
//     const player = {
//         id: Date.now(),
//         name: name,
//         photo: photo,
//         pos: pos,
//         nat: nat,
//         flag: flag,
//         club: club,
//         logo: logo,
//         rat: rat,
//         pace: pace,
//         shoot: shoot,
//         pass: pass,
//         dribl: dribl,
//         def: def,
//         phys: phys,
//         status: status,
//     };
//     players.push(player);
//     updateScreen();
//     storeData(players);
// }

// function updateFields() {
//     if (pPosition.value === "GK") {
//         let labelPace = document.getElementById("labelPace");
//         let labelShooting = document.getElementById("labelShooting");
//         let labelPassing = document.getElementById("labelPassing");
//         let labelDribbling = document.getElementById("labelDribbling");
//         let labelDefending = document.getElementById("labelDefending");
//         let labelPhysical = document.getElementById("labelPhysical");

//         labelPace.innerText = "Diving";
//         labelShooting.innerText = "Handling";
//         labelPassing.innerText = "Kicking";
//         labelDribbling.innerText = "Reflexes";
//         labelDefending.innerText = "Speed";
//         labelPhysical.innerText = "Positioning";

//         pPace.id = "pDiving";
//         pShooting.id = "pHandling";
//         pPassing.id = "pKicking";
//         pDribbling.id = "pReflexes";
//         pDefending.id = "pSpeed";
//         pPhysical.id = "pPositioning";
//     } else {
//         labelPace.innerText = "Pace";
//         labelShooting.innerText = "Shooting";
//         labelPassing.innerText = "Passing";
//         labelDribbling.innerText = "Dribbling";
//         labelDefending.innerText = "Defending";
//         labelPhysical.innerText = "Physical";

//         pPace.id = "pPace";
//         pShooting.id = "pShooting";
//         pPassing.id = "pPassing";
//         pDribbling.id = "pDribbling";
//         pDefending.id = "pDefending";
//         pPhysical.id = "pPhysical";
//     }
// }

// pPosition.addEventListener('change', updateFields);

// updateFields();


// add.onclick = function () {
//     //validation 
//     const nameRegex = /^[A-Za-z\s]+$/;
//     const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;
//     if(pName.value.trim() === "" || pPhoto.value.trim() === "" || pPosition.value.trim() === "" || pNationality.value.trim() === "" || pFlag.value.trim() === "" || pClub.value.trim() === "" || pLogo.value.trim() === "" || pRating.value.trim() === "" || pPace.value.trim() === "" || pShooting.value.trim() === "" || pPassing.value.trim() === "" || pDribbling.value.trim() === "" || pDefending.value.trim() === "" || pPhysical.value.trim() === "" || pStatus.value.trim() === "" ){
//         window.alert("some fields are empty !");
//     }else if(!nameRegex.test(pName.value.trim())){
//         window.alert("Player name contain only letters and spaces.");
//     }else if(!nameRegex.test(pNationality.value.trim())){
//         window.alert("Player nationality contain only letters and spaces.");
//     }else if(!nameRegex.test(pClub.value.trim())){
//         window.alert("Player club contain only letters and spaces.");
//     }else if(pPosition.value !=="LB" && pPosition.value !=="CBL" && pPosition.value !=="CBR" && pPosition.value !=="RB" && pPosition.value !=="LM" && pPosition.value !=="CML" && pPosition.value !=="CMR" && pPosition.value !=="RM" && pPosition.value !=="STL" && pPosition.value !=="STR" && pPosition.value !=="GK"){
//         window.alert("Invalid Position !");
//     }else if (!urlRegex.test(pPhoto.value)) {
//         window.alert("The URL of the photo is invalid!");
//     }else if (!urlRegex.test(pFlag.value)) {
//         window.alert("The URL of the flag is invalid!");
//     }else if (!urlRegex.test(pLogo.value)) {
//         window.alert("The URL of the logo is invalid!");
//     }else if(pRating.value < 0 || pRating.value > 100 || pPace.value < 0 || pPace.value > 100 || 
//         pShooting.value < 0 || pShooting.value > 100 || pPassing.value < 0 || pPassing.value > 100 || 
//         pDribbling.value < 0 || pDribbling.value > 100 || pDefending.value < 0 || pDefending.value > 100 || 
//         pPhysical.value < 0 || pPhysical.value > 100 ){
//             window.alert("one or more statistics are wrong !");
//     }else if(pStatus.value !== "Principal" && pStatus.value !== "Echange"){
//         window.alert("Invalide Status !");
//     }
//     else{
//     add_Player(pName.value, pPhoto.value, pPosition.value, pNationality.value,
//         pFlag.value, pClub.value, pLogo.value, pRating.value, pPace.value,
//         pShooting.value, pPassing.value, pDribbling.value, pDefending.value, pPhysical.value, pStatus.value);
//     clearFields();
//     closeAddModal();
//     }
// }

// function clearFields() {
//     pName.value = ""; 
//     pPhoto.value = ""; 
//     pPosition.value = "";
//     pNationality.value = "";
//     pFlag.value = "";
//     pClub.value = "";
//     pLogo.value = "";
//     pRating.value = "";
//     pPace.value = "";
//     pShooting.value = "";
//     pPassing.value = "";
//     pDribbling.value = "";
//     pDefending.value = "";
//     pPhysical.value = "";
//     pStatus.value = "";
// }

// function updateScreen() {
//     const LB = document.getElementById("LB");
//     const CBL = document.getElementById("CBL");
//     const CBR = document.getElementById("CBR");
//     const RB = document.getElementById("RB");
//     const LM = document.getElementById("LM");
//     const CML = document.getElementById("CML");
//     const CMR = document.getElementById("CMR");
//     const RM = document.getElementById("RM");
//     const STL = document.getElementById("STL");
//     const STR = document.getElementById("STR");
//     const GK = document.getElementById("GK");
//     const echange = document.getElementById("echange");

//     LB.innerHTML = "";
//     CBL.innerHTML = "";
//     CBR.innerHTML = "";
//     RB.innerHTML = "";
//     LM.innerHTML = "";
//     CML.innerHTML = "";
//     CMR.innerHTML = "";
//     RM.innerHTML = "";
//     STL.innerHTML = "";
//     STR.innerHTML = "";
//     GK.innerHTML = "";
//     echange.innerHTML = "";

//     players.forEach(player => {
//         const playerElement = document.createElement("div");
//         if(player.pos === "GK"){
//             playerElement.innerHTML = `
//                         <div class="flex items-start justify-center mt-1 text-white">
//                             <div class="flex flex-col mt-1 lg:mt-4">
//                                 <span class="text-[8px] md:text-lg font-bold">${player.rat}</span>
//                                 <span class="text-[8px] md:text-lg">${player.pos}</span>
//                             </div>
//                             <img src="${player.photo}" class=" w-[30px] md:w-[70px] lg:w-[100px] h-auto">
//                         </div>
//                         <h4 class="text-white text-[6px] md:text-[12px] lg:text-[16px] text-center">${player.name}</h4>
//                         <div class="stats flex justify-center lg:gap-1 text-[4px] md:text-[9px] lg:text-[12px] font-bold px-1 lg:px-2">
//                             <div>
//                                 <span>DIV</span>
//                                 <p>${player.pace}</p>
//                             </div>
//                             <div>
//                                 <span>HAN</span>
//                                 <p>${player.shoot}</p>
//                             </div>
//                             <div>
//                                 <span>KIC</span>
//                                 <p>${player.pass}</p>
//                             </div>
//                             <div>
//                                 <span>REF</span>
//                                 <p>${player.dribl}</p>
//                             </div>
//                             <div>
//                                 <span>SPD</span>
//                                 <p>${player.def}</p>
//                             </div>
//                             <div>
//                                 <span>POS</span>
//                                 <p>${player.phys}</p>
//                             </div>
//                         </div>

//                         <div class="icons flex justify-evenly">
//                             <img src="${player.flag}" class="w-3 h-3 md:w-6 md:h-6 lg:w-8 lg:h-8" alt="flag">
//                             <img src="${player.logo}" class="w-3 h-3 md:w-6 md:h-6 lg:w-8 lg:h-8" alt="logo">
//                         </div>
//                         <div class="flex justify-evenly mt-2">
//                             <button class="edit bg-yellow-400 text-white px-2 py-1 text-xs" onclick="editPlayer(${player.id})">Edit</button>
//                             <button class="delete bg-red-400 text-white px-2 py-1 text-xs" onclick="deletePlayer(${player.id})">Delete</button>
//                         </div>

//         `;
//         }else{
//         playerElement.innerHTML = `
//                         <div class="flex items-start justify-center mt-1 text-white">
//                             <div class="flex flex-col mt-1 lg:mt-4">
//                                 <span class="text-[8px] md:text-lg font-bold">${player.rat}</span>
//                                 <span class="text-[8px] md:text-lg">${player.pos}</span>
//                             </div>
//                             <img src="${player.photo}" class=" w-[30px] md:w-[70px] lg:w-[100px] h-auto">
//                         </div>
//                         <h4 class="text-white text-[6px] md:text-[12px] lg:text-[16px] text-center">${player.name}</h4>
//                         <div class="stats flex justify-center lg:gap-1 text-[4px] md:text-[9px] lg:text-[12px] font-bold px-1 lg:px-2">
//                             <div>
//                                 <span>PAC</span>
//                                 <p>${player.pace}</p>
//                             </div>
//                             <div>
//                                 <span>SHO</span>
//                                 <p>${player.shoot}</p>
//                             </div>
//                             <div>
//                                 <span>PAS</span>
//                                 <p>${player.pass}</p>
//                             </div>
//                             <div>
//                                 <span>DRI</span>
//                                 <p>${player.dribl}</p>
//                             </div>
//                             <div>
//                                 <span>DEF</span>
//                                 <p>${player.def}</p>
//                             </div>
//                             <div>
//                                 <span>PHY</span>
//                                 <p>${player.phys}</p>
//                             </div>
//                         </div>

//                         <div class="icons flex justify-evenly">
//                             <img src="${player.flag}" class="w-3 h-3 md:w-6 md:h-6 lg:w-8 lg:h-8" alt="flag">
//                             <img src="${player.logo}" class="w-3 h-3 md:w-6 md:h-6 lg:w-8 lg:h-8" alt="logo">
//                         </div>
//                         <div class="flex justify-evenly mt-2">
//                             <button class="edit bg-yellow-400 text-white px-2 py-1 text-xs" onclick="editPlayer(${player.id})">Edit</button>
//                             <button class="delete bg-red-400 text-white px-2 py-1 text-xs" onclick="deletePlayer(${player.id})">Delete</button>
//                         </div>

//         `;
//         }
//         if (player.status == "Principal") {
//             switch (player.pos) {
//                 case "LB":
//                     LB.appendChild(playerElement);
//                     break;
//                 case "CBL":
//                     CBL.appendChild(playerElement);
//                     break;
//                 case "CBR":
//                     CBR.appendChild(playerElement);
//                     break;
//                 case "RB":
//                     RB.appendChild(playerElement);
//                     break;
//                 case "LM":
//                     LM.appendChild(playerElement);
//                     break;
//                 case "CML":
//                     CML.appendChild(playerElement);
//                     break;
//                 case "CMR":
//                     CMR.appendChild(playerElement);
//                     break;
//                 case "RM":
//                     RM.appendChild(playerElement);
//                     break;
//                 case "STL":
//                     STL.appendChild(playerElement);
//                     break;
//                 case "STR":
//                     STR.appendChild(playerElement);
//                     break;
//                 case "GK":
//                     GK.appendChild(playerElement);
//                     break;
//                 default:
//                     window.alert("Invalide Position !");
//                     break;
//             }
//         } else if (player.status == "Echange") {
//             let len = echange.childNodes.length;
//             if (len >= 6) {
//                 window.alert("You can't add more than 6 players in reserve zone ")
//             } else {
//                 const li = document.createElement("li");
//                 playerElement.classList.add("h-[70px]", "w-[50px]", "md:w-[120px]", "md:h-[160px]", "lg:h-[222px]", "lg:w-[170px]", "bg-[url('img/badge_gold.png')]", "bg-contain", "bg-center", "bg-no-repeat", "flex", "flex-col");
//                 li.appendChild(playerElement);
//                 echange.appendChild(li);
//             }
//         } else {
//             window.alert("invalide status ");
//         }
//     });
// }

// let save = document.getElementById("save");
// function editPlayer(id) {
//     const index = players.findIndex(p => p.id === id);
//     if (index > -1) {
//         editName.value = players[index].name;
//         editPhoto.value = players[index].photo;
//         editPosition.value = players[index].pos;
//         editNationality.value = players[index].nat;
//         editFlag.value = players[index].flag;
//         editClub.value = players[index].club;
//         editLogo.value = players[index].logo;
//         editRating.value = players[index].rat;
//         editPace.value = players[index].pace;
//         editShooting.value = players[index].shoot;
//         editPassing.value = players[index].pass;
//         editDribbling.value = players[index].dribl;
//         editDefending.value = players[index].def;
//         editPhysical.value = players[index].phys;
//         editStatus.value = players[index].status;

//         editModal.classList.remove("hidden");

//         save.onclick = function () {
//             players[index].name = editName.value;
//             players[index].photo = editPhoto.value;
//             players[index].pos = editPosition.value;
//             players[index].nat = editNationality.value;
//             players[index].flag = editFlag.value;
//             players[index].club = editClub.value;
//             players[index].logo = editLogo.value;
//             players[index].rat = editRating.value;
//             players[index].pace = editPace.value;
//             players[index].shoot = editShooting.value;
//             players[index].pass = editPassing.value;
//             players[index].dribl = editDribbling.value;
//             players[index].def = editDefending.value;
//             players[index].phys = editPhysical.value;
//             players[index].status = editStatus.value;

//             storeData(players);
//             updateScreen();
//             closeEditModal();
//         };

//     }
// }

// function deletePlayer(id) {
//     players = players.filter(player => player.id !== id);
//     storeData(players);
//     updateScreen();
// }

// function storeData(array) {
//     window.localStorage.setItem("players", JSON.stringify(array));
// }

// function fetchData() {
//     let data = window.localStorage.getItem("players");
//     if (data) {
//         players = JSON.parse(data);
//         updateScreen();
//     }
// }




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
