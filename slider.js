//get slider items
var sliderImgs = Array.from(document.querySelectorAll('.slider-container img'));

// get number of slider
var slideCount = sliderImgs.length;

//set current slide
var currentSlide =1;

//slide number element
var slideNumberelement=document.getElementById("slide-number");

//next and previous button
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");


//handel click on the next and previous button
nextButton.onclick= nextSlide;
prevButton.onclick= prevSlide;

//creat the main ul element
var pginationElement = document.createElement("ul");

//set Id on created ul Element
pginationElement.setAttribute("id","pagination-ul");

//create List Items Based on slides Count 
for(var i=1;i<=slideCount;i++)
    {
        //create the Li
        var pginationItems = document.createElement("li");
        
        //set custom attribute
        pginationItems.setAttribute("dataIndex",i);
        
        //set item Content
        pginationItems.appendChild(document.createTextNode(i));
        
        //append items To The Main Ul List
        pginationElement.appendChild(pginationItems);
        
    }
//add the created ul element to the page 
document.getElementById("indecators").appendChild(pginationElement);

//get the new created ul
var paginationCreatedUl = document.getElementById("pagination-ul")

//get pagination  items
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

//loop through all bullets items
for(i=0;i<paginationBullets.length;i++)
    {
       paginationBullets[i].onclick = function()
       {
           currentSlide=parseInt(this.getAttribute("dataindex"));
           
           theCheaker();
       }
    }

//triger cheaker function
theCheaker();


//next slide function
function nextSlide()
{
    if(nextButton.classList.contains("disabled"))
        {
            //do nathing
            return false;
            
        }else
        {
            currentSlide++;
            theCheaker();
        }
}

//previos slide function
function prevSlide()
{
    if(prevButton.classList.contains("disabled"))
        {
            //do nathing
            return false;
            
        }else
        {
            currentSlide--;
            theCheaker();
        }
}

//create the cheaker function
function theCheaker()
{
    //set the slide number
    slideNumberelement.textContent = "slide # " + (currentSlide)+ " of "+(slideCount);
    
    RemoveAllActive();
    
    //set  Active class on crrunt slide
    sliderImgs[currentSlide-1].classList.add("active");
    
    //set active class on current pagination item
    paginationCreatedUl.children[currentSlide-1].classList.add("active");
    
    //cheak if current slideis is the first
    if (currentSlide == 1)
        {
        //add disabled  class on the previous button
            prevButton.classList.add("disabled");
        }else
        {
          //remove disabled  class from the previous button
            prevButton.classList.remove("disabled");  
        }
    
     //cheak if current slideis the last
    if (currentSlide == slideCount)
        {
        //add disabled  class to the next button
            nextButton.classList.add("disabled");
        }else
        {
          //remove disabled  class from the next button
            nextButton.classList.remove("disabled");  
        }
}




//remove all active classes from images and pagination bullets
function RemoveAllActive()
{
    //loop through imgs
    sliderImgs.forEach(function(img)
    {
        img.classList.remove("active");
    });
    
        //loop through pagination bullets
     paginationBullets.forEach(function(bullet)
    {
        bullet.classList.remove("active");
    });

}