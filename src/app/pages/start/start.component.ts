import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterModule,RouterOutlet,CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  constructor(    private router: Router) {  }
}
