import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  {

powers= ['really smart','super flexible'];
model = new Hero(1,'ankit',this.powers[0],'overthinking');
submitted : boolean = false;

onSubmit(){
  this.submitted= true;
}

get diagnostic(){
  return JSON.stringify(this.model);
}


}
