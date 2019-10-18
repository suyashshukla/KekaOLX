import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifiedsComponent } from './classifieds/classifieds.component';
import { MyClassifiedsComponent } from './my-classifieds/my-classifieds.component';
import { InboxComponent } from './inbox/inbox.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'classifieds', component: ClassifiedsComponent},
    { path: 'my-classifieds', component: MyClassifiedsComponent},
    { path: 'inbox', component: InboxComponent},
    { path: 'admin', component: AdminComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }