const body = document.querySelector('body')
const burger = document.querySelector('.burger_icon');
const menu = document.querySelector('.nav_list');

const toggleMenu = function(){
	menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
};

/*
const menuLink = document.getElementsByClassName('.nav_item');
for (let i=0 ; i<menuLink.length; i++) {
  menuLink[i].addEventListener("click", function(){
    toggleMenu();
  });
}*/

burger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == burger;
    const menu_is_active = menu.classList.contains('active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});

