$(document).ready(() => {

  $('#text').on('keyup', (event) => {
    $('.preview').html($(event.currentTarget).val())
  })

    $('#weight').on('change', (event) => {
      $('.preview').css({
        fontWeight: $(event.currentTarget).val()
      })
    })

    $('#font').on('change', (event) => {
      $('.preview').css({
        fontFamily: $(event.currentTarget).val()
      })
    })

    $('#size').on('keyup', (event) => {
      let fontSize = $(event.currentTarget).val() + 'px';
      $('.preview').css({
        fontSize: fontSize
      })
    })

    $('#decoration').on('change', (event) => {
      $('.preview').css({
        textDecoration: $(event.currentTarget).val()
      })
    })

  $('#text').on('keyup', (event) => {
    let post = $(event.currentTarget).val();
    let remaining = post.length;
    
    $('.characters').html(remaining);
  })

     $('#color').on('change', (event) => {
    $('.preview').css({
      color: $(event.currentTarget).val()
    })
     
  })

});