document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn");
  button.innerText = "0";
  button.addEventListener("click", (e) => {
    const count = Number(e.currentTarget.innerText) + 1;
    e.currentTarget.innerText = count;
  });
});
