import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  onClickItem(name: string) {
    this.router.navigate([name], { relativeTo: this.route });
  }
}
