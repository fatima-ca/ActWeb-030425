import { numService } from "../db/num";

class NumController {
    
    
    async getAreaCuadrado() {
        const data = await numService.getData1();
        const lado1 = data[0];
        const lado2 = data[1];
        const areacaudrado = lado1 * lado2;
        return { lado1: lado1, lado2: lado2, AreaCuadarado:areacaudrado};
    }

    async getAreaCirculo() {
        const data = await numService.getData2();
        const radio = data[0];
        const areacirculo = 3.14 * radio * radio;
        return { Radio: radio, AreaCirculo:areacirculo};
    }

    async getAreaTriangulo() {
        const data = await numService.getData3();
        const base = data[0];
        const altua = data[1];
        const areatriangulo = (base * altua) / 2;

        return { Base: base, Altura: altua, AreaCirculo:areatriangulo};
    }

    


    
}

export default NumController;