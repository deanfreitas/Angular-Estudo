import {ArquivoService} from '../../../../services/arquivo/arquivo.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'arquivoExcel',
  templateUrl: './arquivoExcel.component.html',
  styleUrls: ['./arquivoExcel.component.css']
})
export class ArquivoExcelComponent implements OnInit {
  nameFile: String;

  constructor(private arquivoService: ArquivoService) {
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];

    this.nameFile = file.name;
    this.arquivoService.uploadFile(file).then(
      (dados) => this.respostaUpload(dados)
    );
  }

  public downloadFile(): void {
    this.arquivoService.downloadFile(this.arquivoService.getNomeArquivoExcel());
  }

  private respostaUpload(dados: any) {
    console.log(dados);
    alert(dados.mensagem)
  }

  ngOnInit() {
    this.arquivoService.setPrecisaExcel(true);
  }
}
