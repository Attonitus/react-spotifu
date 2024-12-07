import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { loginModel, LoginModelType } from "../models/loginModel";

export const LoginPage = () => {

    const {handleSubmit, register, formState: {errors}} = useForm<LoginModelType>({
        resolver: zodResolver(loginModel),
        values: {
            email: '',
            password: ''
        },
        mode: 'onBlur'
    });

    const onSubmit = (data: LoginModelType) => {
        console.log(data);
    }

    return(
        <AuthLayout title="Login">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <input type="email" {...register("email")} className="input" placeholder="Email" />
                { errors.email?.message && <p className="error-message">{errors.email.message}</p> }

                <input type="password" {...register("password")} className="input" placeholder="Password" />
                { errors.password?.message && <p className="error-message">{errors.password.message}</p> }

                <Link className="link" to="/auth/register">
                    Dont have an account yet? Register!
                </Link>
                <button type="submit" className="primary-button">Send!</button>
            </form>
        </AuthLayout>
    )
}