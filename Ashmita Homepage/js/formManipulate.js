const inputSelect = document.querySelector(".form__input--select");

const selectLabel = document.querySelector(".select-effect");

const hiddenForm = document.querySelector(".hide--form");

const multiSelectContainer = document.querySelectorAll(
  ".multi__select-container"
);

let focusStyle = "";

function hiddenFormSelect(value = "", selectSelecter, labelSelecter) {
  if (value === "") {
    labelSelecter.classList.add("select-label__hide");
    selectSelecter.style.color = "#999";
    return;
  }
  labelSelecter.classList.remove("select-label__hide");
  selectSelecter.style.color = "#000";
}

function perform(value = "") {
  if (value === "teacher") {
    return hiddenForm.classList.add("show");
  }

  hiddenForm.classList.remove("show");

  // console.log(inputSelect.value);
}

// labelTransform("", selectLabel, inputSelect);

inputSelect.addEventListener("change", function (e) {
  console.log(e.target.value);
  hiddenFormSelect(e.target.value, inputSelect, selectLabel);
  perform(e.target.value);
});

hiddenForm.addEventListener("click", function (e) {
  const clickSelect = e.target.closest(".form__input--select");
  if (!clickSelect) return;

  const label = clickSelect.nextElementSibling;

  if (clickSelect.classList.contains("form__input--select")) {
    return;
  }
  console.log(clickSelect, label, e.target.value);

  hiddenFormSelect(e.target.value, clickSelect, label);
});

let selectValue;

let formLabel;

// selectV();
// multiSelectContainer

function moveLabel(label) {
  label.classList.add("move-label");
}

// let newLabel;

multiSelectContainer.forEach((el) =>
  el.addEventListener("click", function (e) {
    const mainElement = e.target.closest(".select2-container");
    if (!mainElement) {
      console.log(mainElement);
      return;
    }

    let previousElement = mainElement.previousElementSibling;
    // siblingText = siblings.map((e) => e.innerHTML);
    const selectInput = mainElement.querySelector("input");
    const label = mainElement.nextElementSibling;
    selectValue = previousElement.value;
    console.log(previousElement.value, mainElement, e.target);
    // if (mainElement.classList.contains("select-label__hide")) {
    //   console.log("hey");
    //   mainElement.classList.remove("select-label__hide");
    // }

    // newLabel = label;

    // if (!previousElement.value) {
    //   return label.classList.remove("move-label");
    // }

    moveLabel(label);
  })
);

function addContentHandler() {
  const addContent = `
  <div class="form__group">
    <select
      class="mul-select form__input form__input--select"
      multiple="true"
      id="select-1"
      required
    >
      <option value="Cambodia">Cambodia</option>
      <option value="Khmer">Khmer</option>
      <option value="Thiland">Thiland</option>
      <option value="Koren">Koren</option>
      <option value="China">China</option>
      <option value="English">English</option>
      <option value="USA">USA</option>
    </select>
    <label for="select-1" class="form__label">Delete*</label>
  </div>

  <div class="form__group">
    <select
      class="mul-select form__input form__input--select"
      multiple="true"
      id="select-2"
    >
      <option value="Cambodia">Cambodia</option>
      <option value="Khmer">Khmer</option>
      <option value="Thiland">Thiland</option>
      <option value="Koren">Koren</option>
      <option value="China">China</option>
      <option value="English">English</option>
      <option value="USA">USA</option>
    </select>
    <label for="select-2" class="form__label">Second Role*</label>
    </div>
    
`;
  multiSelectContainer.forEach((el) =>
    el.insertAdjacentHTML("beforeend", addContent)
  );
}

const addBtn = document.querySelector(".add__div");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addContentHandler();
  $(document).ready(function () {
    $(".mul-select").select2({
      placeholder: "", //placeholder
      tags: true,
      tokenSeparators: ["/", ",", ";", " "],
    });
  });
});

const adv = `${le.forEach(e=>{
  
})}`

// const deleteBtn = document.querySelector(".delete__div");

// if (!deleteBtn) {
//   console.log("no delete element");
// } else {
//   deleteBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const catchParent = e.target.closest(".form__group");
//     console.log("catchParent");
//   });
// }

// document.body.addEventListener("click", function (e) {
//   console.log("am here");
//   if (e.target.className == "delete__div") {
//     //
//     e.preventDefault();
//     const catchParent = e.target.closest(".multi__select-container");
//     console.log(catchParent);
//     catchParent.remove();
//   }
// });
