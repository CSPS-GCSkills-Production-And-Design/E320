//Javascript document
/* is called on every page load, great for adding custom code to all pages*/
function pageLoaded(){
		if(debugMode){$("html").addClass("debug")}
		setLtcColor();
		$(".recomm").click(function(){
			masterStructure.loadTarget();
		});
		var checkthis=masterStructure.currentSub.sPosition;
		if(checkthis=="m6-4-24" || checkthis=="m6-4-25"){
			exceptionOne();//yes this is retarded... I know. it'S an exception. because.
		}
		if(checkthis=="m5-4-28" || checkthis=="m5-4-30"){
			exceptionTwo();//yes this is retarded... I know.
		}
		
		if(checkthis.split("-")[2]>=49){
			exceptionThree();
		}

	}




/* list All pages */	
function listAllPages(gab){
	var sitemap=masterStructure.flatList;
	var returnHtml="<ul>";
	for(i=0;i<sitemap.length;i++){
		if (gab.length==0 || $(sitemap[i].obj).attr("data-gab")==gab){
			returnHtml+="<li> #"+sitemap[i].flatID+" "+sitemap[i].sPosition +" - <a href='#' onClick=\"fNav('"+sitemap[i].sPosition+"')\">"+sitemap[i].title+"</a></li>"
		}
	}
	returnHtml+="</ul>"

	
	return returnHtml;
	}
	
/* switch the css theme */
function setLtcColor(){
		var cNav=masterStructure.currentNav;	
	var bodySection="";
	if(cNav.length>1){
		switch(cNav[0]) {
			case 1: bodySection="th";
			break;
			case 2: bodySection="co";
			break;
			case 3: bodySection="ce";
			break;
			case 4: bodySection="ee";
			break;
		}
	}
	$("body").attr("class", bodySection)
	
	}
function toggleCss(file, timelineDestination){
			 $("link.theme").attr("href", "./theme/"+file+".css") ;
	}

(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);	

function exceptionOne(){
	$("#q1-a").after("<textarea  class=\"col-xs-12\"  rows=\"6\">Il a dit</textarea>");
	$("#q1-a").remove();
	
}


function exceptionTwo(){
	$("p.col-xs-5").removeClass("col-xs-5")
	$(".qs-answers").find("label").css("float", "left").css("padding-bottom", "20px")
}
function exceptionThree(){
	$("p.col-xs-5").addClass("col-xs-4")
	$("p.col-xs-5").removeClass("col-xs-5");
	}