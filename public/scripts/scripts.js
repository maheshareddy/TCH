$(document).ready(function(){

	var pp=0;

	$(".butn").click(function(){

		var div_well= $("<div></div>",{
			class:"well walle"

		});

		var name= $("<p></p>",{
			class:"para_kart_name",
			text:$(this).siblings('.name').attr('data-prod')
		});

		var price= $("<p>"+"Price :"+$(this).siblings('.price').attr('data-price')+"</p>")

		var button_remove=$("<button>remove</button>",{

			 type:"submit",
			 class:"btn btn-default"
			
		});

		var quantity=$(this).siblings('.inpt').val();

		var quantity_add= $("<p>"+"Quantity :"+quantity+"</p>")

		var total_price=quantity*$(this).siblings('.price').attr('data-price');

		
		pp=pp+total_price;

		console.log(pp);
		

		var total_price_diaplay= $("<p>"+"Total :"+total_price+"</p>")

		var cart_bottom= $(".panel-body")

		



		

		
		

		name.appendTo(div_well);
		price.appendTo(div_well);
		quantity_add.appendTo(div_well);
		total_price_diaplay.appendTo(div_well);
		button_remove.appendTo(div_well);

		var scroller= $("div.scroller");
		if(quantity){
			div_well.appendTo(scroller);
			cart_bottom.html("<p>"+"Total :"+pp+ " Rs"+ "</p> <a href='/payment'> <button>Proceed For Payment</button></a>");



		}else{
			alert('insert the qunatity!');
		}
		button_remove.click(function(){

			$(this).parent(".well").remove();




	
	 



		});

	});

});







           



		

		

		

		

