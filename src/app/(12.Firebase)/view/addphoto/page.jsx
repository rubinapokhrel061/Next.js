"use client";
import axios from "axios";
import { useState } from "react";
import New from "../_component/New";
import Home from "../_component/home/page";

export default function AddPhoto() {
  const [data, setData] = useState({
    title: "",
    description: "",
    url: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/Api/photos", data).then((res) => {
      console.log(res);
      if (res.data.status === 201) {
        alert(res.data.message);
        setData({
          title: "",
          description: "",
          url: "",
        });
      }
    });
  };
  return (
    <>
      <form
        method="post"
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-sm mx-auto my-12 border border-green-400 p-6 rounded-md"
      >
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={data.title}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="url"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Photo Url
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={data.url}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Photo Description
          </label>
          <textarea
            id="description"
            name="description"
            value={data.description}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add Photo
        </button>
      </form>
      <New />
      <Home />
    </>
  );
}
