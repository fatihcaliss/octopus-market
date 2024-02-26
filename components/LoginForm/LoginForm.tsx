"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    e?.preventDefault();
    try {
      const result = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });
      if (result?.status === 401) {
        return toast.error(
          "This user not authorized.Check your username and password please."
        );
      }
      router.replace("products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-[745px] md:p-12">
          <Image
            src="/images/octopusNavLogo.svg"
            alt="Octopus Market Logo"
            width={170}
            height={36}
          />
          <Image
            src="/images/loginPageBanner.PNG"
            alt="Octopus Market Login Banner"
            width={411}
            height={411}
            className="m-auto"
          />
          <h1 className="text-3xl font-semibold mb-6 text-black">
            Let Free Your Creativity with Our Intuitive Content Creator
          </h1>
          <p>
            No design degree is required! Effortlessly craft and design stunning
            and captivating content using our user-friendly creative editor.
            With our drag-and-drop technology, anyone can create amazing
            marketing materials in.
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Welcome Octopus
          </h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-400 text-center">
            Manage your smart signage, watch your company grow.{" "}
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="kminchelle"
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-gray-800"
                {...register("username", { required: true })}
              />
              {errors?.username && errors?.username.type === "required" && (
                <p className="text-red-500 text-xs italic">
                  Username required.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="0lelplR"
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-gray-800"
                {...register("password", { required: true })}
              />
              {errors?.password && errors?.password.type === "required" && (
                <p className="text-red-500 text-xs italic">
                  Password is required.
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="Remember" id="check" />
              <label htmlFor="check" className=" text-gray-600 text-sm">
                Remember Me
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#00B500] text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-[#00B500] focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
