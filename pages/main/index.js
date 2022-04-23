/*burger menu start*/
const body = document.querySelector('body')
const burger = document.querySelector('.burger_icon');
const menu = document.querySelector('.nav_list');

const toggleMenu = function(){
	menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
    body.classList.toggle('overlay');
};

const menuLink = document.querySelectorAll('.nav_link');
for (let i=0 ; i<menuLink.length; i++) {
  menuLink[i].addEventListener("click", function(){
    toggleMenu();
  });
}

burger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_btnMenu = target == burger;
    let menu_is_active = menu.classList.contains('active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});
/*burger menu finish*/

/*pop up start*/
const popup = document.querySelector('.pop_up');
const petCard = document.querySelectorAll('.pet_info');
const popupClose = document.querySelector('.pop_up_close');

const togglePop = function(){
    popup.classList.toggle('active');
    body.classList.toggle('active');
    body.classList.toggle('overlay');
}

for (let i=0 ; i<petCard.length; i++) {
  petCard[i].addEventListener("click", function(){
    togglePop();
  });
};

popupClose.addEventListener('click', function(e) {
    e.stopPropagation();
    togglePop();
    
});

/*не работает при нажатии вне попапа
document.addEventListener('click', function(e) {
    let target = e.target;
    let its_popup = target == popup || popup.contains(target);
    let its_btnClose = target == popupClose;
    let popup_is_active = popup.classList.contains('active');
    
    if (!its_popup && !its_btnClose && popup_is_active) {
       togglePop();
    }
});*/


/*pop up finish*/

/*slider start*/
const petBlock = document.querySelector('.pet_container');
const btns = document.querySelectorAll(".next");

for (let i=0 ; i<btns.length; i++) {
    btns[i].addEventListener("click", function(){
        slideCards();
    });
  };

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


const slideCards = function(){
    for (let i=0; i<=7; i++){
        cards[i].classList.remove('active');
        used.shift(i); 
    };

    toSelect = 3;
    
    while (toSelect !== 0) {
        const index = Math.floor(Math.random() * cards.length);
       
        if (used.length === cards.length) break;
        if (used.includes(index)) continue;
        
        cards[index].classList.add('active');
        used.push(index);
        toSelect--;
      };

};


/*slider finish*/



/*данные питомцев
const pet = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
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
      "img": "../../assets/images/sophia.png",
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
      "img": "../../assets/images/woody.png",
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
      "img": "../../assets/images/scarlett.png",
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
      "img": "../../assets/images/katrine.png",
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
      "img": "../../assets/images/timmy.png",
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
      "img": "../../assets/images/freddie.png",
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
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]*/