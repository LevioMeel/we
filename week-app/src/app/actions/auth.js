import { redirect } from "next/navigation";

export const login = async (formData) => {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(rawFormData);

  let data = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });
  let user = await data.json();
  console.log(data.status);
  console.log(user);

  if (data.status == 200) {
    redirect("/");
  }
};

export const signup = async (formData) => {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(rawFormData);

  // Логика авторизации, например, запрос на сервер
  let data = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });
  let posts = await data.json();
  console.log(posts);

  if (data.status == 200) {
    redirect("/");
  }
};
