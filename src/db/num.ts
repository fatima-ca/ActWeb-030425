class NumService{

    private lados: number[] = [20, 3]; //Para calculo de area de cuadrado
    private radio: number[] = [34]; //Para calculo de area de circulo
    private triangulo: number[] = [34, 17]; //Para calculo de area de triangulo

    async getData1():Promise<number[]>{
        return [...this.lados];
    }

    async getData2():Promise<number[]>{
        return [...this.radio];
    }

    async getData3():Promise<number[]>{
        return [...this.triangulo];
    }
     
}
    
export const numService = new NumService;