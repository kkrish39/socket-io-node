const data =
{
  "slack": [
    {
      "id": "12345",
      "channel": "chatter",
      "author": "alice",
      "message": "Who's up for lunch right now?",
      "timestamp": "2019-02-26 11:00:00",
      "matching_terms": [
        "alice",
        "chatter",
        "lunch"
      ]
    },
    {
      "id": "12346",
      "channel": "chatter",
      "author": "bob",
      "message": "I am up for lunch!",
      "timestamp": "2019-02-26 11:00:01",
      "matching_terms": [
        "bob",
        "chatter",
        "lunch"
      ]
    },
    {
      "id": "12347",
      "channel": "chatter",
      "author": "carol",
      "message": "Me too @alice!",
      "timestamp": "2019-02-26 11:00:02",
      "matching_terms": [
        "carol",
        "chatter",
        "alice"
      ]
    },
    {
      "id": "22345",
      "channel": "customer-chatter",
      "author": "alice",
      "message": "Did any of you meet with Acme folks last week?",
      "timestamp": "2019-02-26 12:00:00",
      "matching_terms": [
        "alice",
        "customer-chatter",
        "acme"
      ]
    },
    {
      "id": "22346",
      "channel": "customer-chatter",
      "author": "dave",
      "message": "Yeah, I met with Bob there",
      "timestamp": "2019-02-26 12:00:01",
      "matching_terms": [
        "dave",
        "customer-chatter",
        "bob"
      ]
    },
    {
      "id": "22347",
      "channel": "customer-chatter",
      "author": "dave",
      "message": "I think John from Acme was in that meeting too",
      "timestamp": "2019-02-26 12:00:02",
      "matching_terms": [
        "dave",
        "john",
        "acme"
      ]
    }
  ],
  "calendar": [
    {
      "id": "12345",
      "title": "Acme Proposal Meeting",
      "invitees": "dave, john, bob, carol",
      "matching_terms": [
        "dave",
        "john",
        "bob",
        "carol",
        "acme"
      ],
      "date": "2019-01-10 10:00:00"
    },
    {
      "id": "12345",
      "title": "Acme Final Delivery Meeting",
      "invitees": "dave, john, bob, alice",
      "matching_terms": [
        "dave",
        "john",
        "bob",
        "alice",
        "acme"
      ],
      "date": "2019-03-01 11:00:00"
    }
  ],
  "contacts": [
    {
      "id": "12345",
      "name": "John Doe",
      "company": "Acme Inc",
      "emails": [
        "john@acme.co",
        "doe@gmail.com"
      ],
      "phones": [
        "650-555-5555",
        "+44 171 5555 5555"
      ],
      "matching_terms": ["acme", "john", "john doe"],
      "last_contact": "2019-02-26"
    },
    {
      "id": "31456",
      "name": "Robert Roe",
      "company": "Acme Inc",
      "emails": [
        "bob@acme.co"
      ],
      "phones": [
        "+44 171 6666 5555"
      ],
      "matching_terms": ["acme", "robert", "roe", "bob"],
      "last_contact": "2019-02-29"
    },
    {
      "id": "787661",
      "name": "Alice Smith",
      "company": "Other Corp",
      "emails": [
        "alice@other.co"
      ],
      "phones": [
        "+1 415 555 6666"
      ],
      "matching_terms": ["alice", "other", "alice smith"],
      "last_contact": "2019-02-29"
    }
  ],
  "dropbox": [
    {
      "id": "12345",
      "path": "/taxes/2016/w2-acme.pdf",
      "title": "\"2016 W2\"",
      "shared_with": [
        "jane@accountants.com",
        "spouse@family.org"
      ],
      "matching_terms": [
        "tax",
        "w2",
        "alice"
      ],
      "created": "2016-02-01"
    },
    {
      "id": "34567",
      "path": "/work/customers/acme/invoice.docx",
      "title": "\"ACME Corp: Invoice\"",
      "shared_with": [
        "acme-accounts@mycompany.com"
      ],
      "matching_terms": [
        "acme",
        "invoice"
      ],
      "created": "2019-02-01"
    },
    {
      "id": "56789",
      "path": "/purchases/2016/fridge.pdf",
      "title": "\"Best Buy: Invoice\"",
      "matching_terms": [
        "invoice"
      ],
      "created": "2019-02-01"
    },
    {
      "id": "3456789",
      "path": "/work/customers/acme/proposal.docx",
      "title": "\"ACME Corp: Draft MoU\"",
      "shared_with": [
        "acme-accounts@mycompany.com"
      ],
      "matching_terms": [
        "acme",
        "proposal",
        "mou"
      ],
      "created": "2019-01-19"
    },
    {
      "id": "3556789",
      "path": "/work/customers/acme/meeting-notes.docx",
      "title": "\"ACME Corp: Meeting Notes\"",
      "shared_with": [
        "acme-accounts@mycompany.com"
      ],
      "matching_terms": [
        "acme",
        "meeting notes"
      ],
      "created": "2019-02-04"
    }
  ],
  "tweet": [
    {
      "user": "@acmecorp",
      "message": "We're hiring in Boston!",
      "timestamp": "2019-02-29",
      "matching_terms": [
        "acme",
        "hiring",
        "boston"
      ]
    },
    {
      "user": "@acmecorp",
      "message": "We're no longer hiring in Timbuktu",
      "timestamp": "2019-02-27",
      "matching_terms": [
        "acme",
        "hiring",
        "timbuktu"
      ]
    }
  ]
}

module.exports = data