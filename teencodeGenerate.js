conversion_1 = {
    e: '3',
    i: 'j',
    o: '0',
    a: '4',
    g: 'q',
    h: 'k',
}


function teencodeGen(){
    let rawString = document.getElementById("raw").value;

    for (char in rawString){
        const key = rawString[char];
        if (conversion_1.hasOwnProperty(key)){
            const regex = new RegExp(key, 'g');
            rawString = rawString.replace(regex, conversion_1[key])
        }
    }
    document.getElementById("teencode").value = rawString;
}

function rawString(){
    const rawString = document.getElementById("raw").value;
    document.getElementById("teencode").value = rawString;
}