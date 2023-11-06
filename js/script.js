// Fungsi $ adalah shorthand untuk document.querySelector()
const $ = (item) => {
    return document.querySelector(item);
  };
  
  // Fungsi $_ adalah shorthand untuk document.querySelectorAll()
  const $_ = (item) => {
    return document.querySelectorAll(item);
  };
  
  // Fungsi $fill digunakan untuk mengisi teks ke dalam elemen HTML
  const $fill = (item, text) => {
    item.innerHTML = text;
  };

  // Mendefinisikan nilai minimum untuk validasi form input
  const validAge = 18;
  const validWeight = 30;
  const validHeight = 100;
  
  // Memilih semua elemen setiap kelas dari DOM dan menyimpannya ke dalam variabel
  const numberInputs = $_(".number");
  const errorMessages = $_(".error-message");
  
  // Melakukan iterasi setiap elemen input dalam "numberInputs"
  numberInputs.forEach((input, i) => {
    // Menambahkan event listener "input" pada setiap elemen input
    input.addEventListener("input", () => {
      // Validasi nilai input apakah memnuhi nilai minimum yang sudah ditentukan
      if (!input.value) {
        errorMessages[i].textContent = "Harap isi Berat Badan.";
      } else if (i === 0 && input.value < validWeight) {
        errorMessages[i].textContent =
          "Tidak memenuhi nilai minimum yaitu " + validWeight + " kg";
      } else if (i === 1 && input.value < validAge) {
        errorMessages[i].textContent =
          "Tidak memenuhi nilai minimum yaitu " + validAge + " tahun";
      } else if (i === 2 && input.value < validHeight) {
        errorMessages[i].textContent =
          "Tidak memenuhi nilai minimum yaitu " + validHeight + " cm";
      } else {
        errorMessages[i].textContent = ""; // Clear error message if input is valid
      }
    });
  });
