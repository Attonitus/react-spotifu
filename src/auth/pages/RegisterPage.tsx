import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerModel, registerModelType } from "../models/registerModel"

export const RegisterPage = () => {

    const {handleSubmit, register, formState: {errors}} = useForm<registerModelType>({
        resolver: zodResolver(registerModel),
        values: {
            name: '',
            email: '',
            password: ''
        },
        mode: 'onBlur'
    })

    const onSubmit = (data: registerModelType) => {
        console.log(data);
    }

    return(
        <AuthLayout title="Register">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} className="input" placeholder="Artist name" />
                {errors.name?.message && <p className="error-message">{errors.name.message}</p>}

                <input type="email" {...register("email")} className="input" placeholder="Email" />
                {errors.email?.message && <p className="error-message">{errors.email.message}</p>}

                <input type="password" {...register("password")} className="input" placeholder="Password" />
                {errors.password?.message && <p className="error-message">{errors.password.message}</p>}

                <Link className="link" to="/auth/login">
                    Already have an account? Login!
                </Link>
                <button type="submit" className="primary-button">Send!</button>
            </form>
        </AuthLayout>
    )
}