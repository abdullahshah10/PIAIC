// JS chapter 35 to 38
// Student ID: PIAIC88893
// SYED ABDULLAH ALI SHAH

function capitalizeCase(str) {
    let words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  }
  
  let str = 'Hi how are you!';
  console.log(capitalizeCase(str)); 
  

// --------------------


function factorialize(num) {
    if (num < 0) {
      return -1;
    }
    else if (num == 0) {
      return 1;
    }
    else {
      return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(5)); 
