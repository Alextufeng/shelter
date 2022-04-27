const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/png/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/png/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/png/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/png/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/png/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/png/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/png/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/png/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

let activeSlides = [0,1,2];
let size = 3;
const windowWidth = document.body.clientWidth;


document.addEventListener('DOMContentLoaded', ()=>{

/*
let timer = 7000;
setInterval(()=>{
  document.querySelector('.next').click();
},timer)
*/ 

//карточки питомцев

const showPet = (item) => {
  const popup = document.querySelector('#popup');
  popup.classList.add('active');
  document.body.classList.toggle('active');
  document.body.classList.toggle('overlay');

  popup.querySelector("#img").src = item.img
  popup.querySelector('[data-pets="name"]').innerHTML = item.name
  popup.querySelector('[data-pets="type"]').innerHTML = item.type
  popup.querySelector('[data-pets="breed"]').innerHTML = item.breed
  popup.querySelector('[data-pets="age"]').innerHTML = item.age
  popup.querySelector('[data-pets="description"]').innerHTML = item.description
  popup.querySelector('[data-pets="inoculations"]').innerHTML = item.inoculations.join(', ')
  popup.querySelector('[data-pets="diseases"]').innerHTML = item.diseases.join(', ')
  popup.querySelector('[data-pets="parasites"]').innerHTML = item.parasites.join(', ')
}

pets.forEach((item, i)=>{
  let container = document.createElement("div");
  container.className = `pet_info ${i<3 ? 'active' : ''}`;
  container.addEventListener('click', ()=>showPet(item));
  container.setAttribute('data-id', i);
  let img = document.createElement("img");
  img.src = item.img;

  let h3 = document.createElement("h3");
  h3.innerHTML = item.name;

  let button = document.createElement("button");
  button.innerHTML = 'Learn more<span class="flare"></span>';

  container.append(img);
  container.append(h3);
  container.append(button);
  document.querySelector('#pets').append(container);
});

window.addEventListener("resize", function() {
  console.log("Resource conscious resize callback!");
  /*if(windowWidth >= 1280) {
    size = 3;
    activeSlides = [0,1,2];
  } else if (windowWidth < 1280 && windowWidth >= 768) {
    size = 2;
    activeSlides.pop();
  
  } else if (windowWidth < 768){
    size = 1;
    activeSlides.pop();
  }
  slideCards();*/
});
console.log(size)
})

//бургер меню
const body = document.querySelector('body')
const burger = document.querySelector('.burger_icon');
const menu = document.querySelector('.nav_list');

//затемнения при активном бургере и тд
const toggleMenu = function(){
  	menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
    body.classList.toggle('overlay');
};

//прячу меню при переходе по ссылке
const menuLink = document.querySelectorAll('.nav_link');
for (let i=0 ; i<menuLink.length; i++) {
  menuLink[i].addEventListener("click", function(){
    let burger_is_active = burger.classList.contains('active');
    if (burger_is_active){
      toggleMenu();
    };
  });
}

//нажатие на бургер
burger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

//нажатие мимо бургера
document.addEventListener('click', function(e) {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_btnMenu = target == burger;
    let menu_is_active = menu.classList.contains('active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});

//модалка
const popup = document.querySelector('.pop_up');
const popupBtnClose = document.querySelector('.pop_up_close');

const popupClose = function(){
  popup.classList.toggle('active');
  body.classList.toggle('active');
  body.classList.toggle('overlay');
}

popupBtnClose.addEventListener('click', function(e) {
    e.stopPropagation();
    popupClose();    
});

document.addEventListener('click', function(e) {
    let target = e.target;
    let its_btn = target == popupBtnClose;
    let body_click = target == body || body.classList.contains(target)
    let popup_active = popup.classList.contains('active');
    if(!its_btn && body_click && popup_active) {
      popupClose();
    }
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//наполнение слайдера

const slideCards = function(e){

  let newSlides = [];

  while(newSlides.length!=size) {
    let x = getRandomIntInclusive(0,7);
    !activeSlides.includes(x) && !newSlides.includes(x) ? newSlides.push(x) : null
  }

  activeSlides = [...newSlides]

  document.querySelectorAll('.pet_info.active').forEach(item=>item.classList.remove('active'))
  activeSlides.forEach(item=> document.querySelector(`.pet_info[data-id="${item}"]`).classList.add('active'))
};



const petBlock = document.querySelector('.pet_container');
const btns = document.querySelectorAll(".next");

btns.forEach(item=> item.addEventListener("click", slideCards));

let toSelect = 3;
const cards = document.querySelectorAll('.pet_info');
const used = [];

while (toSelect !== 0) {
    const index = Math.floor(Math.random() * cards.length);

    if (used.length === cards.length) break;
    if (used.includes(index)) continue;

    cards[index].classList.add('active');
    used.push(index);
    toSelect--;
  };
  
  
  
  
  


