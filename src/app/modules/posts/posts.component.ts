import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  blogPosts = [
    {
      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Post 2',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more blog post objects as needed
  ];

  blogCategories = ['Category 1', 'Category 2', 'Category 3'];
}
