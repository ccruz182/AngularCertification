import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'quizes',
    loadChildren: () =>
      import('./pages/quizes-page/quizes-page.module').then(
        (m) => m.QuizesPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '/quizes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
