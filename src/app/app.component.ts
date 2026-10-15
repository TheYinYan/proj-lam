import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LamparaComponent } from './components/lampara/lampara.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LamparaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ' Control de una lámpara';

  enchufado = false;
  estadoLampara:'APAGADA' | 'ENCENDIDA' = 'APAGADA';

  onClickDesenchufa(){
    this.enchufado = false;
  }

  onClickEnchufar(){
    this.enchufado = true;
  }

  onCambiosEstadoLampara(estado:'APAGADA' | 'ENCENDIDA'){
    this.estadoLampara = estado
  }
}
