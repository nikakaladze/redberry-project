import { Component, OnInit, inject } from '@angular/core';
import { BlogServiceService } from '../../core/blog-service.service';
import { BlogFilterComponent } from '../blog-filter/blog-filter.component';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { Observable, map } from 'rxjs';
import { BlogData, BlogModel } from '../../core/models/blog-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogFilterComponent, BlogCardComponent, CommonModule],
  providers: [BlogServiceService],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  blogService = inject(BlogServiceService);
  blogs$: Observable<BlogData[]> = this.blogService
    .getBlogs()
    .pipe(map((arr) => arr.data));
}
