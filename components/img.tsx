const input = document.getElementById("picture-input") as HTMLInputElement;
const preview = document.querySelector(".picture-preview") as HTMLDivElement;

input.addEventListener("change", () => {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      preview.style.backgroundImage = `url(${reader.result})`;
    });

    reader.readAsDataURL(input.files[0]);
  }
});
