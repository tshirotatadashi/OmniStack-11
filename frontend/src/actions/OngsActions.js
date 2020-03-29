import api from "../services/api";

export default async function store(payload) {
  return new Promise ((resolve, reject) =>{
    api.post("ongs", payload).then(({ data }) => {
        const { id, name } = data
        localStorage.setItem('ongId', id)
        localStorage.setItem('ongName', name)
        resolve(id)
      }).catch(error => {
        console.error(error)
        reject()
      })
  })
}