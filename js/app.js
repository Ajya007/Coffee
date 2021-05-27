const hamburger=document.querySelector(".hamburger");
const navLinks=document.querySelector(".nav-links");
const links=document.querySelectorAll(".nav-links li");




function toggleMenu(){
	navLinks.classList.toggle("open");
    links.forEach(link =>{
    	link.classList.toggle("fade");
    });
}

hamburger.addEventListener("click", toggleMenu);






const slider=document.querySelector('.slider');
const leftArrow=document.querySelector('.arrow-left');
const rightArrow=document.querySelector('.arrow-right');
const indicatorParents=document.querySelector('.controls ul');
var sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
indicator.addEventListener("click", function() {
	sectionIndex=ind;
	document.querySelector('.controls .selected').classList.remove('selected');
	indicator.classList.add('selected');
slider.style.transform= 'translate('+(sectionIndex) * -25 +'%)';
});
}); 

leftArrow.addEventListener("click", function() {
sectionIndex = (sectionIndex>0) ? sectionIndex - 1 :0;
document.querySelector('.controls .selected').classList.remove('selected');
indicatorParents.children[sectionIndex].classList.add('selected');
slider.style.transform= 'translate('+(sectionIndex) * -25 +'%)';
});


rightArrow.addEventListener("click", function() {
sectionIndex = (sectionIndex<3) ? sectionIndex + 1 :3;
document.querySelector('.controls .selected').classList.remove('selected');
indicatorParents.children[sectionIndex].classList.add('selected');
slider.style.transform= 'translate('+(sectionIndex) * -25 +'%)';
});
