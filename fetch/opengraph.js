var url = 'https://www.pornhub.com/view_video.php?viewkey=ph5a9a5c54efd27';
var urlEncoded = encodeURIComponent(url);
var apiKey = 'f1c711d0-853a-485e-b185-97f0a93901f8'; // <-- Replace with your app_id from https://www.opengraph.io/

// The entire request is just a simple get request with optional query parameters
var requestUrl = "https://opengraph.io/api/1.1/site/" + urlEncoded + '?app_id=' + apiKey;


$('#loadOpenGraphData').click(function(){
  if(apiKey === 'xxxxxx'){
    return alert('Please set your apiKey on line 3!');
  }

  
  $.getJSON(requestUrl, function( json ) {
  
    // Throw the object in the console to see what it looks like!
    console.log('json', json);
          
    // Update the HTML elements!
    request
    
    
    
    $('#title').text(json.hybridGraph.title);
    $('#description').text(json.hybridGraph.description);
    $('#icon').attr('src', json.hybridGraph.image);

  });    
});
