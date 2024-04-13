import { SubmitHandler, useForm, FieldError } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { SignUpFormData } from "../types/types";

function SignUpForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const formSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log("Form Submitted: ", data);
    createUserWithEmailAndPassword(auth, data.email, data.password).then(() => {
      navigate("/signin");
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <form
          className="flex flex-col rounded-md posi bg-white shadow-md p-4"
          onSubmit={handleSubmit(formSubmit)}
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
            {errors.email && (
              <span>{(errors.email as FieldError)?.message}</span>
            )}
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
            {errors.password && (
              <span>{(errors.password as FieldError)?.message}</span>
            )}
          </div>

          <div className="flex flex-col pr-2 pl-2 m-2">
            <label
              className="font-semibold pr-2 pl-2"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              className="border p-1"
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span>{(errors.confirmPassword as FieldError)?.message}</span>
            )}
          </div>

          <button
            className="bg-purple-500 hover:bg-purple-700 rounded-md font-semibold p-2 m-4"
            type="submit"
          >
            Register
          </button>
        </form>
        <Link to="/signin">Already have an account? Sign In</Link>
      </div>
    </>
  );
}

export default SignUpForm;
