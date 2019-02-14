var Image = new Array(); 

function displayAllImages(wedding_name, num_of_photos) {
 for (j=0;j<=num_of_photos;++j) {
 	Image[j] = wedding_name+j+".jpg"; 
	}

// Here has to be some error!!! //

 for (i=0;i<=Image.length;++i) {

     document.write("<div class='" + "grid-item" + "' data-order='" + i + "'><img class='"+ "img-responsive'" + "src='" + Image[i] + "' width='100%' /></div>");

}

}


//to be updated to below one
/**const testFolder = 'images/Wedding/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});**/

