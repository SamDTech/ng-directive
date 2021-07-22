import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1619537905033-fb5406e5a1aa?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Summer',
      url: 'https://images.unsplash.com/photo-1622495966349-2857f74777a0?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Winter life',
      url: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Forest camp',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1619537905033-fb5406e5a1aa?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Summer',
      url: 'https://images.unsplash.com/photo-1622495966349-2857f74777a0?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Winter life',
      url: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Forest camp',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1619537905033-fb5406e5a1aa?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Summer',
      url: 'https://images.unsplash.com/photo-1622495966349-2857f74777a0?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Winter life',
      url: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Forest camp',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1619537905033-fb5406e5a1aa?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Summer',
      url: 'https://images.unsplash.com/photo-1622495966349-2857f74777a0?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Winter life',
      url: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Forest camp',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1619537905033-fb5406e5a1aa?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Summer',
      url: 'https://images.unsplash.com/photo-1622495966349-2857f74777a0?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Winter life',
      url: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      title: 'Forest camp',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  updatePage(i: number) {
    this.currentPage = i;
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
