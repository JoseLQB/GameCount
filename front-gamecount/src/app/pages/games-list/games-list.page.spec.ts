import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { GamesListPage } from './games-list.page';

describe('GamesListPage', () => {
  let component: GamesListPage;
  let fixture: ComponentFixture<GamesListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesListPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
