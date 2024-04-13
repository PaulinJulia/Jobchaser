import { SubmitHandler, useForm, FieldError } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, Auth } from "firebase/auth";
import { auth } from "../firebase-config";
import { SignInFormData } from "../types/types";

function SignInForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log("Form Submitted: ", data);
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in: ", user);
      navigate("/savedjobs");
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <form
          className="flex flex-col rounded-md posi bg-white shadow-md p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col pr-2 pl-2 m-2">
            <label className="font-semibold pr-2 pl-2" htmlFor="email">
              Email:
            </label>
            <input
              className="border p-1"
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <span>{(errors.email as FieldError)?.message}</span>}
          </div>

          <div className="flex flex-col pr-2 pl-2 m-2">
            <label className="font-semibold pr-2 pl-2" htmlFor="password">
              Password:
            </label>
            <input
              className="border p-1"
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && <span>{(errors.password as FieldError)?.message}</span>}
          </div>

          <button
            className="bg-purple-500 hover:bg-purple-700 rounded-md font-semibold p-2 m-4"
            type="submit"
          >
            Log in
          </button>
        </form>
        <Link to="/signup">Don't have an accont? Sign Up</Link>
      </div>
    </>
  );
}

export default SignInForm;
