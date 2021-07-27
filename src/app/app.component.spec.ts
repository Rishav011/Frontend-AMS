import { TestBed, ComponentFixture, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title`, inject([TranslateService], (translate: TranslateService) => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('LANDING-PAGE.NAME');

    translate.setTranslation('en', {'LANDING-PAGE': { NAME: 'Welcome to'} });
    translate.use('en');
    fixture.detectChanges();

    expect(title.innerHTML).toBe('Welcome to');
  }));

  it(`should have help'`, inject([TranslateService], (translate: TranslateService) => {
    const help = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(help.innerHTML).toBe('LANDING-PAGE.HELP');

    translate.setTranslation('en', {'LANDING-PAGE': { HELP: 'Here is a link to help you start:'} });
    translate.use('en');
    fixture.detectChanges();

    expect(help.innerHTML).toBe('Here is a link to help you start:');
  }));

  it(`should have documentation'`, inject([TranslateService], (translate: TranslateService) => {
    const docu = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(docu.innerText).toBe('LANDING-PAGE.DOCUMENTATION');

    translate.setTranslation('en', {'LANDING-PAGE': { DOCUMENTATION: 'SiOUX documentation'} });
    translate.use('en');
    fixture.detectChanges();

    expect(docu.innerText).toBe('SiOUX documentation');
  }));

  it(`should have as title and tranlsate to german`, inject([TranslateService], (translate: TranslateService) => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('LANDING-PAGE.NAME');

    translate.setTranslation('de', {'LANDING-PAGE': { NAME: 'Willkommen zu'} });
    translate.use('de');
    fixture.detectChanges();

    expect(title.innerHTML).toBe('Willkommen zu');
  }));

  it(`should have help and tranlsate to german'`, inject([TranslateService], (translate: TranslateService) => {
    const help = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(help.innerHTML).toBe('LANDING-PAGE.HELP');

    translate.setTranslation('de', {'LANDING-PAGE': { HELP: 'Hier ist ein Link, der Ihnen beim Start hilft:'} });
    translate.use('de');
    fixture.detectChanges();

    expect(help.innerHTML).toBe('Hier ist ein Link, der Ihnen beim Start hilft:');
  }));

  it(`should have documentation and tranlsate to german'`, inject([TranslateService], (translate: TranslateService) => {
    const docu = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(docu.innerText).toBe('LANDING-PAGE.DOCUMENTATION');

    translate.setTranslation('de', {'LANDING-PAGE': { DOCUMENTATION: 'SiOUX-Dokumentation'} });
    translate.use('de');
    fixture.detectChanges();

    expect(docu.innerText).toBe('SiOUX-Dokumentation');
  }));

});
