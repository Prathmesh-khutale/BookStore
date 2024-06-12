const wrapper = document.querySelector('.wrapper'); // Select the wrapper correctly
const menuItems = document.querySelectorAll('.pname'); // Select all menu items

menuItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`; // Corrected the translation syntax

        // Get the id of the element that triggered the event
        var elementId = event.target.id;
        console.log(elementId);

        // Hide all sections first
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.style.display = 'none');

        // Show the related section
        document.getElementById(`${elementId}-section`).style.display = "block";
    });
});


function showloginform(){
document.querySelector('.btnlogin').classList.add('showlogin');
document.querySelector('.overlay').classList.add('showop');
}

function removeloginform(){
    document.querySelector('.btnlogin').classList.remove('showlogin');
    document.querySelector('.overlay').classList.remove('showop');
    }

var btnnn = document.querySelector('.login');
btnnn.addEventListener('click',showloginform);

var closebtn = document.querySelector('span');
closebtn.addEventListener('click',removeloginform);

