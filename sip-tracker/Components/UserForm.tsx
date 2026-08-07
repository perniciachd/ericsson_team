import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

function UserForm() {
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

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username</label>

        <input
          id="username"
          placeholder="Username"
          {...register("username")}
        />

        {errors.username && (
          <p className="text-red-500 text-sm">
            {errors.username.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default UserForm;