class StudentService{

    private students: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    
    async getAllStudents():Promise<string[]>{
      return [...this.students];
    }
   
  }
  
export const studentService= new StudentService;
