import api from "../services/api";

export function list() {
  const Authorization = localStorage.getItem('ongId')
  const id = localStorage.getItem('ongId')
  return new Promise((resolve, reject) => {
    api.get(`incidents/${id}`, {
      headers: {
        Authorization
      }
    }).then(({ data }) => {
      resolve(data)
    }).catch(error => {
      console.error(error)
      reject()
    })
  })
}