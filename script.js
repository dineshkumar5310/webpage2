document.addEventListener("DOMContentLoaded", () => {
  // Greeting
  const now = new Date();
  const hours = now.getHours();
  const greeting = document.getElementById("greeting");
  if (hours < 12) greeting.textContent = "Good Morning! Please book your appointment.";
  else if (hours < 18) greeting.textContent = "Good Afternoon! Choose your doctor and slot.";
  else greeting.textContent = "Good Evening! Secure your appointment before slots run out.";
});

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const specialty = document.getElementById("specialty").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const summary = `
    <strong>Patient:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Phone:</strong> ${phone}<br>
    <strong>Specialty:</strong> ${specialty}<br>
    <strong>Date:</strong> ${date}<br>
    <strong>Time:</strong> ${time}
  `;

  document.getElementById("summaryText").innerHTML = summary;
  document.getElementById("confirmation").classList.remove("hidden");
  document.getElementById("appointmentForm").reset();
});
