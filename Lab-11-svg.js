//LAB 11 - SVG WINTER SCENE

window.onload = function(){
	
    //coordinate identifier
    var svgBox = document.getElementById("svgDiv");
	svgBox.onclick = showPosition;

	function showPosition(e){
		var xPos = e.clientX -8;//TO ACCOUNT FOR THE OFFSET
		var yPos = e.clientY -8;
		console.log("X:" + xPos + " Y:" + yPos);
	}
    
    var formHandle = document.forms.formContact;
    
    formHandle.onsubmit = processForm;
    
    function processForm(){
        var circ1 = document.getElementById("d1");
        var circ2 = document.getElementById("d2");
        var circ3 = document.getElementById("d3");
        var circ4 = document.getElementById("d4");
        
        var star = document.getElementById("star");
        var star2 = document.getElementById("star2");
        
        circ1.style.fill="#a83287";
        circ2.style.fill="#2a20ba";
        circ3.style.fill="#cc831d";
        circ4.style.fill="#edd51f";
        
        star.style.fill= "#e8db2a";
        star2.style.fill= "#e8db2a";
        
        
        return false;
    }
	
	
}//end onload