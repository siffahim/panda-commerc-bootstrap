document.getElementById('headingColor').addEventListener('dblclick', () => {
    const headings = document.getElementsByTagName('h1');
    for (let heading of headings) {
        heading.style.color = "orange"
    }

    //img card border radius
    const cards = document.getElementsByClassName('card');
    for (let card of cards) {
        card.style.borderRadius = "30px"
    }
})
//all heading h1 color change


//backpeck style change
/* const backpeak = document.getElementById('backpeck'); */





//logo function add
const sayHi = () => {
    alert('Welcome To Panda')
}
//subscribe section
document.getElementById('email').addEventListener('keyup', (event) => {
    const btn = document.getElementById('btn');
    let write = event.target.value.toLowerCase();
    if (write == 'email') {
       btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled',true)
    }
})

//bdlclick style
const letSayTouch = document.getElementById('subscribe');
letSayTouch.addEventListener('dblclick', () => {
    letSayTouch.style.backgroundColor = "orange";
})

//mouseenter img change
const imgChange = document.getElementById('changeImg');
imgChange.addEventListener('mouseenter', () => {
    imgChange.src = "https://i.pinimg.com/originals/10/ca/a9/10caa910857e23389e21c921a58e73e8.png";
    setTimeout(() => {
        imgChange.src = "images/shoes/shoe-2.png";
    },2000)
})


//btn remove 
const removeBtns = document.getElementsByClassName('remove');
for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', () => {
        const parent = removeBtn.parentElement;
        parent.removeChild(removeBtn);
    })
}