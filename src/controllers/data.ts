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

    

    /*
   

    async getPrimQuartile(req, res) {
        
    }
    */
    /*
    async PrimerCuartil() {
    const allTweets = await tweetService.getAll();

    if (allTweets.length === 0) {
        throw new Error("El arreglo está vacío");
    }

    // Paso 1: ordenar los números
    const sorted = allTweets.slice().sort((a, b) => a - b);

    // Paso 2: calcular la posición del cuartil 1
    const pos = (sorted.length - 1) * 0.25;
    const lower = Math.floor(pos);
    const upper = Math.ceil(pos);

    // Paso 3: interpolar si no es entero
    const q1 = lower === upper
        ? sorted[lower]
        : sorted[lower] + (sorted[upper] - sorted[lower]) * (pos - lower);

    return q1;
}

    */
    /*
    public async getQuinQuartile(req, res) {
        
    }


    public async getOutliers(req, res) {
        
    }
    */
}

export default DataController;