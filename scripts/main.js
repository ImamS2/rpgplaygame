let namaPlayer;

if (getKey('name') == null) {
  const nama = prompt('Enter Name');
  setKey('name', nama);
  namaPlayer = nama;
} else {
  namaPlayer = getKey('name');
}

const hello = document.getElementById('hello');
const tbUpgrade = document.getElementById('tbUpgrade');
const tbDowngrade = document.getElementById('tbDowngrade');

hello.innerHTML = `Hello, ${namaPlayer}`;
