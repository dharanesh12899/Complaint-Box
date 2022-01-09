$(document).ready(function() {

    $("#prob").change(function() {
        if ($(this).val() == "No Power Supply") {
            $('#third-1').show();
            $('#power').attr('required', '');
            $('#power').attr('data-error', 'This field is required.');
            $('#third-2').hide();
            $('#third-3').hide();
            $('#third-4').hide();
            $('#third-5').hide();
            $('#generic').removeAttr('required');
            $('#generic').removeAttr('data-error');
            $('#line').removeAttr('required');
            $('#line').removeAttr('data-error');
            $('#pole').removeAttr('required');
            $('#pole').removeAttr('data-error');
            $('#trans').removeAttr('required');
            $('#trans').removeAttr('data-error');
        } else if ($(this).val() == "Generic Complaints") {
            $('#third-2').show();
            $('#generic').attr('required', '');
            $('#generic').attr('data-error', 'This field is required.');
            $('#third-1').hide();
            $('#third-3').hide();
            $('#third-4').hide();
            $('#third-5').hide();
        } else if ($(this).val() == "Line Related") {
            $('#third-3').show();
            $('#line').attr('required', '');
            $('#line').attr('data-error', 'This field is required.');
            $('#third-1').hide();
            $('#third-2').hide();
            $('#third-4').hide();
            $('#third-5').hide();
        } else if ($(this).val() == "Pole Related") {
            $('#third-4').show();
            $('#pole').attr('required', '');
            $('#pole').attr('data-error', 'This field is required.');
            $('#third-1').hide();
            $('#third-2').hide();
            $('#third-3').hide();
            $('#third-5').hide();
        } else if ($(this).val() == "Transformer Related") {
            $('#third-5').show();
            $('#trans').attr('required', '');
            $('#trans').attr('data-error', 'This field is required.');
            $('#third-1').hide();
            $('#third-2').hide();
            $('#third-3').hide();
            $('#third-4').hide();
        } else {
            $('#third-1').hide();
            $('#third-2').hide();
            $('#third-3').hide();
            $('#third-4').hide();
            $('#third-5').hide();
        }
    });
});
$("#prob").trigger("change");