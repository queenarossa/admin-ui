import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <UserCard 
                name="Rossa" 
                email="queenarossa@gmail.com"
                street="Jl. Brigjen katamso"
                city="Kab. Semarang"
            />
            <UserCard 
                name="Ocik" 
                email="ocik@gmail.com"
                street="Jl. Jalan"
                city="Korea"
            />
            <UserCard 
                name="Pinkydino" 
                email="pinky@gmail.com"
                street="Jl. Isolate"
                city="Amerika"
            />
        </div>
      </div>
    </>
  );
}

export default Exercise;