

export default function Alumno({alumno}){
    return(
         <tr>
          <td key={alumno.nombre}>
             <div className="flexbox flex-row">
              <img src="student.jpg" width="50" height="50" className="estudianteAvatar"/>
              <span>{alumno.nombre}</span>
            </div>
          </td>
          <td>{alumno.apellido}</td>
          <td>{alumno.carrera}</td>
        </tr>
      
    )
}