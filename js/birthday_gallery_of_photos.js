var Image = new Array(); 

function displaygalleryImages(wedding_name, num_of_photos) {
 for (j=0;j<=num_of_photos;++j) {
 	Image[j] = wedding_name+j+".jpg"; 
	}

// Here has to be some error!!! //

 for (i=0;i<=Image.length;++i) {
 	var str2="<div class='" + "grid-item" + "' data-order='" + i + "' data-aos='" + "fade-up" + "' data-aos-delay='" +"100"+ "'><a href='" + Image[i] + "' class='"+ "d-block photo-item'" + " data-fancybox='" + "gallery" + "'><img src='" + Image[i]+ "' alt='"+"Image"+"' class='"+"img-fluid img-responsive "+"'><div class='"+"photo-text-more"+"'><span class='"+"icon icon-search"+"'></span></div></a></div>";
 	document.write(str2);
 	console.log(str2);


 	
}
          
}




