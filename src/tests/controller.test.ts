/*
import  DataController  from "../controllers/data";
import {dataService}  from "../db/data";

describe("DataController", () => {
    let dataController: DataController;

    beforeEach(() => {
        const mockDBService = {
            getData: jest.fn()
        };
        dataController = new DataController(mockDBService);
    });

    test('should return correct stats for [4, 2, 6, 8]', async () => {
        mockDBService.getData.mockResolvedValue([4, 2, 6, 8]);

 
        const result = await DataController.getInfoSolicitada();

       
        expect(result).toEqual({
            min: 2,
            max: 8,
            mediana: 5,
            primercuartil: 2,
        });
        expect(mockDBService.getData).toHaveBeenCalledTimes(1);
    });

    test('should handle empty array', async () => {
       
        mockDBService.getData.mockResolvedValue([]);

        
        const result = await DataController.getInfoSolicitada();

       
        expect(result).toEqual({
            min: Infinity,
            max: -Infinity,
            mediana: NaN,
            primercuartil: undefined,
        });
    });

    test('should throw error if DB call fails', async () => {
        mockDBService.getData.mockRejectedValue(new Error("Database error"));
        await expect(DataController.getInfoSolicitada()).rejects.toThrow("Database error");
    });
});
*/