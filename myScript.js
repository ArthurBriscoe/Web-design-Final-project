
	
myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);

    function onClick() {  
        myitem.style.color = "green";  
    }
		
	var myitem = document.getElementById("firsttest");

	myitem.addEventListener("click", onClick);
	
	function onClick() {  
		myitem.style.color = "red"; 
		myitem.style.backgroundColor = "lightblue"; // Change background color
	}