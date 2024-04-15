import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userEmail: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve user email from router state
    const state = history.state;
    this.userEmail = state.email || '';

    // this.route.paramMap.subscribe(params => {
    //   // Retrieve the email parameter from the route
    //   this.userEmail = params.get('email') || '';
    // });

   

    
  }

}
