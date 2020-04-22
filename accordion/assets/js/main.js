// Put your javascript or jquery here.
// Remember to comment well. Sections, which page it's used on, and what each function does, and in most cases what each line does.

$(function(){
    $(".accordian h3").click(function(e){
      $('accordian h3').find('.fa.fa-plus open').toggleClass('open');
      $($(e.target).find('.fa.fa-plus').toggleClass('open'));
    $(".accordian ul ul").slideUp();
      if ($(this).next().is(":hidden")){
      $(this).next().slideDown();
      }
    });
  
});