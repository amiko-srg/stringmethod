let ism = prompt("Ismingiz nima?");

let harf = prompt("Bironta harf kiriting");

if (ism.toLowerCase().includes(harf.toLowerCase())) {
  alert("Isimning ichida " + harf + " mavjud");
} else {
  alert("Isimning ichida " + harf + " mavjud emas");
}

if (confirm("Ismingizni uzunligini bilmoqchimisiz?")) {
  alert("Ismingiz uzunligi: " + ism.length + " ta harf");
}

if (confirm("Ismingizni katta shrift bilan yozilishini istaysizmi?")) {
  alert("Katta harflarda: " + ism.toUpperCase());
}

if (confirm("Ismingizni kichik shrift bilan yozilishini istaysizmi?")) {
  alert("Kichik harflarda: " + ism.toLowerCase());
}