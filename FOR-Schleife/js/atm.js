function gimmiMoney() {
    const haveValue2 = document.getElementById("zwei").value;
    const haveValue1 = document.getElementById("ein").value;
    const haveValue50 = document.getElementById("funfzig").value;
    const haveValue20 = document.getElementById("zwanzig").value;
    const haveValue10 = document.getElementById("zehn").value;
    var rest2 = 0;
    var rest1 = 0;
    const rest50 = 0;
    const rest20 = 0;
    const rest10 = 0;
    // 2€ finden
    const value = document.getElementById("add").value; // 173.70 €
    const halbvalue = value / 2; //ok 173.70 / 2 = 86.85
    const euro2 = (Math.trunc(halbvalue)); //ok 86.85 trunc = 86 mal 2€ ok
    if (euro2 > haveValue2) {
        rest2 = (euro2 - haveValue2) * 2
        // console.log(rest2);
        document.getElementById("money").innerHTML = "2 € : x " + haveValue2+" 1 € : x"+rest2;
    } else { document.getElementById("money").innerHTML = "2 € : x " + euro2; }
    
    // 1€ findem
    
    const findDifferense = (value - (2 * euro2)).toFixed(2);//ok 173.70-(2 * 86)= 173.70 - 172.00 = 01.70 € bleibt  geld
    const euro1 = (Math.trunc(findDifferense))// 1€
    if(rest2<haveValue1){
        rest1=(rest2-haveValue1)*2;
        console.log(rest1);

    }
    document.getElementById("money1").innerHTML = "1 € : x " + euro1;
    // 0.50 € finden
    const findCent = (findDifferense - euro1).toFixed(2); //0.70
    const cent50 = Math.trunc(findCent / 0.50);// 1 mal 0.50 cent
    document.getElementById("money2").innerHTML = "0.50 € : x " + cent50;
    // 0.20 € finden
    const findModify20 = (findCent % 0.50).toFixed(2); // 0.70 - 0.50 = 0.20
    const cent20 = Math.trunc((findModify20 / 0.20).toFixed(2)); //0.20 / 0.20 = 1
    document.getElementById("money3").innerHTML = "0.20 € : x " + cent20;
    // 0.10 € finden
    const findModify10 = (findModify20 % 0.20).toFixed(2);
    const cent10 = Math.trunc((findModify10 / 0.10).toFixed(2));
    document.getElementById("money4").innerHTML = "0.10 € : x " + cent10;
    // const summeAutomat = Number(haveValue2 * 2) + Number(haveValue1 * 1) + Number(haveValue50 * 0.5) + Number(haveValue20 * 0.2) + Number(haveValue10 * 0.1); 
    // // Subtraction of Values
    // const give2 = haveValue2 - euro2;
    // const give1 = haveValue1 - euro1;
    // const give50 = haveValue50 - cent50;
    // const give20 = haveValue20 - cent20;
    // const give10 = haveValue10 - cent10;

    // wenn es kein 2 € gibt
    //     if (give2 < 0) {
    //         const show1 = Math.trunc(give1 - Math.abs(give2 * 2).toFixed(2));
    //         document.getElementById("test").innerHTML = "2x € : x" + haveValue2 + "<br>1 € : x" + show1 + "<br> 0.50 € : x" + cent50 + "<br> 0.20 € : x" + cent20 + "<br> 0.10 € : x" + cent10;
    //         // wenn es kein 1 € gibt
    //         if (show1 < 0) {
    //             const show50 = Math.trunc(give50 - Math.abs(give1 * 2).toFixed(2));
    //             document.getElementById("test").innerHTML = "2 € : x" + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x" + show50 + " 0.20 € : x" + cent20 + " 0.10 € : x" + cent10;
    //             // wenn es kein 50cent gibt
    //             if (show50 < 0) {
    //                 const show20 = Math.trunc(give20 - Math.abs(give50 * 2.5).toFixed(2));
    //                 document.getElementById("test").innerHTML = "2 € : x" + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x" + haveValue50 + " 0.20 € : x" + show20 + " 0.10 € : x" + cent10;

    //                 if (show20 < 0) {
    //                     const show10 = Math.trunc(give10 - Math.abs(give20 * 2).toFixed(2));
    //                     document.getElementById("test").innerHTML = "2 € : x" + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x" + haveValue50 + " 0.20 € : x" + haveValue20 + " 0.10 € : x" + show10;
    //                     if (show10 < 0) {
    //                         var dontHave=Math.abs(show10)
    //                         document.getElementById("test").innerHTML = "2 € : x" + haveValue2 + " 1 € : x" + haveValue1 + " 0.50 € : x" + haveValue50 + " 0.20 € : x" + haveValue20 + " 0.10 € : x" + haveValue10+" Der Automat hat derzeit nur " + summeAutomat;
    //                         alert("Entschuldigung! Das Geld reicht nicht. Bitte nehmen Sie Ihr Geld zürück.")
    //                         document.getElementById("message").innerHTML = "ACHTUNG: <br> ES GIBT KEIN GELD IN AUTOMAT"
    //                     } 

    //                 }
    //             }
    //         }
    //     }else {
    //         document.getElementById("test").innerHTML = "2 € : x" + euro2 + "<br>1 € : x" + euro1 + "<br> 0.50 € : x" + cent50 + "<br> 0.20 € : x" + cent20 + "<br> 0.10 € : x" + cent10;
    //         document.getElementById("message").innerHTML = "Sie können Ihre Münze mit nehmen!"
    // }
    // document.getElementById("test2").innerHTML = give2;
    // document.getElementById("test1").innerHTML = give1;
    // document.getElementById("test50").innerHTML = give50;
    // document.getElementById("test20").innerHTML = give20;
    // document.getElementById("test10").innerHTML = give10;
}
