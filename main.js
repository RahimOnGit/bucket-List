function newElement(tagName,innerText)
{
    let theElement = document.createElement(tagName);
theElement.innerText = innerText;


return theElement;
}



//1
let taskElement = document.createElement("p");
taskElement.innerText = "Earn anohter million dollars";
document.body.appendChild(taskElement);




//2

let getList = document.querySelector(".list")

getList.insertAdjacentElement("beforeend",taskElement);


//my function

let task1 = newElement("p","Earn a billi");
getList.appendChild(task1);

//3

let x = document.getElementsByTagName("p")
console.log(document.getElementsByTagName("p"));

for(let i = 0; i<x.length;i++)
{
    console.log(x[i].innerHTML);
}



//4
let stringTask = "<div>here we go another billi<div>";
let task2 = document.createElement("p");
task2.innerHTML = stringTask;
getList.appendChild(task2);


//5
//6

//7

for(i=1;i<4;i++)
{
    let task3 = document.createElement("p");

task3.innerHTML = "stringTask"+i;
getList.insertAdjacentElement("beforeend",task3);

}

//8
console.log(getList.children.length,"items")


//9
let logoName = document.querySelector(".owner");
logoName.innerText = "Rahim's"


//10


// console.log(getList.children[0]);

// console.log(getList.children[1]);
// //getList.replaceChild(getList.children[0],getList.children[1]);

// console.log(getList.children[0]);
// console.log(getList.children[1]);

//11

let task4 = newElement("p","this one is replced");
getList.replaceChild(task4,getList.children[3])


//12
console.log(getList.lastChild);
console.log(getList.children);
getList.removeChild(getList.lastChild);
console.log("after removing the last element",getList.children);

