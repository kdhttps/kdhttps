import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
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
  }];

  @ViewChild('basicModal', { static: true }) public basicModal;

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (!this.getCookie('cookieconsent')) {
      this.basicModal.show();
    }
  }

  setGACookies() {
    var s = document.createElement('script');
    s.type = "text/javascript"
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=UA-170100016-1";
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);

    // you can add facebook-pixel and other cookies here

    // set custom cookie
    this.setCookie('cookieconsent', 'allow', 1);
    this.basicModal.hide();
  };

  private setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  denyCookie() {
    this.setCookie('cookieconsent', 'deny', 1);
    this.basicModal.hide();
  }
}
