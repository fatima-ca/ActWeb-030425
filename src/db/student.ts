class StudentService{
    //Simular datos e base de datos
    //false=tiene adeudo, true= no tiene adeudo
    
    private datastudent: { Nombre: string; Matricula: string; Calif: number; NoTieneAdeudo: boolean }[] = [
      { Nombre: 'Maria', Matricula: 'a0001', Calif: 95, NoTieneAdeudo: true },
      { Nombre: 'James', Matricula: 'a0002', Calif: 96, NoTieneAdeudo: false },
      { Nombre: 'Marcos', Matricula: 'a0003', Calif: 77, NoTieneAdeudo: true },
      { Nombre: 'Felix', Matricula: 'a0004', Calif: 83, NoTieneAdeudo: false },
      { Nombre: 'Bob', Matricula: 'a0005', Calif: 10, NoTieneAdeudo: true },
      { Nombre: 'Mina', Matricula: 'a0006', Calif: 43, NoTieneAdeudo: false },
      { Nombre: 'Alberto', Matricula: 'a0007', Calif: 77, NoTieneAdeudo: true },
      { Nombre: 'Laura', Matricula: 'a0008', Calif: 83, NoTieneAdeudo: false },
      { Nombre: 'Miguel', Matricula: 'a0009', Calif: 10, NoTieneAdeudo: true },
      { Nombre: 'Ana', Matricula: 'a0010', Calif: 43, NoTieneAdeudo: false },
      { Nombre: 'Lucia', Matricula: 'a0011', Calif: 77, NoTieneAdeudo: true },
      { Nombre: 'Juan', Matricula: 'a0012', Calif: 83, NoTieneAdeudo: false },
      { Nombre: 'Pedro', Matricula: 'a0013', Calif: 10, NoTieneAdeudo: true },
      { Nombre: 'Sofia', Matricula: 'a0014', Calif: 43, NoTieneAdeudo: false },
      { Nombre: 'Carlos', Matricula: 'a0015', Calif: 77, NoTieneAdeudo: true },
      { Nombre: 'Marta', Matricula: 'a0016', Calif: 83, NoTieneAdeudo: false }
    ];

    async getAllStudents(): Promise<[string, string, number, boolean][]> {
      return this.datastudent.map(student => [student.Nombre, student.Matricula, student.Calif, student.NoTieneAdeudo]);
    }
    
  }
export const studentService= new StudentService;
