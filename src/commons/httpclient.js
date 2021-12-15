import axios from "axios";

export default axios.create({
    baseURL: 'https://ics2608-fullstack-fundal.herokuapp.com/api/v1/',
    headers:{
        'Content-Type':'application/json'
    }

})