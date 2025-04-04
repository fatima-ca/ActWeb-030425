import { studentService } from "../db/student";

class StudentController{
    

    async AllStudents(){
        const students = await studentService.getAllStudents();
      return students;
    }
      
    async AllStudentsFilter() {
        const datastudentfilter: {Nombre: string; Alerta: string}[] = [];
        const students = await studentService.getAllStudents();
    
        for (const student of students) {
            let alerta="";
    
            if (student[2]>90 && student[3]===true) {
                alerta="Te graduaste con honores";
            } else if (student[2]>90 && student[3]===false) {
                alerta="Tenías honores, pero tienes adeudo";
            } else if (student[2]>=70 && student[2]<=90) {
                alerta="Pasaste muy apenas";
            } else if (student[2]<70 && student[3]===false) {
                alerta="Expulsado";
            } else if (student[2]<=70 && student[3]===true) {
                alerta="Como no tienes adeudo tienes derecho a un examen de recuperación";
            }

            datastudentfilter.push({Nombre: student[1], Alerta: alerta }); 
        }
    
        return datastudentfilter;
    }

    

}

export default StudentController;