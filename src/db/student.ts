class StudentService{

    
    private myMap = new Map<string, [number, boolean, string]>([
        ['a00001', [95, true, 'Maria']],
        ['a00002', [97, false, 'James']],
        ['a00003', [77, true, 'Marcos']],
        ['a00004', [83, false, 'Felix']],
        ['a00005', [10, true, 'Bob']],
        ['a00006', [43, false, 'Mina']]
      ])

    async getAllStudents():Promise<Map<string, [number, boolean, string]>>{
      return this.myMap;
    }
   
  }
  
export const studentService= new StudentService;
