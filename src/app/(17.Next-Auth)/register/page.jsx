"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Register() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const conformPassRef = useRef("");
  const router = useRouter();
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      if (emailRef.current.length === 0) return alert("email feild is empty");
      if (passwordRef.current.length < 0)
        return alert("password must be 6 or more character long");
      if (passwordRef.current !== conformPassRef.current)
        return alert("password must be same");
      const data = {
        email: emailRef.current,
        password: passwordRef.current,
      };
      const payload = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(
        "http://localhost:3000/api/auth/register",
        payload
      );
      const resJson = await res.json();
      if (resJson.status === 201) {
        alert(`${resJson.message}`);
        router.push("/login");
      } else {
        alert(`${resJson.message}`);
      }

      console.log(resJson);
    } catch (error) {
      alert(`${error}`);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            SignUp to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Or
            <Link
              href="/login"
              className="font-medium p-2 text-blue-600 hover:text-blue-500"
            >
              Already have an account
            </Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(event) =>
                      (emailRef.current = event.target.value)
                    }
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(event) =>
                      (passwordRef.current = event.target.value)
                    }
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="conformpassword"
                    name="conformpassword"
                    type="password"
                    autoComplete="current-conformpassword"
                    required
                    onChange={(event) =>
                      (conformPassRef.current = event.target.value)
                    }
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="conform-password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={(e) => handleRegister(e)}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
