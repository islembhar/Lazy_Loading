import { Injectable } from '@angular/core';
import { Flux } from '../classes/flux';

@Injectable({
  providedIn: 'root'
})
export class FluxService {
  listFlux=[] as Flux[];

  constructor() { 
    //this.listFlux=JSON.parse(localStorage.getItem('flux')|| '');
    this.getFlux();
  }
  getFlux(){
    this.listFlux=JSON.parse(localStorage.getItem('flux')|| '');
  }
  addFlux(flux:Flux )
  {
    this.getFlux();
    this.listFlux.push(flux);
    localStorage.setItem('flux',JSON.stringify(this.listFlux));
  }

  deleteFlux(index:number)
  { 
    this.getFlux();
    this.listFlux.splice(index,1);
    localStorage.setItem('flux',JSON.stringify(this.listFlux));
  }
  updateFlux(flux:Flux, index:number)
  {
    this.getFlux();
    this.listFlux[index]=flux;
    localStorage.setItem('flux',JSON.stringify(this.listFlux));
  }
}
