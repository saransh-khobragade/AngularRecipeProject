import { browser, element, by } from 'protractor';

export class DemoProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dp-root h1')).getText();
  }
}
