LandingPage = {
    init: function () {
        LandingPage.submitInit();
    },

    submit: function (e) {
        e.preventDefault();

        var $form = e.target
        var $email = $form.querySelector('input[name="email"]')

        if (!$email.value) {
            alert('Insira um email para se cadastrar!');
            return;
        }

        var oldEmailData = localStorage.getItem('emailData')

        var parsedOldEmailData = oldEmailData? JSON.parse(oldEmailData) : [];

        var emailData = [
            ...parsedOldEmailData,
            {
                email: $email.value,
                createdAt: new Date().toISOString()
            }
        ]

        localStorage.setItem('emailData', JSON.stringify(emailData))

        $email.value = ''

        alert('Cadastrado com sucesso!')
    },

    submitInit: function () {
        var $form = document.getElementById('landing-form');
        $form.addEventListener('submit', LandingPage.submit, false);
    }

}

LandingPage.init();