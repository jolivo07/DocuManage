import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

import { Size, SizeBox, CButton, Background } from "../styles/LoginAndRegister/styles"
import { Button1 } from "../components/Button1/Button1"
import { Input } from "../components/Input/Input"
import { IconButton } from "../components/IconButton/IconButton"
import { CheckBox } from "../components/CheckBox/CheckBox"

//Images
import logo1 from "../assets/img/logo/logo_1.png"

//Icons
import iconBack from "../assets/img/icons/filled/back_filled.png"
import iconUser from "../assets/img/icons/filled/user_filled.png"
import iconPassword from "../assets/img/icons/filled/password_filled.png"
const iconTemplate = "bg-[url(assets/img/backgrounds/login/background_login_right.png)]"
const logo3 = "bg-[url(./assets/img/logo/logo_3.png)]"

export const Login = () => {
    return(
        <>
            <div className={`${Background.BACKGROUND}`}>
                <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:1}} className="flex justify-center w-full">
                    <div className={`flex bg-[#FAFAFF] rounded-xl shadow-[0px_0px_50px_10px_rgba(0,0,0,0.2)] ${SizeBox.BOX_L}`}>
                        <div className="flex flex-col w-full p-5 py-[20px] lg:py-[30px] lg:w-1/2">
                            <section className="w-full flex justify-between px-[12px]">
                                <div>
                                    <IconButton id='iconBack' image={iconBack} style='w-[3vh] h-[3vh] max-w-[30px] max-h-[30px]'/>
                                </div>
                                <div>
                                    <p className={`${Size.LARGE} hover:text-[#0094FF]`}>
                                        <Link to='/Register'>Registrarse</Link>
                                    </p>
                                </div>
                            </section>

                            <section className="flex items-center justify-center w-full h-full">
                                <form onSubmit={''} className="flex flex-col relative items-center justify-center w-full space-y-8 lg:space-y-16">

                                    <div className="flex flex-col items-center justify-center">
                                        <h2 className={`${Size.EXTRALARGE}`}>Bienvenido a</h2>
                                        <img src={logo1} alt="Logo" className="h-[50px] md:h-[60px] lg:h-[4rem] xl:h-[5.5rem] max-w-full"/>
                                        <p className={`hidden md:flex w-5/6 ${Size.LARGE} mt-5 leading-7`}>Inicia sesión y empieza a explorar un mundo de realidades mágicas</p>
                                    </div>

                                    <section className="flex flex-col items-center justify-center w-full xl:px-[1.5vh] space-y-3">
                                        {Input('text', 'txtUserL', 'Usuario', iconUser)}
                                        {Input('password', 'txtPasswordL', 'Contraseña', iconPassword)}

                                        <section className="w-[90%] md:w-[70%] mt-[5px] xl:mt-[10px] flex items-center justify-between">
                                            <CheckBox/>
                                            <div className="items-end text-right">
                                                <p className={`flex flex-col ${Size.MEDIUM} hover:text-[#0094FF] mr-3 text-right`}><a>¿Olvidaste contraseña?</a></p>
                                            </div>
                                        </section>
                                    </section>

                                    <section className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between w-[90%] md:w-[72%] mt-10 xl:mt-20 space-y-reverse space-y-3 md:space-y-0 md:space-x-5">
                                            <Button1 nombre='Crear cuenta' id='crearcuenta' type='link' link='/Register' color={CButton.MATE}/>
                                            <Button1 nombre='Iniciar sesión' id='iniciarsesion' type='submit' link='' color={CButton.GRADIENT}/>
                                    </section>

                                </form>
                            </section>
                        </div>

                        <div className={`hidden lg:flex flex-col lg:w-1/2 ${iconTemplate} bg-cover bg-center rounded-r-xl xl:py-[30px] xl:px-[20px] text-white items-center justify-center`}>
                            <div className="w-full h-full flex flex-col items-center justify-end space-y-3 p-10 my-[5rem] xl:my-[150px]">
                                <div className={`${logo3} w-full h-[10vw] mb-[10px] max-h-[150px] bg-contain bg-no-repeat bg-center`}></div>
                                <p className={`${Size.EXTRALARGE} leading-[30px]`}>¡Descubre, comparte y conecta con la vibrante comunidad literaria que hemos creado para ti!</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}