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
    iWon();
    fungusWon();
    render();//update DOM

}
/**The same comments apply to the next 3 functions */
function onAttackEntangle(event) {
    event.preventDefault();
    console.log('Entangle attack engaged!!');
    fungusHP = fungusHP - 9;
    myAP = myAP - 23;
    console.log('fungus is:', fungusHP, 'myAp is:', myAP);

    iWon();
    fungusWon();
    render();//update DOM
}

function onAttackBlade(event) {
    event.preventDefault();
    console.log('Dragon Blade attack engaged!!!')
    fungusHP = fungusHP - 47;
    myAP = myAP - 38;
    console.log('fungus is:', fungusHP, 'myAp is:', myAP)
    iWon();
    fungusWon();
    render();//update DOM}

}

function onAttackFire(event) {
    event.preventDefault();
    console.log('Star-Fire is the attacking!!!!')//
    fungusHP = fungusHP - 25;
    myAP = myAP - 33;
    console.log('fungus is:', fungusHP, 'myAp is:', myAP);
    iWon();
    fungusWon();
    render();//update DOM
}

//console.log('hi', myAP);
//console.log('bye', fungusHP);

function render() {
    let myAPTotal = document.getElementsByClassName("ap-text")[0];
    let fungusHPTotal = document.getElementsByClassName("hp-text")[0];
    console.log(myAPTotal);
    console.log(fungusHPTotal);
    myAPTotal.innerHTML = myAP + 'AP';
    fungusHPTotal.innerHTML = fungusHP + 'HP'


}

function iWon() {
    if (fungusHP < 0) {
        fungusHP = 0;
        let deadClass = document.getElementsByClassName("freaky-fungus walk")[0];
        deadClass.classList = "freaky-fungus dead"
    }
}
function fungusWon() {
    if (myAP < 0) {
        myAP = 0
        let jumpClass = document.getElementsByClassName("freaky-fungus walk")[0]
        jumpClass.classList = "freaky-fungus jump"

        let disableArcBtn = document.getElementsByClassName("attack-btn arcane-scepter")[0]
        console.log('disable arcane button:', disableArcBtn);
        disableArcBtn.disabled = true;

        let disableEntBtn = document.getElementsByClassName("attack-btn entangle");
        console.log('disable attack button:', disableEntBtn);
        disableEntBtn.disabled = true;

        let disableBladeBtn = document.getElementsByClassName("attack-btn dragon-blade");
        console.log('disable blade button:', disableBladeBtn);
        disableBladeBtn.disabled = true;

        let disableFireBtn = document.getElementsByClassName("attack-btn star-fire");
        console.log('disable fire button:', disableFireBtn);
        disableEntBtn.disabled = true;





    }

}

