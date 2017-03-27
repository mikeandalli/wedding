import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlacesComponent } from './places/places.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { CoupleComponent } from './couple/couple.component';
import { StoryComponent } from './story/story.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SliderComponent,
    GalleryComponent,
    PlacesComponent,
    LocationComponent,
    FooterComponent,
    CoupleComponent,
    StoryComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
