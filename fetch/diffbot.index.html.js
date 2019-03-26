
// Diffbot API

var url = 'https://www.pornhub.com/view_video.php?viewkey=ph5a9a5c54efd27';
var urlEncoded = encodeURIComponent(url);
var apiKey = '20edc4e48eb90501a3be5861adfdb13d'; 

// The entire request is just a simple get request with optional query parameters
// https://api.diffbot.com/v3/analyze?token=...&url=...

var requestUrl = "https://api.diffbot.com/v3/analyze?token=" + apiKey + "&url=" + urlEncoded;



$('#loadDiffbotData').click(function(){
  if(apiKey === 'xxxxxx'){
    return alert('Please set your apiKey on line 3!');
  }

  
  $.getJSON(requestUrl, function( json ) {
  
    // Throw the object in the console to see what it looks like!
    console.log('json', json);
    
    // Const Var for Bootstrap Responsive Embed
   
   	var embedCode = CODE;
   	var embedCodeEncoded = encodeURIComponent(embedCode);
    
    var respEmbedCode = `
    	<div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src=\"" + vidIframeCode + "\"scrolling="no" allowfullscreen></iframe>
      </div><!-- id=embed -->
      `
    
    
    // Update the HTML elements!
    
    $('#title').text(json.objects.title);
    $('#description').text(json.objects.description);
    $('#mainImage').text(json.objects.images.url);
    $('#pageUrl').text(json.objects.pageUrl);
    $('#videoControlHtml').text(json.objects.html);
    $('#videoDuration').text(json.objects.html);
    $('#videoKey').pageUrl.FIX.text.getVideoKey();
    $('#respEmbedCode').
    
    $('#title').text(json.hybridGraph.title);
    $('#description').text(json.hybridGraph.description);
    $('#icon').attr('src', json.hybridGraph.image);

  });    
});





20edc4e48eb90501a3be5861adfdb13d