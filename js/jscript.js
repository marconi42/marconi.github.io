let a = ".-" ;
let b = "-... " ;
let c = "-.-. " ;
let d = "-.. " ;
let e = ". " ;
let f = "..-. " ;
let g = "--. " ;
let h = ".... " ;
let i3 = ".." ;
let j = ".--- " ;
let k = "-.- " ;
let l = ".-.. " ;
let m = "-- " ;
let n = "-. " ;
let o = "--- " ;
let p = ".--. " ;
let q = "--.- " ;
let r = ".-. " ;
let s = "... " ;
let t = "- " ;
let u = "..- " ;
let v = "...- " ;
let w = ".-- " ;
let x = "-..- " ;
let y = "-.-- " ;
let z = "--.. " ;
let n1 = ".---- " ;
let n2 = "..--- " ;
let n3 = "...-- " ;
let n4 = "....- " ;
let n5 = "..... " ;
let n6 = "-.... " ;
let n7 = "--... " ;
let n8 = "---.. " ;
let n9 = "----. " ;
let n0 = "----- " ;
let space = "/";
var total= " ";

function funcion(){
  var traducir= document.getElementById('ingresar').value;
  let cant=traducir.length;
    var array = [0]
      for(i=0;i<cant;i++) {
          e4=i+1;
          array[i]= [traducir.slice(i,e4)]
      }
      for(i=0;i<cant;i++){

        if (array[i]=="a"){array[i]=a;}
        else if (array[i]=="b"){array[i] = b;}
        else if (array[i]=="c"){array[i] =c; }
        else if (array[i]=="d"){array[i] =d; }
        else if (array[i]=="e"){array[i] =e; }
        else if (array[i]=="f"){array[i] =f; }
        else if (array[i]=="g"){array[i] =g; }
        else if (array[i]=="h"){array[i] =h; }
        else if (array[i]=="i"){array[i] =i3; }
        else if (array[i]=="j"){array[i] =j; }
        else if (array[i]=="k"){array[i] =k; }
        else if (array[i]=="l"){array[i] =l; }
        else if (array[i]=="m"){array[i] =m; }
        else if (array[i]=="n"){array[i] =n; }
        else if (array[i]=="o"){array[i] =o; }
        else if (array[i]=="p"){array[i] =p; }
        else if (array[i]=="q"){array[i] =q; }
        else if (array[i]=="r"){array[i] =r; }
        else if (array[i]=="s"){array[i] =s; }
        else if (array[i]=="t"){array[i] =t; }
        else if (array[i]=="u"){array[i] =u; }
        else if (array[i]=="v"){array[i] =v; }
        else if (array[i]=="w"){array[i] =w; }
        else if (array[i]=="x"){array[i] =x; }
        else if (array[i]=="y"){array[i] =y; }
        else if (array[i]=="z"){array[i] =z; }
        else if (array[i]=="1"){array[i] =n1; }
        else if (array[i]=="2"){array[i] =n2; }
        else if (array[i]=="3"){array[i] =n3; }
        else if (array[i]=="4"){array[i] =n4; }
        else if (array[i]=="5"){array[i] =n5; }
        else if (array[i]=="6"){array[i] =n6; }
        else if (array[i]=="7"){array[i] =n7; }
        else if (array[i]=="8"){array[i] =n8; }
        else if (array[i]=="9"){array[i] =n9; }
        else if (array[i]=="0"){array[i] =n0; }
        else if (array[i]==" "){array[i] =space; }



      }
      for(i=0;i<cant;i++){
        var b5 = i;
        total=total+array[i];
      }

  function result() {

        document.getElementById("resultado").innerHTML = total ;
        console.log(cant);

  }
  result();
}
funcion();
function limpiar(){
  var total="";
  document.getElementById("resultado").innerHTML = total ;
}
limpiar();
