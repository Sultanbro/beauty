$('.requestPrice').on('submit', function (e) {
    e.preventDefault();
    var form = this;
    var data = new FormData(form);
    var url = $(this).attr('action');
    $(this).find(':input[type=submit]').prop('disabled', true);
    $.ajax({
        url: url,
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        //headers: {'X-CSRF-TOKEN': _token},
        method: "POST",
    }).done(function (response) {
        $('.form-message').css('display', 'block')
        setTimeout(()=> {
            $('.form-message').css('display', 'none')
            form.reset()
        }, 3500)
    }).fail(function (jqXHR, textStatus, errorThrown) {
        // validateForm(form2, jqXHR.responseJSON.errors);
    }).always(function (jqXHR, textStatus, errorThrown) {
        // validateForm(form2, jqXHR.responseJSON.errors);
    });

    $(this).find(':input[type=submit]').prop('disabled', false);

})
