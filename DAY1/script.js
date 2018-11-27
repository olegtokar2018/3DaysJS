function myFirstApp(name, age) {
    alert("Привет, меня зовут " + name + " и это моя первая программа!");

    function showSkills() {
        let skills = ["HTML", "CSS", "JS", 'SQL ']; // происать свои навыки

        for (let i = 0; i < skills.length; i++) {
             document.body.innerHTML += "Я владею " + skills[i] + "<br>"; 
        }
    }
    showSkills();

    function checkAge() {
        if (age < 18) {
             alert(name + ", ты еще мал и глуп...");
        } else if (age >= 18 && age < 35) {
            alert(name + ", у тебя еще вся жизнь впереди");
        } else {
            alert( name + ", ты - опытный и мудрый человек");
        }
    }
    checkAge();

    function calcPow(num) {
        console.log(num*num);
        // console.log(num**2);
        // console.log(Math.pow(num, 2));
    }
    calcPow(2);
    calcPow(4);
    calcPow(5);
    calcPow(6);
}

// myFirstApp("Ivan", 32);
myFirstApp("Oleg", 53);
// myFirstApp("Max", 15);