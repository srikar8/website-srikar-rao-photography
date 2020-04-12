var Image = new Array(); 
var Image_500px = new Array(); 

function displaygalleryImages(wedding_name,wedding_name_500px, num_of_photos) {
 for (j=0;j<=num_of_photos;++j) {
 	Image[j] = wedding_name+j+".jpg";
 	Image_500px[j] = wedding_name_500px+j+".jpg";
	}

// Here has to be some error!!! //

 for (i=0;i<=Image.length;++i) {
 	var str2="<div class='" + "grid-item" + "' data-order='" + i + "' data-aos='" + "fade-up" + "' data-aos-delay='" +"300"+ "'><a href='" + Image[i] + "' class='"+ "d-block photo-item'" + " data-fancybox='" + "gallery" + "'><img src='" + Image_500px[i]+ "' alt='"+"Image"+"' class='"+"img-fluid img-responsive "+"'><div class='"+"photo-text-more"+"'><span class='"+"icon icon-search"+"'></span></div></a></div>";
 	document.write(str2);
 	console.log(str2);


 	
}
          
}




