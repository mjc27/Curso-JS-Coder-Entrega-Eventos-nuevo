let boton = document.getElementById("button");
boton.addEventListener ('click', cotizador);

function cotizador() {
    let str = document.getElementsByName('stream');
    let pac = document.getElementsByName('pack'); 
    let des = document.getElementById('choice');
    let precio = [100,200,500];

    for(i = 0; i < str.length; i++) {
        for (x = 0; x < pac.length; x++)
        {
        if(str[i].checked && pac[x].checked)
            {
                if (des.value == "si"){
                    document.getElementById("result").innerHTML
                    = "El precio total de " + str[i].value +" para vos sería de $" + precio[x] * 0.8 + " (%20 de descuento).";
                    sessionStorage.setItem('seleccion',[str[i].value,pac[x].value,des.value]);
                }
                else 
                    document.getElementById("result").innerHTML
                     = "El precio total de " + str[i].value +" para vos sería de $" + precio[x] + ".";
                     sessionStorage.setItem('seleccion',[str[i].value,pac[x].value,des.value]);
        }
      
        }
    }
}
