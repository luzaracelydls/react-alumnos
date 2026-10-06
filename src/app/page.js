//import Image from "next/image";
"use client";
import {  useState } from "react";
import Alumno from "./alumno";

export default function Home() {
  const [mensaje, setMensaje] = useState('');
  
  let alumnos = [
    {
      nombre: "Carlos Hector", 
      apellido: "Leal Delgado",
      carrera: "LCC",
      activo : true
    },
    {
      nombre: "Alexis Felipe",
      apellido: "Elorza Obregon",
      carrera: "LCC",
      activo : false
    },
    {
      nombre: "Axel Gabriel",
      apellido: "Gutierrez Ruano",
      carrera: "LCC"
    },
    {
      nombre: "Eder Abraham",
      apellido: "Sampayo Gonzalez",
      carrera: "LCC"
    },
    {
      nombre: "Edgar Aurelio",
      apellido: "Santiago Santiago",
      carrera: "LCC"
    },
    {
      nombre: "Carlos Hector", 
      apellido: "De Leon Saucedo",
      carrera: "LCC"
    },
    {
      nombre: "Mayela Mayte",
      apellido: "Lopez Cerino",
      carrera: "LCC"
    },
    {
      nombre: "Rodrigo",
      apellido: "Lopez Escobedo",
      carrera: "LMAD"
    },
    {
      nombre: "Emiliano",
      apellido: "Chacon Alvarez",
      carrera: "LCC"
    }
  ];
  
  return (
    <div>
    <h1>Alumnos</h1>
    
    <section>
    <h2>Agrega alumno:</h2>
    <label htmlFor="nombre">Nombre de alumno:</label>
    <input id="nombre"/>
    <label htmlFor="apellido">Apellido de alumno:</label>
    <input id="apellido"/>
    <label htmlFor="carrera">Carrera de alumno:</label>
    <input id="carrera"/>
    <label htmlFor="estatus">estatus de alumno:</label>
    <input id="estatus"/>
    </section>
    <table id="alumnosPresentes">
    <thead>
    <tr>
    <th>
    Nombre
    </th>
    <th>Apellido</th>
    <th>Carrera</th>
    </tr>
    </thead>
    
    <tbody>
    {
      alumnos.map((a) => (
        <Alumno alumno={a}></Alumno>
      ))
    }
    </tbody>
    </table>

    <table id="alumnosAusentes">
      <thead>
    <tr>
    <th>
    Nombre
    </th>
    <th>Apellido</th>
    <th>Carrera</th>
    </tr>
    </thead>
    <tbody>
      {
        // aqui debe suceder algo magico 🪄
      }
    </tbody>
    </table>
    </div>
  );
}
