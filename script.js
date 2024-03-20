function activeTab(evt, id) {
           
    // Get all elements with class="tablinks" and remove the class "active"
     let tabactive = document.getElementsByClassName("TabButtonSelected");
     tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

     document.getElementById(id).style.display = "block";
     evt.currentTarget.className += " TabButtonSelected";

     displaySection(evt,id)
 }
 
function displaySection(evt, id) {

     let tabactive = document.getElementsByClassName("tab-section");
     tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
     // add below line of codes
     [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
     document.getElementById("Section" + id).style.display = "block";
     evt.currentTarget.className += " d-chart-show";

}

var counted = 0;
$(window).scroll(function() {

  var count = $('#counter');
  if(count.length){
  var oTop = count.offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum) + `+`);
          },
          complete: function() {
            $this.text(this.countNum + `+`);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
}

});



document.querySelectorAll('.accordion-title').forEach((accordionToggle) => {
    accordionToggle.addEventListener('click', () => { 
      const accordionItem = accordionToggle.parentNode;
      const accordionContent = accordionToggle.nextElementSibling;
  
      // If this accordion item is already open, close it.
      if (accordionItem.classList.contains('active')) {
        accordionContent.style.maxHeight = null;
        accordionItem.classList.remove('active');
      } else {
        // Close all other accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
          const content = item.querySelector('.accordion-content');
          content.style.maxHeight = null;
        });
  
        // Open this accordion item
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        accordionItem.classList.add('active');
      }
    });
  });

  

  // product image zoom

//Demo: https://www.codehim.com/demo/zoom-image-on-mouseover-using-javascript/
let zoomer = function (){
  document.querySelector('#img-zoomer-box')
    .addEventListener('mousemove', function(e) {

    let original = document.querySelector('#img-1'),
        magnified = document.querySelector('#img-2'),
        style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        imgWidth = original.offsetWidth,
        imgHeight = original.offsetHeight,
        xperc = ((x/imgWidth) * 100),
        yperc = ((y/imgHeight) * 100);

    //lets user scroll past right edge of image
    if(x > (.01 * imgWidth)) {
      xperc += (.15 * xperc);
    };

    //lets user scroll past bottom edge of image
    if(y >= (.01 * imgHeight)) {
      yperc += (.15 * yperc);
    };

    style.backgroundPositionX = (xperc - 5) + '%';
    style.backgroundPositionY = (yperc - 5) + '%';

    style.left = (x - 250) + 'px';
    style.top = (y - 250) + 'px';

  }, false);
}();



// file add

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});