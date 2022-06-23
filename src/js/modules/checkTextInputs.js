const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            if (input.value.match(/[^а-яё 0-9]/ig)) {
                input.value = input.value.replace(/[^а-яё 0-9]/ig, '');
            }
        });
    });
};

export default checkTextInputs;