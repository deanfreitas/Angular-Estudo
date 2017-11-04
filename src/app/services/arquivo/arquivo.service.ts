import {Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ArquivoService {

  private url = 'http://10.22.47.107:8080/gilberto/';
  private precisaExcel: boolean;
  private nomeArquivoExcel: String;

  constructor(private http: Http) {
  }

  public uploadFile(file: File): Promise<Response> {
    const formData = new FormData();
    formData.append('file', file);
    const options = new RequestOptions({method: 'post'});

    return this.http.post(this.url + '/upload/arquivo', formData, options)
      .toPromise()
      .then(res => res.json())
      .catch(this.getErro);
  }

  public downloadFile(nomeArquivo: String): void {
    window.open(this.url + 'download/arquivo/' + nomeArquivo);
  }

  private getErro(error: Response): Promise<Response> {
    console.error(error);
    return Promise.reject(error.status || error);
  }

  // Criar um metodo que dipara um evento para o model(precisaExcel == true)
  public getPrecisaExcel(): boolean {
    return this.precisaExcel;
  }

  public setPrecisaExcel(value: boolean) {
    this.precisaExcel = value;
  }

  public getNomeArquivoExcel(): String {
    return this.nomeArquivoExcel;
  }

  public setNomeArquivoExcel(value: String) {
    this.nomeArquivoExcel = value;
  }
}
