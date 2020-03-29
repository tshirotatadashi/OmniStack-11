import api from "../services/api";

export function list() {
  const Authorization = localStorage.getItem('ongId')
  const id = Authorization
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

export function deleteIncident(payload) {
  const Authorization = localStorage.getItem('ongId')
  return new Promise((resolve, reject) => {
    api.delete(`incidents/${payload}`, {
      headers: {
        Authorization
      }
    }).then(() => {
      resolve()
    }).catch(error => {
      console.error(error)
      reject()
    })
  })
}