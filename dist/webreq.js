import axios, {} from "axios";
axios.get("https://jsonplaceholder.typicode.com/todos/1");
const userInfo = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("data", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);
        }
        if (error.response) {
            console.log(error.response);
        }
    }
};
userInfo();
//# sourceMappingURL=webreq.js.map