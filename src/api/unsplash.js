import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID 7d4f3d53de058b4e25f928d3a3256cb6ea2e82031e07c538e62e80d4b0e945af'
    }
})