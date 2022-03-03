function setKey(key, value) {
  return window.localStorage.setItem(key, value);
}

function getKey(key) {
  return window.localStorage.getItem(key);
}

function setLevel(level) {
  return setKey('level', level);
}
