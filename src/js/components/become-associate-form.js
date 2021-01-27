import { validateField, validateFormFields } from "./forms/validations";

$(function () {
    const $form = $('form#becomeAssociateForm');
    if ($form.length === 0) return;

    const action = $form.attr('action');
    const method = $form.attr('method');

    $form.find('input:not([type=radio]):not([type=file]), textarea')
        .one('change', function () {
            validateField($(this));
            $(this).on('input', function () {
                validateField($(this));
            })
        })

    $form.on('submit', function (e) {
        e.preventDefault();

        if (!$form.hasClass('has-submit')) {
            // we wanna go into eager validation mode
            // where on each input, we run the validation
            $form.find('input').trigger('change')
            $form.addClass('has-submit');
        }

        const isValid = validateFormFields($(this));
        if (!isValid) {
            const $invalidInputs = $(this).find('input:not(.valid):not([type=radio]), .is-invalid');
            $invalidInputs.add($(this).find('input[type=file].is-invalid').parent())
            const $firstError = $invalidInputs.first();
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
            data: JSON.stringify(formData),
            contentType: 'application/json'
        }).done(data => {
            // go to thank you
        }).fail(error => {
            // show user
        })
    })
})
