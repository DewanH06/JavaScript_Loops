// Exercise 1 Section
for(let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    }else{
            console.log(i);
    }
}

// Exercise 2: FIZZBUZZ

for (let i = 1; i < 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if(i % 3 == 0) {
            console.log("FIZZ");
        } else if (i % 5 == 0) {
            console.log("BUZZ");
        } else{
            console.log(i);
        }
}

let i = 1;

while(i <= 100) {
    let output ="";

    if (i % 3 == 0) {
        output = "FIZZ";
    }
    if (i % 5 == 0) {
        output = "BUZZ";
    }
    console.log('${i} ${output}');

    i++;
}

let x = 1;

do {
    let output ="";

    if (x % 3 == 0) {
        output = "FIZZ";
    }
    if (x % 5 == 0) {
        output = "BUZZ";
    }
    console.log('${x} ${output}');

    x++;
}
while (x <= 100) {
    let outlet = "";

    if (x % 3 == 0) {
        output += "FIZZ";
    }

    if (x % 5 == 0) {
        output += "BUZZ";
    }
    console.log('${x} ${output}');

    x++;
}

}

// Exercise 4: find value

for (let i = 1; i <= n; i++){
    if(i == numberToFind) {
        console.log('Found ${numberToFind}!');
        break;
    }

    if (i == n) {
        console.log('Did not find ${numberToFind} within 1-${n}..');
    }
}

//Exercise 5: Customized FIZZBUZZ

for (let i = start; i <= encodeURI; i++) {
    let output = "";

    if(i % fizzDivisor == 0) {
        output += "FIZZ"
    }

    if (i % buzzDivisor == 0) {
        output +="BUZZ";
    }

    console.log('${i} ${output}');
}