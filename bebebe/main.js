const id1 = document.querySelector("#id1");
console.log(id1)

const asfaafdsffdgh = document.querySelector(".class");
console.log(asfaafdsffdgh)

asfaafdsffdgh.innerHTML = 'eewrewrewrewrewrewr'

const elementByTag = document.querySelector( "h2" );
console.log(elementByTag)

const elm = document.querySelector( ".div" );
const elementInsideElement = elm.querySelector ( "h3" )
console.log(elementInsideElement)

// elementById.textContent = "Новыйтекст";
// id1.setAttribute( "class", "nnn" );

id1.style.color = "blue";
id1.style.backgroundColor = "lightgray";

id1.classList.add("new-class");
id1.classList.remove("w");
