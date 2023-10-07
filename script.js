function handleGetFormData() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;
  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber(string) {
  if (isNaN(string)) {
    return false;
  }
  return true;
}

let status1 = document.getElementById("status");

function checkboxIsChecked() {
  return status1.checked;
}

let formData = handleGetFormData();

function validateFormData(formData) {
  if (formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  const formData = handleGetFormData();
  const isValid = validateFormData(formData);
  const warning = document.getElementById("warning");
  if (!isValid) {
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    warning.textContent = "";
  }
  // console.log("berhasil");
}

let btnSubmit = document.getElementById("my-form");
btnSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
