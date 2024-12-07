import { ReactNode } from "react"

interface Props{
    title: string,
    children: ReactNode
}

export const AuthLayout = ({title, children}: Props) => {

    return(
        <div className="container">
            <div className="layout">
                <h1 className="headLine">{title}</h1>
                {children}
            </div>
        </div>
    )
}