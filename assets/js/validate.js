export default function validatejs() {
    function handleContactForm(form_selector = '.form') {
        const forms = document.querySelectorAll(form_selector) || null;


        if (forms) {
            forms.forEach(form => {

                let formInstanceData = new FormData();
                let odooData = new FormData();
                const contact_name = form.querySelector('[name="name"]');
                const contact_phone = form.querySelector('[name="number"]');
                const contact_msg = form.querySelector('[name="textarea"]');
                const page_referer = form.querySelector('[name="page_name"]');


                contact_name.addEventListener('input', evt => {
                    resetField(contact_name);
                });
                contact_phone.addEventListener('input', evt => {
                    resetField(contact_phone);
                });

                formInstanceData.append('action', 'contact_form');

                /* odooData.referred = page_referer.href; */
                if (form) {
                    let selector = document.querySelectorAll('[name="number"]');
                    selector.forEach((item) => {
                        let im = new Inputmask("+38 (999)9999999");
                        im.mask(item);
                    })

                }
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    let errorsMarker = [];

                    const nameFieldVal = contact_name.value;
                    const phoneFieldVal = contact_phone.value;
                    const msgFieldVal = contact_msg.value;

                    resetField(contact_name);
                    resetField(contact_phone);

                    if (checkEmptyField(contact_name) === false) {
                        errorsMarker.push('has_error');
                        markedErrorField(contact_name);
                    } else if (checkStringValidation(contact_name) === false) {
                        errorsMarker.push('has_error');
                        markedErrorField(contact_name);
                    } else {
                        resetField(contact_name);
                        formInstanceData.append('contact_name', nameFieldVal);
                        odooData.append('name', nameFieldVal);
                    }

                    if (checkEmptyField(contact_phone) === false) {
                        errorsMarker.push('has_error');
                        markedErrorField(contact_phone);

                    } else {
                        resetField(contact_phone);
                        formInstanceData.append('contact_phone', phoneFieldVal);
                        odooData.append('phone', phoneFieldVal);
                    }

                    if (!errorsMarker.includes('has_error')) {
                        var data = {};
                        data['phone'] = phoneFieldVal;
                        data['name'] = nameFieldVal;
                        data['textarea'] = msgFieldVal;
                        data["page_name"] = location.href;
                        var jsonStr = JSON.stringify(data);
                        var xhr = new XMLHttpRequest();
                        xhr.open('post', 'https://odoo.chmsoft.com.ua/website/action-json/296e3c76-df88-4b89-87cc-5fd9980a05be', !1);
                        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                        xhr.send(jsonStr);

                        sendForm(
                            formInstanceData,
                            '/wp-admin/admin-ajax.php'
                        )
                            .then(response => {
                                if (response.status === 'SUCCESS') {
                                    const modalWrapper = document.querySelector('.wrapper_form');
                                    modalWrapper.hide();

                                    const modal_success = document.querySelector('.modal_form .modal_thanks');
                                    modal_success.show()
                                } else {
                                    console.log(response.error);
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                });



            });
        }
    }

    handleContactForm();

    function checkEmptyField(elem) {
        let elemVal = elem.value;
        let valid = false;
        elemVal = elemVal.trim();
        valid = elemVal.length > 0 ? true : false;
        return valid;
    }


    function checkStringValidation(elem) {
        const regex = /^[a-zA-Zа-яА-Я0-9 -]{2,50}$/gm;
        const elemVal = elem.value;
        let valid = false;
        valid = regex.test(elemVal);
        return valid;
    }

    function checkEmailValidation(elem) {
        const regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;
        const elemVal = elem.value;
        let valid = false;
        valid = regex.test(elemVal);
        return valid;
    }

    function insertErrorNotification(elem, textForError = '') {
        const errorElem = document.createElement('span');
        errorElem.classList.add('error_elem');
        errorElem.innerText = textForError;
        elem.insertAdjacentElement('afterend', errorElem);
    }

    function resetField(elem) {
        elem.classList.remove('error');
    }

    function markedErrorField(elem) {
        elem.classList.add('error');
    }

    async function sendForm(formData, url) {

        let request = await fetch(
            url,
            {
                method: 'POST',
                body: formData
            }
        );

        let response = await request.json();

        return response;
    }
}





