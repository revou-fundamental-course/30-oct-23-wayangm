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