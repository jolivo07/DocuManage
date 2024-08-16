import { userRepository } from "../../domain/repositories/userRepository";

const useLoginUseCase = async(credentials) => {
    try {
        const response = await userRepository.login(credentials)
        // return response
    } catch (error) {
        console.error(error);
    }
}

export { useLoginUseCase }