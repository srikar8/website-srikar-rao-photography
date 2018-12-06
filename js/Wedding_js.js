var Image = new Array(); 

for (j=0;j<=50;++j) {
Image[j] = "images/Wedding/"+j+".jpg"; 
 }


function displayAllImages() {

// Here has to be some error!!! //

 for (i=0;i<=Image.length;i++) {

     document.write("<div class='" + "grid-item" + "' data-order='" + i + "'><img class='"+ "img-responsive'" + "src='" + Image[i] + "' width='100%' /></div>");

}

}