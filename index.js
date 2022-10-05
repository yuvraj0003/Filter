

// navbar toggle feature
var toggler = $('.nbar-toggler')
toggler.css("display" , "none");



$('.nbar-btn').click(function(){
    toggler.slideToggle("display" , "");
})



// content 

var food = $(".food");
var cupcakes = $('.cupcake-1 , .cupcake-2');

var milkshakes = $('.ms1 , .ms2');

var pizzas = $('.pizza-1 , .pizza-2')


$('.all').click(function(){
    food.css("display" , "");
})
    

$('.cupcakes').click(function(){
    food.css("display" , "none");
    cupcakes.css("display" , "");
})

$('.pizza').click(function(){
    food.css("display" , "none");
    pizzas.css("display" , "");
})

$('.milkshakes').click(function(){
    food.css("display" , "none");
    milkshakes.css("display" , "");
})