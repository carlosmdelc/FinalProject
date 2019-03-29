import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    
    // For CustomerComponent
    { path: 'customer', component: CustomerComponent },
    // When path doesn't have value, load CustomerComponent (Home Page)
    { path: '', component: HomeComponent },
    // For AddCustomerComponent
    { path: 'addcustomer', component: AddCustomerComponent },
    // For EditCustomerComponent
    { path: 'editcustomer/:id', component: EditCustomerComponent },
    // For HomeComponent
    { path: 'home', component: HomeComponent },
    // For ContactComponent
    { path: 'contact', component: ContactComponent },
    { path: 'contact/:id', component: ContactComponent },
    // When error for calling no existing component (Error Page)
    { path: '**', component: ErrorpageComponent }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);