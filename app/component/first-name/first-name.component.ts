import { Component } from '@angular/core';
import { Person } from 'src/app/classes/person';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent {
person:Person={firsname:"miriam", lastname:"zier", address:"nachal ayalon 21", phone:12345, men:false}
iswomen()
{
  alert("שלא עשני אישה")
}
}
