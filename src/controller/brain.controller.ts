import { Estado } from '../models/estado.dto';
import { Municipio } from '../models/municipio.dto';
import { RequestsService } from './../services/resquests.service';

export class BrainController {
    public static async compare(): Promise<string[]> {
        let citiesOk: string[] = [];
        let citiesToRemove: string[] = [];
        let estados: Estado[] = await RequestsService.getEstados();
        let municipios: Municipio[] = await RequestsService.getMunicipios();

        console.log(estados);
    
        municipios.forEach(municipio => {
            let municipioName: string = municipio.NOME_MUNICIPIO;
            let existsInState = false;
            estados.forEach(estado => {
                let cidades: string[] = estado.cidades;
                cidades.forEach(cidade => {
                    if(cidade === municipioName) {
                        existsInState = true;
                        citiesOk.push(municipioName);
                    }
                });
            });
            if (!existsInState) {
                citiesToRemove.push(municipioName);
            }
        });
    
        return citiesToRemove;
    }

    public static async compareInverse(): Promise<string[]> {
        let citiesMissing: string[] = [];
        let estados: Estado[] = await RequestsService.getEstados();
        let municipios: Municipio[] = await RequestsService.getMunicipios();
    
        let allMunicipios: string[] = municipios.map(municipio => municipio.NOME_MUNICIPIO);
    
        estados.forEach(estado => {
            estado.cidades.forEach(cidade => {
                if (!allMunicipios.includes(cidade)) {
                    citiesMissing.push(cidade);
                }
            });
        });
    
        return citiesMissing;
    }
}