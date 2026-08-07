import { useActionState } from "react";

// Initial State
const initialState = {
  success: false,
  message: "",
};

// Action Function
async function action(_previousState: { success: boolean; message: string }, formData: FormData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const password = formData.get("password");

  if (password === "1234") {
    return {
      success: true,
      message: "✅ Login Successful!",
    };
  }

  return {
    success: false,
    message: "❌ Invalid Password",
  };
}

function ActionStateForm() {
  const [state, formAction, isPending] = useActionState(
    action,
    initialState
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Form using useActionState</h2>

      <form action={formAction}>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
        />

        <br />
        <br />

        <button disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      <br />

      <h3>{state.message}</h3>
    </div>
  );
}

export default ActionStateForm;