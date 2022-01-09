import axios from 'axios'

const BASE_URL = 'http://localhost/lpapi/public/index.php/api/messages'

const header = {
  headers: {
      'Authorization': `Bearer ` + localStorage.getItem('usertoken')
  }
}

async function getMessages()
{
    return await axios.get(BASE_URL, header);
}

async function getMessage(id)
{
  return await axios.get(BASE_URL+'/'+id, header);
}

async function search(message)
{
  return await axios.get(BASE_URL+'?titre='+message, header);
}

async function postMessage (data) {
  return await axios.post(BASE_URL, data, header)
}

async function deleteMessage (id) {
  return await axios.delete(BASE_URL+'/'+id, header);
}

async function putMessage (id, data) {
  return await  axios.put(BASE_URL+'/'+id, data, header)
}

export {getMessage, getMessages, postMessage, search, deleteMessage, putMessage}
