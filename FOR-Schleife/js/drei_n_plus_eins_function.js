function show() {
    var start = Number(document.getElementById("start").value);
    var end = Number(document.getElementById("end").value);
    var objektListe = [];
    var a = [];
    for (var i = start; i <= end; i++) {
        var value = i;
        var n = i;
        var counter = 0;
        var numList = [];
        var objValue;
        while (n > 1) {
            n % 2 == 0 ? n /= 2 : n = (3 * n) + 1;
            numList[counter] = n;
            counter++; 
        }
        objValue = {
            'inpValue': value,
            'SeqValue': counter,
            'List': numList,
        };
        objektListe.push(objValue);  
        a.push(objValue.SeqValue);
    }
    var num = objektListe.find(x => x.SeqValue ===Math.max(...a));
    document.getElementById("SequenzLength").innerHTML="Die Nummer : "+num.inpValue+" hat die längste Sequenze!(mit "+num.SeqValue+" Sequenzen!)" ;
}
