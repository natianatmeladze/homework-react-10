import "./App.css";
import { useForm } from "react-hook-form";
import schema from "./validations/LogInValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const sendData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(sendData)}
        className="w-150 p-8 border-2 border-stone-600 rounded-md mt-40 mx-auto flex flex-col gap-4"
      >
        <input
          {...register("username")}
          type="text"
          placeholder="Enter UserName"
          name="username"
          className="w-full p-3 text-md border-1 border-stone-600 rounded-md outline-none"
        />
        {errors.username && (
          <p className="text-red-500 text-sm font-bold">
            {errors.username.message}
          </p>
        )}
        <input
          {...register("email")}
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full p-3 text-md border-1 border-stone-600 rounded-md outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm font-bold">
            {errors.email.message}
          </p>
        )}
        <div className="relative">
          <input
            {...register("password")}
            type={isVisible ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            className="w-full p-3 text-md border-1 border-stone-600 rounded-md outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm font-bold">
              {errors.password.message}
            </p>
          )}
          <button
            onClick={() => setIsVisible(!isVisible)}
            type="button"
            className="absolute top-3 right-3 cursor-pointer"
          >
            {isVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>

        <button
          disabled={!isValid}
          type="submit"
          className="w-full text-white font-bold p-4 rounded-md mt-5"
          style={{
            backgroundColor: !isValid ? "#b4acac" : "#ff3b9d",
            cursor: !isValid ? "not-allowed" : "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
