import { studentService } from "../db/student";

class StudentController{
   
    async getAllStudent(){
        const allTweets = await studentService.getAllStudents();
        const numPares = allTweets.filter((num: number) => num % 2 === 0);
       
      return allTweets;
    }

}

export default StudentController;