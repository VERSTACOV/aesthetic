function ibg(){$.each($(".ibg"),function(e,t){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})}$(".wrapper").addClass("loaded"),$(document).ready(function(){$(".item__title").click(function(e){$(".spoler").hasClass("one")&&($(".item__title").not($(this)).removeClass("active"),$(".item__text").not($(this).next()).slideUp(300)),$(this).toggleClass("active").next().slideToggle(300)})}),$(document).ready(function(){$(".slider").slick({arrows:!0,adaptiveHeight:!0})}),$(document).ready(function(){$(".header__burger").click(function(e){$(".header__burger,.header__menu").toggleClass("active")})}),ibg();
