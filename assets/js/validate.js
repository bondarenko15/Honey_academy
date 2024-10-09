export default function validatejs() {
    function handleContactForm(form_selector = '.form') {
        const forms = document.querySelectorAll(form_selector) || null;



        if (forms) {
            forms.forEach(form => {

                let formInstanceData = new FormData();
                const contact_name = form.querySelector('[name="name"]') || null;
                const contact_phone = form.querySelector('[name="number"]') || null;
                const contact_msg = form.querySelector('[name="textarea"]') || null;
                const contact_email = form.querySelector('[name="email"]') || null;
                const page_referer = form.querySelector('[name="page_name"]') || null;
                const checkbox = form.querySelector('.custom-checkbox');
                const checkboxLabel = form.querySelector('.checkbox_label-modal');
                const titleCourses = form.querySelector('.form_courses  .subtitle') || null;
                const titleOffers = form.querySelector('.form_excursion .form_title') || null;
                const formCourses = document.querySelector('.form_courses') || null;
                if (formCourses) {
                    const coursesButtons = document.querySelectorAll('.btn_courses') || null;
                    coursesButtons.forEach(button => {
                        button.addEventListener('click', function () {
                            const item = button.closest('.item');
                            const packageName = item.querySelector('input[name="package_name"]').value;
                            document.querySelector('.form_courses .subtitle').textContent = packageName;
                        });
                    });
                }
                

                const formExcursion = document.querySelector('.form_excursion') || null;
                if (formExcursion) {
                    const buttons = document.querySelectorAll('.swiper-slide .btn_card');
                    buttons.forEach(button => {
                        button.addEventListener('click', (event) => {
                            const slide = event.target.closest('.swiper-slide');

                            if (slide) {
                                const offerNameInput = slide.querySelector('input[name="offer_name"]');
                                const formTitle = form.querySelector('.form_excursion .form_title');
                                if (offerNameInput && formTitle) {
                                    formTitle.textContent = offerNameInput.value;
                                }
                            }
                        });
                    });
                }


                if (contact_name) {
                    contact_name.addEventListener('input', evt => {
                        resetField(contact_name);
                    });
                }

                if (contact_phone) {
                    contact_phone.addEventListener('input', evt => {
                        resetField(contact_phone);
                    });
                }
                if (contact_email) {
                    contact_email.addEventListener('input', evt => {
                        resetField(contact_email);
                    });
                }
                if (contact_msg) {
                    contact_msg.addEventListener('input', evt => {
                        resetField(contact_msg);
                    });
                }

                formInstanceData.append('action', 'contact_form');


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
                    let nameFieldVal, phoneFieldVal, msgFieldVal, emailFieldVal, refererFieldVal, packageFieldVal, offerFieldVal 


                    if (contact_name) {
                        nameFieldVal = contact_name.value;
                    }
                    if (contact_phone) {
                        phoneFieldVal = contact_phone.value;
                    }
                    if (contact_msg) {
                        msgFieldVal = contact_msg.value;
                    }
                    if (contact_email) {
                        emailFieldVal = contact_email.value;
                    }
                    if (page_referer) {
                        refererFieldVal = page_referer.value;
                    }
                    if (contact_email) {
                        resetField(contact_email);
                    }
                    if (contact_msg) {
                        resetField(contact_msg);
                    }
                    if (contact_name) {
                        resetField(contact_name);
                    }
                    if (contact_phone) {
                        resetField(contact_phone);
                    }
                    if (contact_name) {
                        if (checkEmptyField(contact_name) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_name);
                        } else if (checkStringValidation(contact_name) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_name);
                        } else {
                            resetField(contact_name);
                            formInstanceData.set('contact_name', nameFieldVal);
                        }
                    }
                    if (contact_phone) {
                        if (checkEmptyField(contact_phone) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_phone);

                        } else if (validatePhoneNumber(contact_phone) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_phone);
                        }
                        else {
                            resetField(contact_phone);
                            formInstanceData.set('contact_phone', phoneFieldVal);
                        }
                    }
                    if (contact_email) {
                        if (checkEmptyField(contact_email) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_email);
                        } else if (checkEmailValidation(contact_email) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_email);

                        } else {
                            resetField(contact_email);
                            formInstanceData.set('contact_email', emailFieldVal);
                        }
                    }
                    if (page_referer) {
                        formInstanceData.set('page_referer', refererFieldVal);
                    }
                    if (contact_msg) {
                        formInstanceData.set('contact_msg', msgFieldVal);
                    }

                    if (titleCourses) {
                        packageFieldVal = titleCourses.textContent;
                        formInstanceData.set('package', packageFieldVal);
                    }

                    if (titleOffers) {
                        packageFieldVal = titleCourses.textContent;
                        formInstanceData.set('offer', offerFieldVal);
                    }
                    /* if (formExcursion) {
                        offerFieldVal = offerVal;
                        formInstanceData.set('offer', offerFieldVal);
                    }

                    if (formCourses) {
                        packageFieldVal = packageVal;
                        formInstanceData.set('packege', packageFieldVal);
                    } */

                    if (!validateCheckbox(checkbox, checkboxLabel)) {
                        errorsMarker.push('has_error');
                    }
                    if (!errorsMarker.includes('has_error')) {
                        var data = {};
                        data['contact_phone'] = phoneFieldVal;
                        data['conatct_name'] = nameFieldVal;
                        data['contact_msg'] = msgFieldVal;
                        data['contact_email'] = emailFieldVal;
                        data['page_referer'] = refererFieldVal;
                        data['offer'] = offerFieldVal;
                        data['package'] = packageFieldVal;


                        let message = `---------------------------\n\rЗаявка прийшла з: ${refererFieldVal ? refererFieldVal : 'Не вказано'} \n\rІм'я користувача:  ${nameFieldVal ? nameFieldVal : 'Не вказано'}  \n\rТелефон користувача:  ${phoneFieldVal ? phoneFieldVal : 'Не вказано'}  \n\rEmail:  ${emailFieldVal ? emailFieldVal : 'Не вказано'}  \n\rПовідомлення користувача: ${msgFieldVal ? msgFieldVal : 'Не вказано'}  \n\rОформлений курс: ${packageFieldVal ? packageFieldVal : 'Не вказано'}  \n\rЗаявка на табір: ${offerFieldVal ? offerFieldVal : 'Не вказано'}  \n\r---------------------------`


                        sendMessageToTelegram(token, chatId, message);

                        sendForm(
                            formInstanceData,
                            '/wp-admin/admin-ajax.php'
                        )
                            .then(response => {
                                if (response.status === 'SUCCESS') {
                                    clearForm(form);
                                    const modalPopUp = document.querySelector('.modal_form') || null;
                                    modalPopUp.classList.add('isShow');
                                    const modalWrapper = document.querySelector('.wrapper_form');
                                    modalWrapper.style.display = 'none';


                                    const modal_success = document.querySelector('.modal_form .modal_thanks');
                                    modal_success.style.display = 'block';
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


    function validateCheckbox(checkbox, label) {
        if (checkbox && label) {
            if (!checkbox.checked) {
                label.classList.add('error_checkbox');
                return false;
            } else {
                label.classList.remove('error_checkbox');
                return true;
            }
        }
        return false;
    }
    function checkEmptyField(elem) {
        let elemVal = elem.value;
        let valid = false;
        elemVal = elemVal.trim();
        valid = elemVal.length > 0 ? true : false;
        return valid;
    }


    function checkStringValidation(elem) {
        const regex = /^[a-zA-Zа-яА-Я-]{2,50}$/gm;
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
    function validatePhoneNumber(elem) {
        const regex = /^(\d{12})$/;
        const elemVal = elem.value;
        const cleanedPhoneNumber = elemVal.replace(/\D/g, '');
        let valid = false;
        valid = regex.test(cleanedPhoneNumber);
        return valid;
    }
    function insertErrorNotification(elem, textForError = '') {
        const errorElem = document.createElement('span');
        errorElem.classList.add('error_elem');
        errorElem.innerText = textForError;
        elem.insertAdjacentElement('afterend', errorElem);
    }


    function clearForm(form) {
        form.reset();
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




const sendMessageToTelegram = async (token, chatId, message) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const params = {
        chat_id: chatId,
        text: message,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Сообщение отправлено:', data);
    } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
    }
};











