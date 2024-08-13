
// new element added progress
const colerList = document.getElementById('color-list')

const li = document.createElement('li');
li.innerText = 'green'

colerList.appendChild(li);

// option - 01: js to html
const colorSection = document.getElementById('color-section');

const section = document.createElement('section')

const h1 = document.createElement('h1')
h1.innerText = 'foods name';
section.appendChild(h1)

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'apple';
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'ornage';
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'mango';
ul.appendChild(li3)

const li4 = document.createElement('li')
li4.innerText = 'banana';
ul.appendChild(li4)

section.appendChild(ul)

colorSection.appendChild(section)


// option - 02 : shortcurt: js to html
const colorSection2 = document.getElementById('color-section');

const section2 = document.createElement('section')
section2.innerHTML = `
<h1> foods name </h1>
<ul>
<li>apple</li>
<li>orange</li>
<li>mango</li>
<li>banana</li>
</ul>
`
colorSection2.appendChild(section2)




