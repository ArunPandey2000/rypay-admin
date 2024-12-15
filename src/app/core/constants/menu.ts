import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Transactions',
          route: '../dashboard',
        },
      ],
    },
    {
      group: 'Manage',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Users',
          route: '../users',
        },
      ],
    },
    {
      group: 'notify',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '../announcement',
        },
      ],
    },
  ];
}
