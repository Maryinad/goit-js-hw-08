import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const userInfo = {};

function fillContactFormField() {
  try {
    const userInfoForm = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (userInfoForm === null) {
      return;
    }
    console.log(formEl.elements);
    console.log(userInfoForm);

    for (const el in userInfoForm) {
      console.log(el);

      formEl.elements[el].value = userInfoForm[el];
    }
  } catch (err) {
    console.log(err);
  }
}

fillContactFormField();

function onFormElInput(event) {
  //   console.log(event.target);
  const fieldValue = event.target.value;
  const fieldName = event.target.name;
  //   console.log(fieldName);
  //   console.log(fieldValue);

  userInfo[fieldName] = fieldValue;
  //   console.log(userInfo);

  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
}

const onContactFormSubmit = event => {
  event.preventDefault();
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userInfo);
};

formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onContactFormSubmit);
