// # IF - ELSE  (ugly one)
function getGrade(score) {
    let grade;
    if (score <= 5) {
        grade = 'F';
    } else if (score <= 10) {
        grade = 'E';
    } else if (score <= 15) {
        grade = 'D';
    } else if (score <= 20) {
        grade = 'C';
    } else if (score <= 25) {
        grade = 'B';
    } else
        grade = 'A';
    return grade;

}

// # IF - ELSE (pretty one)
function getGrade(score) {
    let grade;
    if (0 <= score && score <= 30) {
        grade = String.fromCharCode(70 - parseInt((score - 1) / 5));
    }
    return grade;
}

// # SWITCH (ugly one)
function getLetter(s) {
    let letter;
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return 'C';
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            return 'D';
            break;
    }
    return letter;
}

// # SWITCH (pretty one)
function getLetter(s) {
    let letter;
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}

// # LOOPS
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let consonants = '';

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());
}