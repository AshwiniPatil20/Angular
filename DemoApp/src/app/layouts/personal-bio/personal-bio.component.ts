import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-bio',
  templateUrl: './personal-bio.component.html',
  styleUrls: ['./personal-bio.component.css']
})
export class PersonalBioComponent  {

 
  employeeList=[
    {
      name:"Neeral",
      id:'001',
      designation:"Manager",
      imgpath:'../assets/boy.png',
      developer:1,
      isOnline:true,
      country:"Singapore"
    },
    {
      name:"AshwiniP",
      id:705,
      designation:"Sr. Software Developer",
      imgpath:'../assets/girl.jpg',
      developer:0,
      isOnline:false,
      country:"India"
    }
  ];

  
  

}
