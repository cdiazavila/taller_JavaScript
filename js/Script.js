const panel=document.getElementById("panel");
const b1=document.getElementById('boton1');
const b2=document.getElementById('boton2');
const b3=document.getElementById('boton3');
const b4=document.getElementById('boton4');
const b5=document.getElementById('boton5');
const b6=document.getElementById('boton6');
const b7=document.getElementById('boton7');
const b8=document.getElementById('boton8');
const b9=document.getElementById('boton9');
panel.style.display="none";
 b1.addEventListener('click',(e)=>{
     e.preventDefault();
     document.getElementById("p1").style.display ='block';
    document.getElementById("p2").style.display ='none';
    document.getElementById("p3").style.display ='none';
    document.getElementById("p4").style.display ='none';
    document.getElementById("p5").style.display ='none';
    document.getElementById("p6").style.display ='none';
    document.getElementById("p7").style.display ='none';
    document.getElementById("p8").style.display ='none';
    document.getElementById("p9").style.display ='none';

 });
 b2.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("p2").style.display ='block';
   document.getElementById("p1").style.display ='none';
   document.getElementById("p3").style.display ='none';
   document.getElementById("p4").style.display ='none';
   document.getElementById("p5").style.display ='none';
   document.getElementById("p6").style.display ='none';
   document.getElementById("p7").style.display ='none';
   document.getElementById("p8").style.display ='none';
   document.getElementById("p9").style.display ='none';

});


b3.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("p3").style.display ='block';
   document.getElementById("p2").style.display ='none';
   document.getElementById("p1").style.display ='none';
   document.getElementById("p4").style.display ='none';
   document.getElementById("p5").style.display ='none';
   document.getElementById("p6").style.display ='none';
   document.getElementById("p7").style.display ='none';
   document.getElementById("p8").style.display ='none';
   document.getElementById("p9").style.display ='none';

});

b4.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("p4").style.display ='block';
   document.getElementById("p2").style.display ='none';
   document.getElementById("p3").style.display ='none';
   document.getElementById("p1").style.display ='none';
   document.getElementById("p5").style.display ='none';
   document.getElementById("p6").style.display ='none';
   document.getElementById("p7").style.display ='none';
   document.getElementById("p8").style.display ='none';
   document.getElementById("p9").style.display ='none';

});
b5.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("p5").style.display ='block';
   document.getElementById("p2").style.display ='none';
   document.getElementById("p3").style.display ='none';
   document.getElementById("p4").style.display ='none';
   document.getElementById("p1").style.display ='none';
   document.getElementById("p6").style.display ='none';
   document.getElementById("p7").style.display ='none';
   document.getElementById("p8").style.display ='none';
   document.getElementById("p9").style.display ='none';

});

b6.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("p6").style.display ='block';
   document.getElementById("p2").style.display ='none';
   document.getElementById("p3").style.display ='none';
   document.getElementById("p4").style.display ='none';
   document.getElementById("p5").style.display ='none';
   document.getElementById("p1").style.display ='none';
   document.getElementById("p7").style.display ='none';
   document.getElementById("p8").style.display ='none';
   document.getElementById("p9").style.display ='none';

});

b7.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("p7").style.display ='block';
   document.getElementById("p2").style.display ='none';
   document.getElementById("p3").style.display ='none';
   document.getElementById("p4").style.display ='none';
   document.getElementById("p5").style.display ='none';
   document.getElementById("p6").style.display ='none';
   document.getElementById("p1").style.display ='none';
   document.getElementById("p8").style.display ='none';
   document.getElementById("p9").style.display ='none';

});

b8.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("p8").style.display ='block';
   document.getElementById("p2").style.display ='none';
   document.getElementById("p3").style.display ='none';
   document.getElementById("p4").style.display ='none';
   document.getElementById("p5").style.display ='none';
   document.getElementById("p6").style.display ='none';
   document.getElementById("p7").style.display ='none';
   document.getElementById("p1").style.display ='none';
   document.getElementById("p9").style.display ='none';

});
b9.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("p9").style.display ='block';
   document.getElementById("p2").style.display ='none';
   document.getElementById("p3").style.display ='none';
   document.getElementById("p4").style.display ='none';
   document.getElementById("p5").style.display ='none';
   document.getElementById("p6").style.display ='none';
   document.getElementById("p7").style.display ='none';
   document.getElementById("p8").style.display ='none';
   document.getElementById("p1").style.display ='none';

});

function pregunta(n){
             
    document.getElementById("formulario").style.display ='none';
    document.getElementById("p1").style.display ='none';
    document.getElementById("p2").style.display ='none';
    document.getElementById("p3").style.display ='none';
    document.getElementById("p4").style.display ='none';
    document.getElementById("p5").style.display ='none';
    document.getElementById("p6").style.display ='none';
    document.getElementById("p7").style.display ='none';
    document.getElementById("p8").style.display ='none';
    document.getElementById("p9").style.display ='none';
    document.getElementById("p"+n).style.display ='block';
    document.getElementById("terminar").style.display ='block';
    panel.style.display="block";
    
}



// capturar los datos del formulario
function registrar(){            
    nombre = document.getElementById("name");
    apellido=document.getElementById("ape").value;
    if(nombre.value==""){
        alert("Dijite su nombre");
        nombre.focus();
        return false;
    }
    if(apellido.value==""){
        alert("Debe ingresar su Apellido");
        apellido.focus();
        return false;
    }
    resultado = document.getElementById("informacion");
    resultado.innerHTML = nombre.value+" "+apellido;   
    document.getElementById("formulario").style.display ='none';
    document.getElementById("terminar").style.display ="block"; 
    document.getElementById("nav").style.display ="block";
    document.getElementById("p1").style.display ='block';
    document.getElementById("p").style.display="none";
    document.getElementById("img").style.display="none";
  
  
   
}


// para la pregunta uno 

window.onload =function()
{

    var n1;
    var n2;
    var n3;
    var n4;
    var n5;
    var n6;
    var n7;
    var n8;
    var n9;
var resultado =document.getElementById("terminar");

resultado.onclick=function()
{
    let resultadoR= document.radio.opcion;
   for(x=0; x< resultadoR.length; x++){
       if(resultadoR[x].checked){
        if(resultadoR[x].value==2){
            resultadot = document.getElementById("r1");
           resultadot.innerHTML = "Respuesta  es Correcta"; 
           resultadot.style.backgroundColor = '#00ff00';
           n1=1;
       }else  {
        resultadot = document.getElementById("r1");
        resultadot.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: 1.44"; 
        resultadot.style.backgroundColor = '#F9041A';
    
        n1=0;
    }
    
   
}

       
   }


   // resultadp para la pregunta nuemero dos 
   let resultadoR2= document.radio2.opcion;
   for(x=0; x< resultadoR2.length; x++){
       if(resultadoR2[x].checked){
        if(resultadoR2[x].value==4){
            resultadot2 = document.getElementById("r2");
           resultadot2.innerHTML = "Respuesta  es Correcta"; 
           resultadot2.style.backgroundColor = '#00ff00';
          n2=1;
       }else{
        resultadot2 = document.getElementById("r2");
        resultadot2.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: 4"; 
        resultadot2.style.backgroundColor = '#F9041A';
        n2=0;
    }
      
   }
}

   // resultado para la pregunta nuemero 3
   let resultadoR3= document.radio3.opcion;
   for(x=0; x< resultadoR3.length; x++){
       if(resultadoR3[x].checked){
        if(resultadoR3[x].value==3){
            resultadot3 = document.getElementById("r3");
           resultadot3.innerHTML = "Respuesta  es Correcta"; 
           resultadot3.style.backgroundColor = '#00ff00';
           
           n3=1;
       }else{
        resultadot = document.getElementById("r3");
        resultadot.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: (-1,∞)"; 
        resultadot.style.backgroundColor = '#F9041A';
        n3=0;
    }
    
}
   }

    // resultado para la pregunta nuemero 4
    let resultadoR4= document.radio4.opcion;
    for(x=0; x< resultadoR4.length; x++){
        if(resultadoR4[x].checked){
         if(resultadoR4[x].value==2){
             resultadot = document.getElementById("r4");
            resultadot.innerHTML = "Respuesta  es Correcta"; 
            resultadot.style.backgroundColor = '#00ff00';
            
            n4=1;
        }else{
         resultadot4 = document.getElementById("r4");
         resultadot4.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: 7"; 
         resultadot4.style.backgroundColor = '#F9041A';
         n4=0;
     }
    
        }
        
    }

     // resultado para la pregunta nuemero 5
   let resultadoR5= document.radio5.opcion;
   for(x=0; x< resultadoR5.length; x++){
       if(resultadoR5[x].checked){
        if(resultadoR5[x].value==3){
            resultadot = document.getElementById("r5");
           resultadot.innerHTML = "Respuesta  es Correcta"; 
           resultadot.style.backgroundColor = '#00ff00';
           
           n5=1;
       }else{
        resultadot = document.getElementById("r5");
        resultadot.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: Verdadero"; 
        resultadot.style.backgroundColor = '#F9041A';
        n5=0;
    }
   
       }
      
   }

    // resultado para la pregunta nuemero 6
    let resultadoR6= document.radio6.opcion;
    for(x=0; x< resultadoR6.length; x++){
        if(resultadoR6[x].checked){
         if(resultadoR6[x].value==2){
             resultadot = document.getElementById("r6");
            resultadot.innerHTML = "Respuesta  es Correcta"; 
            resultadot.style.backgroundColor = '#00ff00';
            
            n6=1;
        }else{
         resultadot = document.getElementById("r6");
         resultadot.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: |R"; 
         resultadot.style.backgroundColor = '#F9041A';
         n6=0;
     }
    
        }
      
    }


     // resultado para la pregunta nuemero 7
   let resultadoR7= document.radio7.opcion;
   for(x=0; x< resultadoR7.length; x++){
       if(resultadoR7[x].checked){
        if(resultadoR7[x].value==1){
            resultadot = document.getElementById("r7");
           resultadot.innerHTML = "Respuesta  es Correcta"; 
           resultadot.style.backgroundColor = '#00ff00';
           
          n7=1;
       }else{
        resultadot = document.getElementById("r7");
        resultadot.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: 10 000 000"; 
        resultadot.style.backgroundColor = '#F9041A';
        n7=0;
    }
   
       }
     
   }

    // resultado para la pregunta nuemero 8
    let resultadoR8= document.radio8.opcion;
    for(x=0; x< resultadoR8.length; x++){
        if(resultadoR8[x].checked){
         if(resultadoR8[x].value==1){
             resultadot = document.getElementById("r8");
            resultadot.innerHTML = "Respuesta  es Correcta"; 
            resultadot.style.backgroundColor = '#00ff00';
            
           n8=1;
        }else{
         resultadot = document.getElementById("r8");
         resultadot.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: 0.0001"; 
         resultadot.style.backgroundColor = '#F9041A';
         n8=0;
     }
 
        }
        
    }

     // resultado para la pregunta nuemero 9
   let resultadoR9= document.radio9.opcion;
   for(x=0; x< resultadoR9.length; x++){
       if(resultadoR9[x].checked){
        if(resultadoR9[x].value==3){
            resultadot = document.getElementById("r9");
           resultadot.innerHTML = "Respuesta  es Correcta"; 
           resultadot.style.backgroundColor = '#00ff00';  
          n9=1;
       }else{
        resultadot = document.getElementById("r9");
        resultadot.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: 27 000"; 
        resultadot.style.backgroundColor = '#F9041A';
        n9=0;
    }
       }
   }
  


   document.getElementById("p1").style.display ='block';
   document.getElementById("p2").style.display ='block';
   document.getElementById("p3").style.display ='block';
   document.getElementById("p4").style.display ='block';
   document.getElementById("p5").style.display ='block';
   document.getElementById("p6").style.display ='block';
   document.getElementById("p7").style.display ='block';
   document.getElementById("p8").style.display ='block';
   document.getElementById("p9").style.display ='block';
   document.getElementById("terminar").style.display ='none';
   document.getElementById("menu1").style.display ='none';
   document.getElementById("menu2").style.display ='none';
   document.getElementById("menu3").style.display ='none';
   document.getElementById("menu4").style.display ='none';
   document.getElementById("menu5").style.display ='none';
   document.getElementById("menu6").style.display ='none';
   document.getElementById("menu7").style.display ='none';
   document.getElementById("menu8").style.display ='none';
   document.getElementById("menu9").style.display ='none';
   panel.style.display='none';
  
   nota = (parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5)+parseInt(n6)+parseInt(n7)+parseInt(n8)+parseInt(n9));
   nota_final=(nota*(parseFloat(0.56))-parseFloat(0.04));
   notaResultante = document.getElementById("nota");
   idPregunta = document.getElementById("idpregunta");
   idPregunta.innerHTML= "Preguntas realizadas "+ nota+"/ 9";
   if(nota_final>=3){
    notaResultante.innerHTML = "su nota es: "+ nota_final+"/ 5.0 "+ " aprueba el test";
    notaResultante.style.backgroundColor = '#00ff00';
    notaResultante.style.width="30%";
   }else{
     notaResultante.innerHTML = "su nota es: "+nota_final+"/ 5.0 "+" desaprueba el test" ;
     notaResultante.style.backgroundColor = '#F9041A';
     notaResultante.style.width="40%";
}
 

}
}

// salir del test
$(document).ready(function(){
    //Creamos el evento click del botón
    $("#salir").click(function(){
      //Actualizamos la página
      location.reload();
    });

    $.validate({
        lang: 'es'
      });

  

  });
