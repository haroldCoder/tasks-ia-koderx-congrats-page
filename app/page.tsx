"use client"
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const email = useSearchParams().get("email");
  
  const changeUserToPremium = async() => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}${email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        },
    })
  }

  useEffect(() => {
    changeUserToPremium()
  }, [])

  return (
    <div className="flex flex-col h-[100vh] justify-center items-center px-10">
      <div className="text-center space-y-8">
        <div className="animate-bounce">
          <span className="text-5xl md:text-6xl">🎉</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-300 to-sky-500 bg-clip-text text-transparent">
          ¡Felicidades!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl">
          Te has suscrito exitosamente a <span className="font-semibold">Tasks IA koderx</span>
        </p>
        
        <div className="mt-8">
          <p className="text-lg text-gray-600">
            Ahora tienes acceso a todas las funciones premium de nuestra aplicación
          </p>
        </div>
      </div>
    </div>
  );
}
