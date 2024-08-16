import userService from "../../aplication/services/userService";

export const userRepository = {
    login: async(credentials) => {
        try {
            const response = await userService.login(credentials)
            return response
        } catch (error) {
            console.error(error);
        }
    }
}