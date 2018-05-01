var Image = new Array(); 

for (j=1;j<=248;j++) {

    best=11;

    sharma=55;

    anandbenz=38;

    divij=42;

    kabir=39;

    keny=29;

    theerth=34;

    if(j<=11){

Image[j] = "images/Birthdayparty/best/"+j+".jpg"; //11

    }

     else if(11<j && j<=40){

        

Image[j] = "images/Birthdayparty/keny/"+(j-11)+".jpg"; //29

}

    

    else if(40<j && j<=95){

        

Image[j] = "images/Birthdayparty/"+(j-40)+".jpg"; //55

}

    else if(95<j && j<=133){

        

Image[j] = "images/Birthdayparty/anandbenz/"+(j-95)+".jpg"; //38

}

    else if(133<j && j<=175){

        Image[j] = "images/Birthdayparty/divij/"+(j-133)+".jpg"; //42

    }

    else if (175<j && j<=214)

        {

            Image[j] = "images/Birthdayparty/kabir/"+(j-175)+".jpg"; //39

        }

    else if(214<j && j<=248)

        {

            Image[j] = "images/Birthdayparty/theerth/"+(j-214)+".jpg"; //34

            

        }

}



function displayAllImages() {

// Here has to be some error!!! //

 for (i=1;i<=Image.length;i++) {

     if(i%2==0 && i%4==2 )

     {

         document.write("<div class='" + "item box animated bounceInUp animphotos" + "' data-order='" + i + "'><img src='" + Image[i] + "' width='100%' /></div>");

         

         

     } else if(i%3==0)

         {

         document.write("<div class='" + "item box animated bounceInLeft animphotos" + "' data-order='" + i + "'><img src='" + Image[i] + "' width='100%' /></div>");

         

         

     } else if(i%4==0)

         {

         document.write("<div class='" + "item box animated bounceInDown animphotos" + "' data-order='" + i + "'><img src='" + Image[i] + "' width='100%' /></div>");

         }

      else {

    document.write("<div class='" + "item box animated bounceInRight animphotos" + "' data-order='" + i + "'><img src='" + Image[i] + "' width='100%' /> </div>");

     } 

}

}