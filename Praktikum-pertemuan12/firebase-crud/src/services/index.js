import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Daftar API - POST
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Daftar API - DELETE
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {       // inisialisasi function yang akan disediakan global API
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;