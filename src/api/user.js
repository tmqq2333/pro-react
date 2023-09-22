import request from "@/config/service";
export function getPassword(data) {
  return request({
    method: "GET",
    url: "/data",
    data,
  });
}
export function postPassword(data) {
  return request({
    method: "POST",
    url: "/highSpeedCable/login",
    data,
  });
}
export function getStops(data) {
  return request({
    method: "GET",
    url: "/highSpeedCable/actualProduction/stops",
    data,
  });
}