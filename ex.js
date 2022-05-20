let areadeinteresse="";
let tecnologiasaprendidas="";

function updateTech(value){
  let selecteddiv = "";
  if ( value.includes("spec") ){
    let selectvalue = document.getElementById("spec").value
    if (tecnologiasaprendidas.includes(selectvalue) == false) {
      if ( tecnologiasaprendidas.length === 0 )
        tecnologiasaprendidas += selectvalue;
      else
        tecnologiasaprendidas += " e " + selectvalue;
     }
     // window.alert(tecnologiasaprendidas);
     document.getElementById("learnbynow").innerHTML=tecnologiasaprendidas;
     return;
  }
  if (tecnologiasaprendidas.includes(value) == false) {
    if ( tecnologiasaprendidas.length === 0 )
      tecnologiasaprendidas += value;
    else
      tecnologiasaprendidas += " e " + value;
    if (confirm('Continuar se especializando nesta area?') == false){
       if ( value.includes("Vuejs") || value.includes("React") ){
          document.getElementById("divfront").innerHTML = "";
       }
      else{
        document.getElementById("divback").innerHTML = "";
      }
      if (confirm('Quer se tornar FullStack') == false){
        if ( value.includes("Vuejs") || value.includes("React") ){
            document.getElementById("divback").innerHTML = "";
          
        }
        else{
            document.getElementById("divfront").innerHTML = "";
            
        }
     } 
    }
    else{
        if ( tecnologiasaprendidas.includes("C#") &&
             tecnologiasaprendidas.includes("Java") 
        ){
            document.getElementById("divback").innerHTML = "";
        }
        if ( tecnologiasaprendidas.includes("Vuejs") &&
            tecnologiasaprendidas.includes("React") 
         ){
            document.getElementById("divfront").innerHTML = "";
         }
         
    }
    if ( tecnologiasaprendidas.includes("Vuejs") &&
         tecnologiasaprendidas.includes("React") &&
         tecnologiasaprendidas.includes("C#") &&
         tecnologiasaprendidas.includes("Java")
       ){ 
        document.getElementById("divback").innerHTML = "";
        document.getElementById("divfront").innerHTML = "";
        document.getElementById("morespecs").innerHTML = 
            "<h3>Informe em mais areas em que deseja se especializar:</h3> "+
            "<select name=\"spec\" id=\"spec\">"+
            "<option value=\"python\" selected>Python</option>"+
            "<option value=\"kotlin\">Kotlin</option>"+
            "<option value=\"swift\">Swift</option>"+
            "<option value=\"html5\">HTML5</option>"+
            "</select>"+
            "<input class=\"\" type=\"button\" id=\"sendspec\" value=\"Enviar\""+
            "onclick=\"updateTech('spec')\"></input>";
       }
  }
  document.getElementById("learnbynow").innerHTML=tecnologiasaprendidas;
  // window.alert(tecnologiasaprendidas);
}
function setAreaFrontEnd() {
    // areadeinteresse = document.getElementById()
    areadeinteresse = document.getElementById("Front").value;
       document.getElementById("fronttech").
            innerHTML =
             "<br><input class=\"\" type=\"button\" id=\"Vue\" value=\"Vuejs\" onclick=\"updateTech(this.value)\">"+
             "<input class=\"\" type=\"button\" id=\"React\" value=\"React\" onclick=\"updateTech(this.value)\">"
  // window.alert(areadeinteresse);
}
function setAreaBackEnd() {
  areadeinteresse = document.getElementById("Back").value;
  document.getElementById("backtech").
            innerHTML =
             "<br><input class=\"\" type=\"button\" id=\"C#\" value=\"C#\" onclick=\"updateTech(this.value)\">"+
             "<input class=\"\" type=\"button\" id=\"Java\" value=\"Java\" onclick=\"updateTech(this.value)\">"
  // window.alert(areadeinteresse);
}