class StudentService{
    //Simular datos e base de datos
    //false=tiene adeudo, true= no tiene adeudo
    private datastudent: [string, string, number, boolean][] = [
      ['Maria', 'a0001', 95, true],
      ['James', 'a0002', 96, false],
      ['Marcos', 'a0003', 77, true],
      ['Felix', 'a0004', 83, false],
      ['Bob', 'a0005', 10, true],
      ['Mina', 'a0006', 43, false],
      ['Alberto','a0007', 77, true],
      ['Laura','a0008', 83, false],
      ['Miguel','a0009', 10, true],
      ['Ana','a0010', 43, false],
      ['Lucia','a0011', 77, true],
      ['Juan','a0012', 83, false],
      ['Pedro','a0013', 10, true],
      ['Sofia','a0014', 43, false],
      ['Carlos','a0015', 77, true],
      ['Marta','a0016', 83, false]
    ];

    async getAllStudents(): Promise<[string, string, number, boolean][]> {
      return [...this.datastudent];
    }
    
  }
export const studentService= new StudentService;
