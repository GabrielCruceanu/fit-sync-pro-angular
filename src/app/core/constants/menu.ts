import { MenuItem, SubMenuItem } from '@app/core/models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'client',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/trophy.svg',
          label: 'Workouts',
          route: '/workouts',
        },
        {
          icon: 'assets/icons/heroicons/outline/heart.svg',
          label: 'Nutrition',
          route: '/nutrition',
        },
        {
          icon: 'assets/icons/heroicons/outline/chat.svg',
          label: 'Chat',
          route: '/chat',
        },
      ],
    },
    {
      group: 'trainer',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Download',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Gift Card',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Users',
          route: '/users',
        },
      ],
    },
    {
      group: 'nutritionist',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];

  public static clientMenu: SubMenuItem[] = [
    {
      icon: 'assets/icons/heroicons/outline/chart-pie.svg',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'assets/icons/heroicons/outline/flag.svg',
      label: 'Progress',
      route: '/progress',
    },
    {
      icon: 'assets/icons/heroicons/outline/trophy.svg',
      label: 'Workouts',
      route: '/workouts',
    },
    {
      icon: 'assets/icons/heroicons/outline/heart.svg',
      label: 'Nutrition',
      route: '/nutrition',
    },
    {
      icon: 'assets/icons/heroicons/outline/chat.svg',
      label: 'Chat',
      route: '/chat',
    },
  ];
  public static trainerMenu: SubMenuItem[] = [
    {
      icon: 'assets/icons/heroicons/outline/chart-pie.svg',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'assets/icons/heroicons/outline/flag.svg',
      label: 'Progress',
      route: '/progress',
    },
    {
      icon: 'assets/icons/heroicons/outline/trophy.svg',
      label: 'Workouts',
      route: '/workouts',
    },
    {
      icon: 'assets/icons/heroicons/outline/heart.svg',
      label: 'Nutrition',
      route: '/nutrition',
    },
    {
      icon: 'assets/icons/heroicons/outline/chat.svg',
      label: 'Chat',
      route: '/chat',
    },
  ];
  public static nutritionistMenu: SubMenuItem[] = [
    {
      icon: 'assets/icons/heroicons/outline/chart-pie.svg',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'assets/icons/heroicons/outline/flag.svg',
      label: 'Progress',
      route: '/progress',
    },
    {
      icon: 'assets/icons/heroicons/outline/trophy.svg',
      label: 'Workouts',
      route: '/workouts',
    },
    {
      icon: 'assets/icons/heroicons/outline/heart.svg',
      label: 'Nutrition',
      route: '/nutrition',
    },
    {
      icon: 'assets/icons/heroicons/outline/chat.svg',
      label: 'Chat',
      route: '/chat',
    },
  ];
  public static gymMenu: SubMenuItem[] = [
    {
      icon: 'assets/icons/heroicons/outline/chart-pie.svg',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'assets/icons/heroicons/outline/flag.svg',
      label: 'Progress',
      route: '/progress',
    },
    {
      icon: 'assets/icons/heroicons/outline/trophy.svg',
      label: 'Workouts',
      route: '/workouts',
    },
    {
      icon: 'assets/icons/heroicons/outline/heart.svg',
      label: 'Nutrition',
      route: '/nutrition',
    },
    {
      icon: 'assets/icons/heroicons/outline/chat.svg',
      label: 'Chat',
      route: '/chat',
    },
  ];
  public static adminMenu: SubMenuItem[] = [
    {
      icon: 'assets/icons/heroicons/outline/chart-pie.svg',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'assets/icons/heroicons/outline/flag.svg',
      label: 'Progress',
      route: '/progress',
    },
    {
      icon: 'assets/icons/heroicons/outline/trophy.svg',
      label: 'Workouts',
      route: '/workouts',
    },
    {
      icon: 'assets/icons/heroicons/outline/heart.svg',
      label: 'Nutrition',
      route: '/nutrition',
    },
    {
      icon: 'assets/icons/heroicons/outline/chat.svg',
      label: 'Chat',
      route: '/chat',
    },
  ];
}
