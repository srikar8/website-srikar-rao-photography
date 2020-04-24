var Image = new Array();  

function displaygalleryImages(wedding_name, num_of_photos) {
 for (j=0;j<=num_of_photos;++j) {
 	Image[j] = wedding_name+j+".jpg";
	}

// Here has to be some error!!! //

 for (i=0;i<=Image.length;++i) {
 	var str2="<div class='" + "grid-item" + "' data-order='" + i + "' data-aos='" + "fade-up" + "' data-aos-delay='" +"300"+ "'><a href='" + Image[i] + "' class='"+ "d-block photo-item'" + " data-fancybox='" + "gallery" + "'><img src='" + Image[i]+ "' alt='"+"Image"+"' class='"+" img-fluid img-responsive "+"' loading='"+"lazy"+"'><div class='"+"photo-text-more"+"'><span class='"+"icon icon-search"+"'></span></div></a></div>";
 	document.write(str2); 	
}
          
}



/*

<div class="grid-item" data-order="2" data-aos="fade-up" data-aos-delay="300">
    <a href="2.jpg" class="d-block photo-item" data-fancybox="gallery">
        <img src="2.jpg" alt="Image" class=" img-fluid img-responsive ">
            <div class="photo-text-more">
                <span class="icon icon-search"></span>
            </div>
     </a>
</div>

*/
/*
<div class="grid-item" data-order="1">
    <a href="/images/Wedding/best-premium-candid-photographer-SrikarRao-Bangalore-0.jpg" class="d-block photo-item" data-fancybox="gallery">
        <img src="/images/Wedding/best-premium-candid-photographer-SrikarRao-Bangalore-Anusha-Abhishek/best-premium-candid-photographer-SrikarRao-Bangalore-0.jpg" alt="Image" class=" img-fluid img-responsive ">
        
    </a>
</div>

*/ 




/*

###https://www.chaseadams.io/posts/set-an-anchor-link-on-an-image-in-markdown/
<div class="grid-item" data-order="0" data-aos="fade-up" data-aos-delay="300">
[![best-premium-candid-photographer-SrikarRao-Bangalore-0](/images/Wedding/best-premium-candid-photographer-SrikarRao-Bangalore-Anusha-Abhishek/best-premium-candid-photographer-SrikarRao-Bangalore-0.jpg){:class="img-fluid img-responsive"  loading="lazy"}](/images/Wedding/best-premium-candid-photographer-SrikarRao-Bangalore-Anusha-Abhishek/best-premium-candid-photographer-SrikarRao-Bangalore-0.jpg){:class="d-block photo-item" data-fancybox="gallery"}
</div>


*/

