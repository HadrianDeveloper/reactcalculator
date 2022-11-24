function Numberbuilder() {

//local variables
    let numberStr = '';

//html comps
    const zero = document.getElementById("zero");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");

//handlers
    function displaynum(num) {
        
        numberStr += num;
        console.log(numberStr)
    }

    function alerter() {
        alert('you clicked me!')
    }

//listeners
    zero.addEventListener('click', alerter)
    one.addEventListener('click', displaynum('1'))
    two.addEventListener('click', displaynum('2'))
    three.addEventListener('click', displaynum('3'))
    four.addEventListener('click', displaynum('4'))
    five.addEventListener('click', displaynum('5'))
    six.addEventListener('click', displaynum('6'))
    seven.addEventListener('click', displaynum('7'))
    eight.addEventListener('click', displaynum('8'))
    nine.addEventListener('click', displaynum('9'))

    
};



export default Numberbuilder;