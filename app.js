const accordionItemsEl = document.getElementsByClassName('accordion-item');

function accordion() {
   for(let item of accordionItemsEl) {
       let accordionHeader = item.firstElementChild;
       accordionHeader.addEventListener('click', function() {
            let accordionDetails = this.nextElementSibling; // this refers to accordionHeader

            if(accordionDetails.style.height){
                accordionDetails.style.height = null;
                this.lastElementChild.textContent = '+'
            } else {
                accordionDetails.style.height = accordionDetails.scrollHeight + 'px';
                this.lastElementChild.textContent = '-';
            }
       })
   }
}

accordion();