console.log('feed me javascripts')

function appendFBName(data) {
	var li = $('<li>');
	li.addClass('good');
	li.text(data.name)
		
	results.empty();
	results.append(li);
	results.fadeIn();
}

function appendSadFace() {
	var li = $('<li>');
	li.addClass("bad");
	li.text(":(");
	results.empty();
	results.append(li);
	results.fadeIn();
}


var results, fbd;


var base_url = 'https://graph.facebook.com/'

$(function(){

  results = $('#results');
  results.hide();
  var search_form = $('#search-form')

  search_form.submit(function(e){
    e.preventDefault();
    results.hide();
    var self = $(this);
    var fbname = self.serializeArray()[0].value;

    $.get(base_url + fbname).done(appendFBName).fail(appendSadFace);
    return false;
  });

  $('#search-button').on('click', function() {
    search_form.submit();
  })


});