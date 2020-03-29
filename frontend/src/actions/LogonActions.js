import api from "../services/api";

export default function store(payload) {
  return new Promise ((resolve, reject) =>{
    api.post("sessions", payload).then(({ data }) => {
        const { id, name } = data
        localStorage.setItem('ongId', id)
        localStorage.setItem('ongName', name)
        resolve()
      }).catch(error => {
        console.error(error)
        reject()
      })
  })
}