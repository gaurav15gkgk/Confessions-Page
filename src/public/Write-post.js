$('#Submit').click( async() => {
    currentuser = JSON.parse(window.localStorage.user)

    if($('#title-of-post').val()== "" ||$('#message-body').val()=="")
    {
        $('#error ').text("Please Enter the Title of the post or the body of the post ")
    }
    else{
    await $.post('/api/posts', {
        
            userId: currentuser.id,
            title:  $('#title-of-post').val(),
            body: $('#message-body').val()
          } )
        
    var url = "http://localhost:8383/";
    await $(location).attr('href',url); 
        }
})

