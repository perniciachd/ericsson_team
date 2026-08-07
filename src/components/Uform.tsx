import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
});
type LoginForm = z.infer<typeof loginSchema>;
function UserForm(){
    const {register, handleSubmit,formState: { errors } } = useForm<LoginForm>({resolver: zodResolver(loginSchema),
            defaultValues: {
                username: "",
                password:""
            },
        });
    const onSubmit = (data:any)=>{
        console.log(data);
    }
    return(
<>
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
                    placeholder="Password"
                    {...register("password")}
                />
<p>{errors.password?.message}</p>
</div>
<button type="submit">Login</button>
</form>
</>
    )
}
export default UserForm;
