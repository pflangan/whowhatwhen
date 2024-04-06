import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    { 
        path: '',
        loadComponent: () => 
            import('@angular-monorepo/calendar').then((m) => m.CalendarComponent),
        //component: NxWelcomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'schedule',
        loadComponent: () => 
            import('@angular-monorepo/calendar').then((m) => m.CalendarComponent),
    }
];
