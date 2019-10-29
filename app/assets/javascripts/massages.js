$(function() {
  function buildHTML(message){
    var image = (message.image.url) ? `<img class="lower-message__image" src=${message.image.url} >` : "";
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__info">
            <div class="message__info__user-name">
              ${message.user_name}
            </div>
            <div class="message__info__date">
              ${message.date}
            </div>
          </div>
          <div class="message__text">
            <div class="lower-message__content">
              ${message.content}
            </div>
            ${image}
          </div>
          
        </div>`
      return html;
  }
  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
      $('form')[0].reset();
    })
     .fail(function(){
       alert('error');
     });
     return false;
   });

   var reloadMessages = function() {
    last_message_id = $('.message').last().attr('data-message-id')
    $.ajax({
      url: "api/messages",
      type: "get",
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(messages) {
      insertHTML += buildHTML(messages);
      
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast'); 
      });
    })
    .fail(function() {
      console.log('error');
    });
  };
  setInterval(reloadMessages, 5000);
});
