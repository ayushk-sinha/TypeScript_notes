import axios, { type AxiosResponse } from "axios";


interface data {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

axios.get("https://jsonplaceholder.typicode.com/todos/1")

const userInfo = async () => {
    try{
        const response: AxiosResponse<data> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );console.log("data", response.data);
        

    }catch (error : any){
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
        }if(error.response){
            console.log(error.response);
        }
    }
}

userInfo()