import fs from "fs";
import path from "path";
import { Municipio } from "../models/municipio.dto";
import { Estado } from "../models/estado.dto";

export class RequestsService {
  
    static async getEstados(): Promise<Estado[]> {
        const estadosData = await fs.promises.readFile(path.resolve(__dirname, '..', 'assets', 'estados-cidades.json'));
        const estadosJson = JSON.parse(estadosData.toString());
        return estadosJson.estados;
    }
  
    static async getMunicipios(): Promise<Municipio[]> {
        const municipiosData = await fs.promises.readFile(path.resolve(__dirname, '..', 'assets', 'municipios.json'));
        const municipiosJson = JSON.parse(municipiosData.toString());
        return municipiosJson.municipios;
    }
  
}