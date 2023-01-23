import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenevitPage } from './benevit.page';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('BenevitPage', () => {
  let component: BenevitPage;
  let fixture: ComponentFixture<BenevitPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BenevitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenevitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize imageUrls array', () => {
    expect(component.imageUrls).toEqual(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  });

  it('should make a GET request with the correct URL', () => {
    const spy = spyOn(TestBed.inject(HttpClient), 'get').and.returnValue(of({}));
    component.getImage('', 0);
    expect(spy).toHaveBeenCalledWith('https://api.waifu.pics/sfw/waifu', { responseType: 'text' });
  });

  it('should load more images if hasMoreImages is true', () => {
    component.hasMoreImages = true;
    component.loadMoreImages({target: { complete: () => {} }});
    expect(component.imageUrls.length).toBeGreaterThan(0);
  });

  it('should not load more images if hasMoreImages is false', () => {
    component.hasMoreImages = false;
    component.loadMoreImages({target: { complete: () => {} }});
    expect(component.imageUrls.length).toEqual(0);
  });

});
