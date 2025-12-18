// Memanggil pesan selamat datang saat halaman dimuat
window.onload = function() {
    welcomeMessage();
};

function welcomeMessage() {
    const name = prompt("Masukkan nama Anda:");
    const welcomeDOM = document.getElementById("welcome-speech");

    if (name === null || name.trim() === "") {
        welcomeDOM.innerHTML = "Welcome to My Portfolio";
    } else {
        welcomeDOM.innerHTML = "Welcome, " + name + " 👋";
    }
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.length < 3) {
        alert("Nama harus minimal 3 karakter");
        return false;
    }

    // Feedback yang lebih manis
    alert("Terima kasih, " + name + "! Pesan Anda berhasil dikirim.");
    return true;
}