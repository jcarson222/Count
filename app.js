//set initial count
let count = 0
//value = <span> #id
 const value = document.querySelector('#value');
 //btns = ALL elements w/ the '.btn' class
 const btns = document.querySelectorAll('.btn');

 //create eventListeners (on click) FOR EACH button,, each button is already selected in our 'btns' variable.
 btns.forEach(function(btn) {   
    btn.addEventListener('click', function(e) {
        //currentTarget returns the element whose event listeners triggered a specific event
        //classList returns the CSS classnames of an element
        //see below: we are setting our styles variable = to the classList of each targeted element upon our event.
        const styles = e.currentTarget.classList;
        //use .contains() to check if the CSS list of the element contains (decrease,increase,reset)
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        //now change the color of our span(count) based on <,>, or = 0
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count == 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});  