import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { User } from 'src/app/store/models/user.model';

import { UserListComponent } from './user-list.component';

const fakeActivatedRoute = {
    snapshot : { data : { 
        users : [
            {
                "id": 1,
                "email": "alice@prisma.io",
                "first_name": "Steve",
                "last_name": "Monahan",
                "language": "en-US",
                "description": null,
                "title": null,
                "status": "inactive",
                "role": {
                    "name": "admin",
                    "permissions": []
                }
            },
            {
                "id": 2,
                "email": "bob@prisma.io",
                "first_name": "Waylon",
                "last_name": "Mitchell",
                "language": "en-US",
                "description": null,
                "title": null,
                "status": "active",
                "role": {
                    "name": "admin",
                    "permissions": []
                }
            },
            {
                "id": 4,
                "email": "admin@home-stock.io",
                "first_name": "Chasity",
                "last_name": "Hauck",
                "language": "en-US",
                "description": null,
                "title": null,
                "status": "active",
                "role": {
                    "name": "admin",
                    "permissions": []
                }
            }
        ]
    } }
}

export default {
  title: 'Administration/Liste des utilisateurs',
  component: UserListComponent,
  decorators: [
    moduleMetadata({
        declarations : [UserListComponent],
        imports : [CommonModule,RouterModule,SharedModule],
        providers : [{provide: ActivatedRoute, useValue: fakeActivatedRoute}]
    })
  ]
} as Meta;

export const Hydrated : Story<UserListComponent> = () => ({
})
Hydrated.storyName = 'Avec des données';
export const NonHydrated : Story<UserListComponent> = (...args) => ({
    props: {
        users: []
    }
})
NonHydrated.storyName = 'Sans données';
