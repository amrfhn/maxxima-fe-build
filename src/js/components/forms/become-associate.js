import { validateField, validateFormFields } from "./validations";

$(function () {
    const $form = $('form#becomeAssociateForm');
    if ($form.length === 0) return;

    const $formGeneralError = $form.find('.form-general-error');
    const $submit = $form.find('button[type=submit]');
    const action = $form.attr('action');
    const method = $form.attr('method');

    $form.find('input, select, textarea')
        .one('blur', function () {
            $(this).addClass('touched');
        })
        .one('input', function () {
            $(this).addClass('dirty');
        })
        .one('change', function () {
            validateField($(this));
            $(this).on('input', function () {
                validateField($(this));
            })
        })

    $form.on('submit', function (e) {
        e.preventDefault();

        $formGeneralError.addClass('d-none');

        if (!$form.hasClass('has-submit')) {
            // we wanna go into eager validation mode
            // where on each input, we run the validation
            $form.find('input').trigger('change')
            $form.addClass('has-submit');
        }

        const isValid = validateFormFields($(this));
        if (!isValid) {
            const $firstError = $(this).find('input:not(.valid), select:not(.valid)').first();
            const headerHeight = $('header').height();
            window.scrollTo({ top: $firstError.parent().offset().top - headerHeight, behavior: 'smooth' })
            return;
        }

        let formData = {
            ...$form
                .serializeArray()
                .reduce((acc, curr) => {
                    acc[curr.name] = curr.value;
                    return acc;
                }, {}),
        }

        $.ajax({
            method,
            url: action,
            data: formData,
            contentType: 'application/json'
        }).done(data => {
            // go to thank you
            $form.addClass('submit-success');
        }).fail(error => {
            // show user
            $formGeneralError.removeClass('d-none');
            $submit.attr('disabled', false);
        })
    })
})
