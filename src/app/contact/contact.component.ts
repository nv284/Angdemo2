import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  a="Simplilearn";
  constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
 
  
}
