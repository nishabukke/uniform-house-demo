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