import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"pricing",component:PricingComponent},
  {path:"faq",component:FaqComponent},
  {path:"blog/post",component:BlogPostComponent},
  {path:"blog/home",component:BlogHomeComponent},
 {path:"portfolio/overview",component:PortfolioOverviewComponent},
 {path:"portfolio/item",component:PortfolioItemComponent},
 {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
