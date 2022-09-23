let counter = 0;

document.getElementById("number").innerHTML = counter.toString();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  const contactNumber = document.contactForm.contact.value;
  window.alert(`Is this the right contact: ${contactNumber}?`);
  event.preventDefault();
});

document.getElementById("counter").onclick = () => {
  counter += 1;
  document.getElementById("number").innerHTML = counter.toString();
};
