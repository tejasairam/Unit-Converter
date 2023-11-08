function myFunction(){
    let x=document.getElementById("from"); 
    var d=["Celsius","Fahrenhrit","Meters","Feet","Kilograms","Pounds"];
    for(var i=0;i<d.length;i++){
        if(x.value==d[i]){
            document.getElementById("show").placeholder="Enter value in "+x.value;
            document.getElementById("show").style.color="black";
            document.getElementById("show").value="";
            document.getElementById("Showto").value="";
        }
    }
}
function calculate(){
    let k=document.getElementById("from"); 
    let v=document.getElementById('show');
    let one=document.getElementById("one");
    let two=document.getElementById("two");
    if(k.value=="Celsius"){
        if(v.value.length>=10){
            showto.value="Max limit reached";
        }
        one.innerHTML="Celsius(deg C)";
        two.innerHTML="Fahrenhrit(deg F)";
        let f = (parseFloat(v.value) * 9) / 5 + 32; 
        showto.value = parseFloat(f.toFixed(4));  
    }
    else if (k.value == "Meters") {
        one.innerHTML = "Meters(m)";
        two.innerHTML = "Feet(ft)";
        let g = parseFloat(v.value) * 3.2808;
        showto.value = parseFloat(g.toFixed(4));
    }
    else if(k.value=="Kilograms"){
        let v=document.getElementById('show');
        one.innerHTML="Kilograms(kg)";
        two.innerHTML="Pounds(lb)";
        let n=parseFloat(v.value)*2.2046;
        showto.value=parseFloat(n.toFixed(3));
    }
}