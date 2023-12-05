// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM




    //add event listener for button click
    //document.querySelector('.attack-btn arcane-scepter').addEventListener('click', onAttackSceptor);
    //document.querySelector('.attack-btn entangle').addEventListener('click', onAttackEntangle);
    //document.querySelector('.attack-btn dragon-blade').addEventListener('click', onAttackBlade);
    //document.querySelector('.attack-btn star-fire').addEventListener('click', onAttackFire);

}





onReady()



//state-global so handlers can handle it
let fungusHP = 100;
let myAP = 100;
//event handler

function onAttackSceptor(event) {//create function
    event.preventDefault();             //disable page reload at onclick
    console.log('Arcane Sceptor attack engaged!'); //console log we're in the func
    fungusHP = fungusHP - 14;                       //math logic for AP and HP
    myAP = myAP - 12;
    console.log('fungus is:', fungusHP, 'myAp is:', myAP);//console log to see results of logic
    render();//update DOM

}
/**The same comments apply to the next 3 functions */
function onAttackEntangle(event) {
    event.preventDefault();
    console.log('Entangle attack engaged!!');
    fungusHP = fungusHP - 9;
    myAP = myAP - 23;
    console.log('fungus is:', fungusHP, 'myAp is:', myAP);
    render();

}

function onAttackBlade(event) {
    event.preventDefault();
    console.log('Dragon Blade attack engaged!!!')
    fungusHP = fungusHP - 47;
    myAP = myAP - 38;
    console.log('fungus is:', fungusHP, 'myAp is:', myAP)
    render();
}

function onAttackFire(event) {
    event.preventDefault();
    console.log('Star-Fire is the attacking!!!!')//
    fungusHP = fungusHP - 25;
    myAP = myAP - 33;
    console.log('fungus is:', fungusHP, 'myAp is:', myAP);
    render();

}

console.log('hi', myAP);
console.log('bye', fungusHP);

function render() {
    const myAPTotal = document.getElementById("ap-meter");
    const fungusHPTotal =document.getElementById("hp-meter");
    )
}








