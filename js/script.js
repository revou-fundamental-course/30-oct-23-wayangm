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
  // Membuat fungsi untuk memvalidasi nilai dari form input dan radio button
  function validation() {
    // Mendefinisikam kondisi awal objek
    let isRadioChecked = false;
    let isInputEmpty = true;
  
    $_("input").forEach((input) => {
      // Jika jenis kelamin dipilih, maka kondisi diubah menjadi "true"
      if (input.type === "radio" && input.checked) {
        isRadioChecked = true;
      }
      // Jika form kosong, kondisi diubah menjadi "false"
      if (input.value !== "") {
        isInputEmpty = false;
      }
    });
  
    // Jika salah satu kosong maka akan memunculkan peringatan ke user
    if (!isRadioChecked || isInputEmpty) {
      return ($(".warning").textContent = "*Semua kolom wajib diisi");
    }
  
    // Kondisi dimana jika validasi berhasil, peringatan akan dihapus
    return ($(".warning").textContent = "");
  }
  // Membuat fungsi untuk animasi scroll jika submit button ditekan
  function scrollToResult() {
    const resSection = document.getElementById("res");
    resSection.scrollIntoView({ behavior: "smooth" });
  }
  
  // Menambahkan event listener untuk button submit saat ditekan
  // Menjalankan proses kalkulasi perhitungan BMI dan menampilkan hasil
  $("#button-submit").addEventListener("click", async () => {
    (async () => {
      // Menginisialisasi objek dan value yang akan digunakan
      const hei = $("#height").value / 100,
        wei = $("#weight").value,
        age = $("#age").value;
  
      let res = 0;
  
      // Membuat objek untuk menyimpan data hasil perhitungan BMI
      const stat = {
        head: "",
        info: "",
        nums: "",
        unit: "",
        sums: "",
        cats: "",
        type: "",
        avgs: "",
        suggest: "",
      };
