const tokenKey = 'token'
const userKey = 'userInfo'
const curNav = 'curNav'
const curSide = 'curSide'
const btnpc = 'bpc'
const permissionMenu = 'menu' // button permission code
const carEndPoint = 'carEnd'

export function getToken() {
  return sessionStorage.getItem(tokenKey);
}

export function setToken(val) {
  sessionStorage.setItem(tokenKey, val);
}

export function removeToken() {
  sessionStorage.removeItem(tokenKey);
}

export function getUserInfo() {
  return sessionStorage.getItem(userKey);
}

export function setUserInfo(val) {
  sessionStorage.setItem(userKey, val);
}

export function removeUserInfo() {
  sessionStorage.removeItem(userKey);
}

export function getCurNav() {
  return localStorage.getItem(curNav)
}

export function setCurNav(val) {
  return localStorage.setItem(curNav, val)
}

export function removeCurNav() {
  return localStorage.removeItem(curNav)
}

export function getMenu() {
  return JSON.parse(sessionStorage.getItem(permissionMenu));
}

export function setMenu(listStr) {
  return sessionStorage.setItem(permissionMenu, listStr);
}

export function removeMenu() {
  return sessionStorage.removeItem(permissionMenu);
}

export function removeCarEndPoint() {
  sessionStorage.removeItem(carEndPoint)
}

export function getCarEndPoint() {
  return sessionStorage.getItem(carEndPoint)
}

export function setCarEndPoint(val) {
  return sessionStorage.setItem(carEndPoint, val)
}

export function getBtn() {
  return sessionStorage.getItem(btnpc);
}

export function setBtn(val) {
  return sessionStorage.setItem(btnpc, val);
}

export function removeBtn() {
  return sessionStorage.removeItem(btnpc);
}
export function allclear() {
  localStorage.clear();
  sessionStorage.clear();
}

