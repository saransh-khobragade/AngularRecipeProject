import {RouterModule, Routes} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ChildRoute} from './recipes/recipes.routes';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent,children:ChildRoute},
    { path: 'shopping-list', component: ShoppingListComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
