import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BlogData } from '../../core/models/blog-model';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogCardComponent {
  @Input() card: BlogData;

}
