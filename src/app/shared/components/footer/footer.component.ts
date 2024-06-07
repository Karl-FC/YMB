import { Component } from '@angular/core';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NewsletterFormComponent,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
