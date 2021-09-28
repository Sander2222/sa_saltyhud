/*    Design by Sander#2211
    Point help Discord
    https://discord.gg/VBbS4mED
    */

var blackmoney = false;


$(document).ready(function () {
    window.addEventListener("message", function (event) {
        if (event.data.action == "setMoney") {
          setAnzahl(event.data.money);
		    $(".money").show();
  $("money").show();
        };
        if (event.data.action == "setBlackMoney") {
			blackmoney = true;
          setAnzahle(event.data.black);
  $(".schwarzmoney").show();
  $("schwarzmoney").show();
  					  $(".voice1").hide();
					  $(".voice2").hide();
					  $(".voice3").hide();
					  $(".voice4").hide();
					  $(".voicemuted").hide();
					  $(".voice1black").hide();
					  $(".voice2black").hide();
					  $(".voice3black").hide();
					  $(".voice4black").hide();
					  					    $(".voice" + event.data.level + "black").show();


        };
		        if (event.data.action == "show") {
					if(!blackmoney) {
  $(".funkeblack").hide();
						  $(".funkblack").hide();

  $(".funk").show();
  $(".funke").hide();
					} else {
						  $(".funkblack").show();
  $(".funkeblack").hide();
  
    $(".funk").hide();
  $(".funke").hide();
					}

        };
				        if (event.data.action == "hide") {
							
					if(!blackmoney) {
						  $(".funkblack").hide();
  $(".funkeblack").hide();
  $(".funk").hide();
  $(".funke").show();
					} else {
						  $(".funkblack").hide();
  $(".funkeblack").show();
  
    $(".funk").hide();
  $(".funke").hide();
					}

        };
						        if (event.data.action == "weg") {
  $(".funk").hide();
  $(".funke").hide();
  $(".funkblack").hide();
  $(".funkeblack").hide();

        };
				        if (event.data.action == "muted") {
					if (event.data.muted == true) {
					if(!blackmoney) {
					  $(".voice1").hide();
					  $(".voice2").hide();
					  $(".voice3").hide();
					  $(".voice4").hide();
					  $(".voicemuted").show();
					  $(".voice1black").hide();
					  $(".voice2black").hide();
					  $(".voice3black").hide();
					  $(".voice4black").hide();
					  $(".voicemutedblack").hide();
					} else {
                      $(".voice1").hide();
					  $(".voice2").hide();
					  $(".voice3").hide();
					  $(".voice4").hide();
					  $(".voicemuted").hide();
					  $(".voice1black").hide();
					  $(".voice2black").hide();
					  $(".voice3black").hide();
					  $(".voice4black").hide();
					  $(".voicemutedblack").show();
					}
						
					}
										if (event.data.muted == false) {
					  $(".voicemuted").hide();
											  $(".voicemutedblack").hide();

					}

        };
						        if (event.data.action == "nomuted") {
					  $(".voicemuted").hide();
											  $(".voicemutedblack").hide();

					

        };

		        if (event.data.action == "setVoiceLevel") {
				if(!blackmoney) {
					  $(".voice1").hide();
					  $(".voice2").hide();
					  $(".voice3").hide();
					  $(".voice4").hide();
					  $(".voice1black").hide();
					  $(".voice2black").hide();
					  $(".voice3black").hide();
					  $(".voice4black").hide();
  $(".voice" + event.data.level).show();
				} else {
					  $(".voice1").hide();
					  $(".voice2").hide();
					  $(".voice3").hide();
					  $(".voice4").hide();
					  $(".voice1black").hide();
					  $(".voice2black").hide();
					  $(".voice3black").hide();
					  $(".voice4black").hide();
					    $(".voice" + event.data.level + "black").show();

				}
        };
        if (event.data.action == "hideBlackMoney") {
  $(".schwarzmoney").hide();
  $("schwarzmoney").hide();
  blackmoney = false;
					  $(".voice1black").hide();
					  $(".voice2black").hide();
					  $(".voice3black").hide();
					  $(".voice4black").hide();
					  $(".voicemutedblack").hide();
                      $(".voice" + event.data.level).show();

	};

    });
});

function setAnzahl(anzahl) {
    document.getElementById("content").innerHTML = new Intl.NumberFormat('de-DE').format(anzahl) + " $";

}
function setAnzahle(anzahl) {
    document.getElementById("content2").innerHTML = new Intl.NumberFormat('de-DE').format(anzahl) + " $";

}
