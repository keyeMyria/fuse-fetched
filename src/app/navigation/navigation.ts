import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'analytics',
                        title: 'Analytics',
                        type : 'item',
                        url  : '/apps/dashboards/analytics'
                    }
                ]
            },
            {
                id       : 'chat',
                title    : 'Chat',
                translate: 'NAV.CHAT',
                type     : 'item',
                icon     : 'chat',
                url      : '/apps/chat',
                badge    : {
                    title: '13',
                    bg   : '#09d261',
                    fg   : '#FFFFFF'
                }
            }

        ]
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'pages',
        children: [
            {
                id      : 'authentication',
                title   : 'Authentication',
                type    : 'collapsable',
                icon    : 'lock',
                badge   : {
                    title: '10',
                    bg   : '#525e8a',
                    fg   : '#FFFFFF'
                },
                children: [
                    {
                        id   : 'login',
                        title: 'Login',
                        type : 'item',
                        url  : '/pages/auth/login'
                    },

                    {
                        id   : 'lock-screen',
                        title: 'Lock Screen',
                        type : 'item',
                        url  : '/pages/auth/lock'
                    }
                ]
            },
            {
                id   : 'coming-soon',
                title: 'Coming Soon',
                type : 'item',
                icon : 'alarm',
                url  : '/pages/coming-soon'
            },

        ]
    },

];
