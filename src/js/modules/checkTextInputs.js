const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach((input) => {
    input.addEventListener("input", function () {
        input.value = input.value.replace(/[^а-яё 0-9]/gi, "");
      });
  });
};

export default checkTextInputs;
