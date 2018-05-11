var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(data) {
      callback(data);
    }
  });
};

window.searchYouTube = searchYouTube;
