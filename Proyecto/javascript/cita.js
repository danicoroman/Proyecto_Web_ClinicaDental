$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor, ponga su nombre'
                    }
                }
            },
             apellidos: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor,ponga sus apellidos'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor,introduzca su correo electrónico'
                    },
                    emailAddress: {
                        message: 'Introduzca una dirección de correo válida'
                    }
                }
            },
            telefono: {
                validators: {
                    notEmpty: {
                        message: 'Por favor,ponga su número'
                    },
                    phone: {
                        country: 'ES',
                        message: 'Ponga un teléfono con un prefijo válido'
                    }
                }
            },
            direccion: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor,introduzca su dirección'
                    }
                }
            },
            servicio: {
                validators: {
                    notEmpty: {
                        message: 'Por favor,seleccione el servicio que busque'
                    }
                }
            },
            postal: {
                validators: {
                    notEmpty: {
                        message: 'Por favor,ponga su código postal'
                    },
                    zipCode: {
                        country: 'ES',
                        message: 'Ponga un código válido'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

