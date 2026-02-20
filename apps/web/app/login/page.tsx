"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
  if (
    email === "contato@welon.com.br" &&
    password === "welonoficial"
  ) {
    localStorage.setItem("welon_auth", "true");
    router.push("/");
  } else {
    setError("Email ou senha inválidos");
  }
};

useEffect(() => {
  const auth = localStorage.getItem("welon_auth");
  if (auth) {
    router.replace("/");
  }
}, [router]);

  return (
    <div className="min-h-screen bg-[#10142d] flex flex-col items-center justify-center px-6">

      {/* Logo */}
      <div className="mb-10">
        <Image
          src="/assets/logo.png"
          alt="Welon"
          width={160}
          height={60}
          priority
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl space-y-6">

        <h1 className="text-xl font-semibold text-center">
          Entrar na sua conta
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-[#2d70fb]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Senha */}
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-[#2d70fb]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Erro */}
        {error && (
          <p className="text-red-400 text-sm text-center">
            {error}
          </p>
        )}

        {/* Botão */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl bg-[#2d70fb] font-semibold hover:scale-[1.02] transition-all duration-300"
        >
          Entrar
        </button>

        {/* Links */}
        <div className="flex justify-between text-sm text-slate-400">
          <button className="hover:text-white transition-colors">
            Esqueci minha senha
          </button>

          <button
            className="hover:text-white transition-colors"
          >
            Cadastrar
          </button>
        </div>

      </div>
    </div>
  );
}
