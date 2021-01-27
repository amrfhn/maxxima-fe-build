const $invalidText = $('<small class="invalid-feedback"></small>');

export function validateField ($input) {
    const isRequired = $input.prop('required');
    const $formGroup = $input.parent();
    const val = $input.val()?.trim();

    const errors = [];
    if (isRequired && !(!!val)) {
        errors.push($input.data('msg-required') || '*This field is required');
    }

    if ($input.attr('type') === 'email') {
        const emailRegxp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!emailRegxp.test(val)) {
            errors.push($input.data('msg-email') || '*Please enter a valid email')
        }
    }

    if (!!$input.attr('pattern')) {
        const regexp = new RegExp(`${$input.attr('pattern')}`, 'g');
        if (!regexp.test(val)) {
            errors.push($input.data('msg-pattern') || 'Please enter a valid value')
        }
    }

    if (!!$input.attr('minlength')) {
        const minlength = $input.attr('minlength');
        if (val.length < minlength) {
            errors.push($input.data('msg-minlength') || `Please enter at least ${minlength} characters`);
        }
    }

    if (!!$input.attr('maxlength')) {
        const maxlength = $input.attr('maxlength');
        if (val.length > maxlength) {
            errors.push($input.data('msg-maxlength') || `Please enter only ${maxlength} characters`);
        }
    }
    // add more errors here

    if (errors.length > 0) {
        $formGroup.addClass('has-danger');
        $input.addClass('is-invalid');
        if ($formGroup.has('.invalid-feedback').length > 0) {
            $formGroup.find('.invalid-feedback').text(errors[0]);
        } else {
            $formGroup.append($invalidText.clone().text(errors[0]))
        }
    } else {
        $input.addClass('valid');
        $formGroup.removeClass('has-danger');
        $input.removeClass('is-invalid');
        $input.next('.invalid-feedback').remove()
    }

    return !(errors.length > 0);
}

export function validateRadios ($radios) {
    if ($radios.attr('type') !== 'radio') throw 'Unexpected elements, only `input[type=radio]`s are allowed';
    if (!$radios.prop('required')) return true;

    const $field = $radios.parents('.field.variant-radio');
    const errors = [];
    if ($radios.filter(function () { return $(this).is(':checked') }).length === 0) {
        errors.push('*This field is required')
    }

    if (errors.length > 0) {
        $radios.addClass('is-invalid')
        if ($field.has('.invalid-feedback').length > 0) {
            $field.find('.invalid-feedback').text(errors[0]).addClass('d-block')
        } else {
            $field.append($invalidText.clone().text(errors[0])).addClass('d-block')
        }
    } else {
        $radios.removeClass('is-invalid')
        $field.find('.invalid-feedback').remove()
    }

    return !(errors.length > 0);
}

export function validateFileInput ($input) {
    if ($input.attr('type') !== 'file') throw 'Unexpected elements, only `input[type=radio]`s are allowed';
    if (!$input.prop('required')) return true;

    const $field = $input.parent();
    const errors = [];
    const fileList = $input.get(0).files;
    if (fileList.length === 0) {
        errors.push('*This field is required');
    }

    if (errors.length > 0) {
        $input.addClass('is-invalid');
        if ($field.has('.invalid-feedback').length > 0) {
            $field.find('.invalid-feedback').text(errors[0]).addClass('d-block')
        } else {
            $field.append($invalidText.clone().text(errors[0])).addClass('d-block')
        }
    } else {
        $input.removeClass('is-invalid');
        $field.find('.invalid-feedback').remove()
    }

    return !(errors.length > 0);
}

/**
 * 
 * @param {JQuery} $form 
 */
export function validateFormFields ($form) {
    const $inputs = $form.find('select, input:not([type=radio]):not([type=file]), textarea');
    const hasInvalid = $inputs
        .map(function () { return validateField($(this)) })
        .toArray()
        .some(valid => !valid)

    const $radios = $form.find('input[type=radio][required]');
    let groups = $radios.toArray()
        .reduce((acc, radio) => {
            const name = radio.getAttribute('name');
            if (acc[name]) {
                acc[name].push(radio)
            } else {
                acc[name] = [radio]
            }
            return acc;
        }, {});
    let radiosValidity = Object
        .values(groups)
        .map(g => validateRadios($(g)))
    const hasInvalidRadio = radiosValidity.some(v => !v)

    const $fileInputs = $form.find('input[type=file][required]');
    const hasInvalidFileInput = $fileInputs
        .map(function () { return validateFileInput($(this))} )
        .toArray()
        .some(valid => !valid)
    
    return !hasInvalid && !hasInvalidRadio && !hasInvalidFileInput
}