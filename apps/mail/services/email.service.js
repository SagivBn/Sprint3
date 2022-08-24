import {storageService} from '.services/storage.service.js';
import {utilService} from '.services/utile.service.js';

export const bookService = {
    query,
    getEmailById,
    returnNextEmailId,
    returnPrevEmailId,
};

const KEY = 'emailsDB';

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus',
};

function _createEmails() {
    return [
        {
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e102',
            subject: 'Job Application',
            body: 'we decided to recruit you',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e103',
            subject: 'Amazon Web Services',
            body: 'Learn how to build in the cloud risk-free with AWS Builder Labs',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e104',
            subject: 'TradingView',
            body: 'New layouts, more chart types, and global data',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e105',
            subject: 'Plex',
            body: 'Action required: Important notice of a potential data breach',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e106',
            subject: 'Upwork',
            body: 'You have Connects expiring in 1 month',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e107',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e108',
            subject: 'Apple',
            body: 'Your invoice from Apple.',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e109',
            subject: 'Gett Receipts',
            body: 'Your Friday afternoon ride with Gett',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e110',
            subject: 'Codewars',
            body: 'Would you pass a Google SQL Interview?',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e111',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e112',
            subject: 'eareview.net support',
            body: 'Your Tick Data Suite support subscription has expired',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
        {
            id: 'e113',
            subject: 'Wim Hof Method',
            body: ' big update on our mission in Kenya',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@appsus.com',
        },
    ];
}

function createNewEmail() {
    return {
        id: utilService.makeId,
        subject,
        body,
        sentAt: Date.now(),
        to,
    };
}

function query(filterBy) {
    let emails = _loadFromStorage();
    const criteria = {
        status: 'inbox/sent/trash/draft',
        txt: 'puki', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        isStared: true, // (optional property, if missing: show all)
        lables: ['important', 'romantic'], // has any of the labels
    };
    if (!emails) {
        emails = _createEmails();
        _saveToStorage(emails);
    }
    if (filterBy) {
        const {search, isRead} = filterBy;
        emails = emails.filter(email => {
            if (search) {
                return (
                    email.search.toLowerCase().includes(search.toLowerCase()) &&
                    email.isRead >= isRead &&
                    email.isRead <= !isRead
                );
            }
        });
    }
    return Promise.resolve(emails);
}

function getEmailById(id) {
    if (!id) return Promise.resolve(null);
    const emails = _loadFromStorage();
    const email = emails.find(email => email.id === id);

    return Promise.resolve(email);
}

function removeEmail(emailId) {
    if (!emailId) return Promise.resolve(null);
    let emails = _loadFromStorage();
    emails = emails.filter(email => emailId !== email.id);
    _saveToStorage(emails);
    return Promise.resolve();
}

function returnNextEmailId(emailId) {
    const emails = _loadFromStorage();
    const currEmailIdx = emails.findIndex(email => email.id === emailId);
    const nextEmailIdx = currEmailIdx + 1 === emails.length ? 0 : currEmailIdx + 1;
    return Promise.resolve(emails[nextEmailIdx].id);
}

function returnPrevEmailId(emailId) {
    const emails = _loadFromStorage();
    const currEmailIdx = emails.findIndex(email => email.id === emailId);
    const prevEmailIdx = currEmailIdx === 0 ? emails.length - 1 : currEmailIdx - 1;
    return Promise.resolve(emails[prevEmailIdx].id);
}

function _saveToStorage(emails) {
    storageService._saveToStorage(KEY, emails);
}

function _loadFromStorage() {
    return storageService._loadFromStorage(KEY);
}
