import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home';
  socialNetwork = [{
    title: 'twitter',
    href: 'https://twitter.com/kdhttps',
    icon: 'twitter',
  }, {
    title: 'github',
    href: 'https://github.com/kdhttps',
    icon: 'github',
  }, {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/kiran-mali-898a58124/',
    icon: 'linkedin',
  }]
}
