import { dataService } from "../db/data";

class DataController {
    
    
    async getInfoSolicitada() {
        const data = await dataService.getData();
        
        const minNum = Math.min(...data); //Minimo

        const maxNum = Math.max(...data); //Maximo

        const sortedData = [...data].sort((a, b) => a - b); //Mediana
        const middle = Math.floor(sortedData.length / 2);
        let mid;
        if (sortedData.length % 2 === 0) {
            mid = (sortedData[middle - 1] + sortedData[middle]) / 2;
        } else {
            mid = sortedData[middle];
        }

        const q1 = Math.floor(sortedData.length * 0.25); //Primer cuartil
        const q1Resp=sortedData[q1-1];
    
        return { min: minNum, max: maxNum, mediana: mid, primercuartil:q1Resp };
    }




    async getData(){
        const data = await dataService.getData();
        return data;
    }

    async getMax() {
        const data = await dataService.getData();
        const maxNum = Math.max(...data);
        return maxNum;
    }

    async getMin() {
        const data = await dataService.getData();
        const minNum = Math.min(...data);
        return minNum;
    }

    async getMediana() {
        const data = await dataService.getData();
        const sortedData = [...data].sort((a, b) => a - b);
        const middle = Math.floor(sortedData.length/2);
        if (sortedData.length % 2 === 0) {
            return (sortedData[middle - 1] + sortedData[middle]) / 2;
        } else{
        }return sortedData[middle];
    }

    async PrimerCuartil() {
        const data = await dataService.getData();
        const sortedData = [...data].sort((a, b) => a - b);
        const q1 = Math.floor(sortedData.length * 0.25);
        const q1Resp=sortedData[q1-1];
        return q1Resp;
    }

    async TercerCuartil() {
        const data = await dataService.getData();
        const sortedData = [...data].sort((a, b) => a - b);
        const q3 = Math.floor(sortedData.length * 0.75);
        const q3Resp=sortedData[q3-1];
        return q3Resp;
    }

    
}

export default DataController;