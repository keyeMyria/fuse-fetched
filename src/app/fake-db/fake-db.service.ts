import { InMemoryDbService } from 'angular-in-memory-web-api';

import { AnalyticsDashboardDb } from 'app/fake-db/dashboard-analytics';
import { ContactsFakeDb } from 'app/fake-db/contacts';
import { ChatPanelFakeDb } from 'app/fake-db/chat-panel';
import { QuickPanelFakeDb } from 'app/fake-db/quick-panel';

export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

            // Chat Panel
            'chat-panel-contacts' : ChatPanelFakeDb.contacts,
            'chat-panel-chats': ChatPanelFakeDb.chats,
            'chat-panel-user': ChatPanelFakeDb.user,

            // Quick Panel
            'quick-panel-notes' : QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events
        };
    }
}
