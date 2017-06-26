
// 1 - HOVER-OVER VISUAL EFFECTS

$('.option1a').mouseover(function(){
  $('.option1a').addClass('option-hover');
  $('.option1a').mouseout(function(){
    $('.option1a').removeClass('option-hover');
  })
})

$('.option1b').mouseover(function(){
  $('.option1b').addClass('option-hover');
  $('.option1b').mouseout(function(){
    $('.option1b').removeClass('option-hover');
  })
})

// 2 HOVER-OVER VISUAL EFFECTS

$('.option2a').mouseover(function(){
  $('.option2a').addClass('option-hover');
  $('.option2a').mouseout(function(){
    $('.option2a').removeClass('option-hover');
  })
})

$('.option2b').mouseover(function(){
  $('.option2b').addClass('option-hover');
  $('.option2b').mouseout(function(){
    $('.option2b').removeClass('option-hover');
  })
})

// 1 - CLICK EFFECTS

$('.option1a').click(function(){
  $('.option1a').addClass('select');
  $('.option1b').addClass('de-select');
  $('.check1a').addClass('check-select');
  $('.check1b').removeClass('check-select');
  $('.msub').text("$349");
  $('.option1b').click(function(){
    $('.option1a').removeClass('select');
    $('.option1a').addClass('de-select');
    $('.option1b').removeClass('de-select');
    $('.check1b').addClass('check-select');
    $('.check1a').removeClass('check-select');
  })
  $('.option2a').click(function() {
    $('.msub').text("$449");
    $('.setup').text("$7,000");
    $('.firstyear').text("$12,388");
    $('.secondyear').text("$5,388");
  })
  $('.option2b').click(function() {
    $('.msub').text("$349");
    $('.setup').text("$5,000");
    $('.firstyear').text("$9,188");
    $('.secondyear').text("$4,188");
  })
})

$('.option1b').click(function(){
  $('.option1b').addClass('select');
  $('.option1a').addClass('de-select');
  $('.check1b').addClass('check-select');
  $('.check1a').removeClass('check-select');
  $('.msub').text("$799");
  $('.option1a').click(function(){
    $('.option1b').removeClass('select');
    $('.option1b').addClass('de-select');
    $('.option1a').removeClass('de-select');
    $('.check1a').addClass('check-select');
    $('.check1b').removeClass('check-select');
  })
  $('.option2a').click(function(){
    $('.msub').text("$1,198");
    $('.setup').text("$7,000");
    $('.firstyear').text("$21,376");
    $('.secondyear').text("$14,376");
  })
  $('.option2b').click(function(){
    $('.msub').text("$799");
    $('.setup').text("$5,000");
    $('.firstyear').text("$14,588");
    $('.secondyear').text("$9,588");
  })
})

$('.option1a').click(function() {

  if  ( $('.option1a').is('.select') ) {
    //IF option 1a is selected
    $('.option1a').removeClass('de-select');
    $('.check1a').addClass('check-select');
    // $('.msub').text("$349");
  }
  else {
    //Else if, the light is currently off
    $('.option1a').removeClass('select');
    $('.check1a').removeClass('check-select');
    $('.msub').text(" ");
  }
})

$('.option1b').click(function() {

  if  ( $('.option1b').is('.select') ) {
    //IF option 1a is selected
    $('.option1b').removeClass('de-select');
    $('.check1b').addClass('check-select');
    // $('.msub').text("$799");
  }
  else {
    //Else if, the light is currently off
    $('.option1b').removeClass('select');
    $('.check1b').removeClass('check-select');
    $('.msub').text(" ");
  }
})

// 2 - CLICK EFFECTS

$('.option2a').click(function(){
  $('.option2a').addClass('select');
  $('.option2b').addClass('de-select');
  $('.check2a').addClass('check-select');
  $('.check2b').removeClass('check-select');
  $('.option2b').click(function(){
    $('.option2a').removeClass('select');
    $('.option2a').addClass('de-select');
    $('.option2b').removeClass('de-select');
    $('.check2b').addClass('check-select');
    $('.check2a').removeClass('check-select');
  })
  $('.option1a').click(function(){
    $('.msub').text("$449");
    $('.setup').text("$7,000");
    $('.firstyear').text("$12,388");
    $('.secondyear').text("$5,388");
  })
  $('.option1b').click(function() {
    $('.msub').text("$1,198");
    $('.setup').text("$7,000");
    $('.firstyear').text("$21,376");
    $('.secondyear').text("$14,376");
  })
})

$('.option2b').click(function(){
  $('.option2b').addClass('select');
  $('.option2a').addClass('de-select');
  $('.check2b').addClass('check-select');
  $('.check2a').removeClass('check-select');
  $('.option2a').click(function(){
    $('.option2b').removeClass('select');
    $('.option2b').addClass('de-select');
    $('.option2a').removeClass('de-select');
    $('.check2a').addClass('check-select');
    $('.check2b').removeClass('check-select');
  })
  $('.option1a').click(function(){
    $('.msub').text("$349");
    $('.setup').text("$5,000");
    $('.firstyear').text("$9,188");
    $('.secondyear').text("$4,188");
  })
  $('.option1b').click(function(){
    $('.msub').text("$799");
    $('.setup').text("$5,000");
    $('.firstyear').text("$14,588");
    $('.secondyear').text("$9,588");
  })
})

// $('.option2a')click(function(){
//   if ( ('.msub').is("$349") {
//     $('.msub').text("$349" + "100");
//   }
//
//   else {
//     $('.msub').text("$349");
//   }
//
// })

// $('.option1a').click(function() {
//   if  ( $('.option1a').is('select') ) {
//     $('.option2b').removeClass('de-select');
//     $('check2b').addClass('check-select');
//   }
//
//   else {
//     $('.option2b').removeClass('select');
//     $('.check2b').removeClass('check-select');
//   }
// })
