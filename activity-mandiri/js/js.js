function validateForm() {
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();

    // Regular expression sesuai hint
    let emailRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/;

    // Validasi nama
    if (nama === "") {
        alert("Nama tidak boleh kosong");
        return false;
    }

    // Validasi email
    if (!emailRegex.test(email)) {
        alert("Format email tidak valid. Contoh: user@mail.com");
        return false;
    }

    alert("Form berhasil divalidasi!");
    return true;
}
