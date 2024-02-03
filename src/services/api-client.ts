import axios, { CanceledError } from 'axios';


//napravi bolji mock ovo ne valja po meni
//složi radije mock bazu ili nešto

export default axios.create({
    baseURL: 'https://dummyjson.com'
})

export { CanceledError };

