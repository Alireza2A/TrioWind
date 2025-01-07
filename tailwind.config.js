module.exports = {
  // ...
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your email has been submitted.");
});
