import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesListPage } from './games-list.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { GamesListPageRoutingModule } from './games-list-routing.module';
import { GamesService } from 'src/app/services/games-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GamesListPageRoutingModule
  ],
  declarations: [GamesListPage]
})
export class GamesListPageModule {}
