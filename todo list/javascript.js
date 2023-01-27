// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("Kindly Enter Task Name!!!!")
//     }

//     else{
//         document.querySelector('#tasks').innerHTML += 
//         `<li class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <img src="icons8-close.svg">
//                 </button>
//             </li>`;

//         let current_tasks = document.querySelectorAll(".delete");
//         for(let i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }




{/* <i class="far fa-trash-alt"><img src="icons8-close.svg"></i> */}

// let myNodelist = document.getElementsByTagName("LI");
// for (let i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// let close = document.getElementsByClassName("close");
// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     let div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// let list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("myInput").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       let div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }


const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;


btn.addEventListener('click', (e) => {
    if (input.value === '') return 
        createAndDeleteElements(input.value)
    input.value = ''
});

function createAndDeleteElements(value) {
    i++
    // console.log(value);
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.className = 'li';
    li.textContent = value;

    // result.appendChild(li);


    btn.className = 'btn';
    btn.textContent = 'X';
    li.appendChild(btn);

    btn.addEventListener('click', (e) => {
        i--
        total.textContent = i;
        result.removeChild(li);
    });

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    });

    total.textContent = i;

    result.appendChild(li);
    

}

