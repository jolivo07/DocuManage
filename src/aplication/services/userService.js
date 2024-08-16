import apiClient from "../../infrastructure/api/apiClient";

const userService = {
    login: async (credentials) => {
        const response = await apiClient.post("accounts/api/token/", credentials)

        if(!response.status == 200){
            throw new Error('Error en el login');
        }

        const data = await response.data;
        return data;
    }
}
export default userService;