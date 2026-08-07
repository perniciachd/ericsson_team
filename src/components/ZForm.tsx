import { useState } from "react";
import Home from "./Home";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

function ZForm() {
    const [isUserAuth, setIsUserAuth] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const changeAuth = () => {
        setIsUserAuth(false);
    };

    const onSubmit = (data: LoginForm) => {
        const usernameFromLocalStorage = localStorage.getItem("username");
        const passwordFromLocalStorage = localStorage.getItem("password");

        if (
            data.username === usernameFromLocalStorage &&
            data.password === passwordFromLocalStorage
        ) {
            setIsUserAuth(true);
        } else {
            alert("Invalid Credentials");
        }
    };

    if (!isUserAuth) {
        return (
            <>
                <h2>Login</h2>

                {/* <SearchBox /> */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            placeholder="Username"
                            {...register("username")}
                        />
                        <p>{errors.username?.message}</p>
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <p>{errors.password?.message}</p>
                    </div>

                    <button type="submit">
                        Login
                    </button>
                </form>
            </>
        );
    }

    return <Home parentCall={changeAuth} />;
}

export default ZForm;