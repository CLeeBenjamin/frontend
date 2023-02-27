let prodEndpoint = "https://todo-production-c34a.up.railway.app/todos"
let devEndpoint = "http://localhost:3001"

let APIURL = process.env.NODE_ENV === "production" ? prodEndpoint : devEndpoint

export default APIURL