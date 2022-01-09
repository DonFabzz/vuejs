import axios from 'axios'

const BASE_URL = 'http://localhost/lpapi/public/index.php/api/categories'

const header = {
  headers: {
      'Authorization': `Bearer ` + localStorage.getItem('usertoken')
  }
}

async function getCategories()
{
    return await axios.get(BASE_URL, header);
}

async function getCategorie(id)
{
  return await axios.get(BASE_URL+'/'+id, header);
}
async function postCategorie (data) {
  return await axios.post(BASE_URL, data, header)
}
async function deleteCategorie (id) {
  return await  axios.delete(BASE_URL+'/'+id, header)
}

async function putCategorie (id, data) {
  return await  axios.put(BASE_URL+'/'+ id, data, header)
}


export {getCategories, getCategorie, postCategorie, deleteCategorie, putCategorie}
