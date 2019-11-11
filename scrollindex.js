		window.onscroll = function() {scrolling1()};

		function scrolling1() {
		  if (document.body.scrollTop > 460 || document.documentElement.scrollTop > 460) {
			document.getElementById("txtpage2_1").className = "txtpage2new";
			document.getElementById("corps").className = "corpsnew";
		} else {
			document.getElementById("txtpage2_1").className = "txtpage2";
			document.getElementById("corps").className = "corps";
			
		}
		}	