/* eslint-disable no-undef */
export default function IPLocationSearch(ip, callback) {
  const key = 'c185cada1028bbd48c3aa6be1aa5ec70';
  const query = `http://restapi.amap.com/v3/ip?key=${key}&ip=${ip}`;

  fetch(query)
    .then(response => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
