import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { useForm, FormProvider } from "react-hook-form";
// import {LogIn} from "../api/files.api"


import { Size, SizeBox, CButton, Background } from "../styles/LoginAndRegister/styles";
import { Button1 } from "../components/Button1/Button1";
import { Input } from "../components/Input/Input";
import { IconButton } from "../components/IconButton/IconButton";
import { CheckBox } from "../components/CheckBox/CheckBox";

import iconBack from "../assets/img/icons/filled/back_filled.png";
import iconUser from "../assets/img/icons/filled/user_filled.png";
import iconPassword from "../assets/img/icons/filled/password_filled.png";

//validation for forms
import { Formik } from "formik";
import * as Yup from 'yup';
import { InputFormik } from "../components/Input/InputFormik";


const iconTemplate = "bg-[url(assets/img/backgrounds/login/background_login_right.png)]";

export const Login = () => {
    const methods = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data);
        // LogIn(data)
        navigate('/home')
    };

    return (
        <div className={`${Background.BACKGROUND}`}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center w-full">
                <div className={`flex bg-[#FAFAFF] rounded-xl shadow-[0px_0px_50px_10px_rgba(0,0,0,0.2)] ${SizeBox.BOX_L}`}>
                    <div className="flex flex-col w-full p-5 py-[20px] lg:py-[30px] lg:w-1/2">
                        <section className="w-full flex justify-between px-[12px]">
                            <div>
                                <IconButton id='iconBack' image={iconBack} style='w-[3vh] h-[3vh] max-w-[30px] max-h-[30px]' />
                            </div>
                            <div>
                                <p className={`${Size.LARGE} hover:text-[#0094FF]`}>
                                    <Link to='/Register'>Registrarse</Link>
                                </p>
                            </div>
                        </section>

                        <section className="flex items-center justify-center w-full h-full">
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={Yup.object({
                                    email: Yup.string().email('Invalid email address').required('Required'),
                                    password: Yup.string().required('Required'),
                                })}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {formik => (
                                    <form className="flex flex-col relative items-center justify-center w-full space-y-8 lg:space-y-16" onSubmit={formik.handleSubmit}>
                                        <div className="flex flex-col items-center justify-center">
                                            <h2 className={`${Size.EXTRALARGE}`}>Bienvenido a</h2>
                                            <p className={`hidden md:flex w-5/6 ${Size.LARGE} mt-5 leading-7`}>Inicia sesión y empieza a explorar un mundo de realidades mágicas</p>
                                        </div>

                                        <section className="flex flex-col items-center justify-center w-full xl:px-[1.5vh] space-y-3">
                                            <InputFormik
                                                type='email'
                                                name='email' // Cambiar `id` a `name`
                                                placeholder='Usuario'
                                                img={iconUser}
                                                required={true}
                                            />
                                            <InputFormik
                                                type='password'
                                                name='password' // Cambiar `id` a `name`
                                                placeholder='Contraseña'
                                                img={iconPassword}
                                                required={true}
                                            />
                                            <section className="w-[90%] md:w-[70%] mt-[5px] xl:mt-[10px] flex items-center justify-between">
                                                <CheckBox />
                                                <div className="items-end text-right">
                                                    <p className={`flex flex-col ${Size.MEDIUM} hover:text-[#0094FF] mr-3 text-right`}><a>¿Olvidaste contraseña?</a></p>
                                                </div>
                                            </section>
                                        </section>

                                        <section className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between w-[90%] md:w-[72%] mt-10 xl:mt-20 space-y-reverse space-y-3 md:space-y-0 md:space-x-5">
                                            <Button1 nombre='Crear cuenta' id='crearcuenta' type='link' link='/Register' color={CButton.MATE} />
                                            <Button1 nombre='Iniciar sesión' id='iniciarsesion' type='submit' link='' color={CButton.GRADIENT} />
                                        </section>
                                    </form>
                                )}
                            </Formik>
                        </section>
                    </div>

                    <div className={`hidden lg:flex flex-col lg:w-1/2 ${iconTemplate} bg-cover bg-center rounded-r-xl xl:py-[30px] xl:px-[20px] text-white items-center justify-center`}>
                        <div className="w-full h-full flex flex-col items-center justify-end space-y-3 p-10 my-[5rem] xl:my-[150px]">
                            <p className={`${Size.EXTRALARGE} leading-[30px]`}>Maneja confiadamente tus documentos</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
