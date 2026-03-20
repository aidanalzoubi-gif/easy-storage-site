export const UB_RESIDENCE_HALLS = [
  'Ellicott Complex',
  'Governors Complex',
  'Greiner Hall',
  'Clement Hall',
  'Goodyear Hall',
] as const;

export const UB_ON_CAMPUS_APARTMENTS = [
  'Flint Village',
  'South Lake Village',
  'Hadley Village',
  'Creekside Village',
  'Flickinger Court',
] as const;

export const FURNITURE_OPTIONS = [
  { type: 'Suitcase', boxEquivalent: 1 },
  { type: 'Mini Fridge', boxEquivalent: 2 },
  { type: 'Chair', boxEquivalent: 2 },
  { type: 'Mattress', boxEquivalent: 4 },
  { type: 'Desk', boxEquivalent: 5 },
] as const;

export const TIME_SLOTS = [
  { value: '9am-12pm', label: '9:00 AM - 12:00 PM' },
  { value: '12pm-3pm', label: '12:00 PM - 3:00 PM' },
  { value: '3pm-6pm', label: '3:00 PM - 6:00 PM' },
] as const;

export const PAYMENT_METHODS = [
  {
    value: 'cash',
    label: 'Cash',
    description: 'Pay in cash on pickup day',
  },
  {
    value: 'zelle',
    label: 'Zelle',
    description: 'Send to: ubstorage@email.com',
  },
  {
    value: 'venmo',
    label: 'Venmo',
    description: '@UB-Storage',
  },
  {
    value: 'stripe',
    label: 'Card / Apple Pay',
    description: 'Pay securely online',
  },
] as const;

export const BOOKING_STATUS_LABELS: Record<string, string> = {
  booked: 'Booked',
  deposit_paid: 'Deposit Paid',
  boxes_delivered: 'Boxes Delivered',
  packed: 'Packed & Ready',
  pickup_scheduled: 'Pickup Scheduled',
  picked_up: 'Picked Up',
  in_storage: 'In Storage',
  delivery_scheduled: 'Delivery Scheduled',
  delivered: 'Delivered',
};

export const BOOKING_STATUS_ORDER: string[] = [
  'booked',
  'deposit_paid',
  'boxes_delivered',
  'packed',
  'pickup_scheduled',
  'picked_up',
  'in_storage',
  'delivery_scheduled',
  'delivered',
];

// Contact info for insurance photos
export const INSURANCE_EMAIL = 'photos@ubstorage.com';
export const INSURANCE_PHONE = '(716) 555-0123';

// May 2026 pickup dates (weekdays only for example)
export const AVAILABLE_PICKUP_DATES = [
  '2026-05-11',
  '2026-05-12',
  '2026-05-13',
  '2026-05-14',
  '2026-05-15',
  '2026-05-18',
  '2026-05-19',
  '2026-05-20',
  '2026-05-21',
  '2026-05-22',
];

// Box delivery dates (a few days before pickup window)
export const AVAILABLE_BOX_DELIVERY_DATES = [
  '2026-05-04',
  '2026-05-05',
  '2026-05-06',
  '2026-05-07',
  '2026-05-08',
];

// Fall delivery dates (August 2026)
export const AVAILABLE_FALL_DELIVERY_DATES = [
  '2026-08-24',
  '2026-08-25',
  '2026-08-26',
  '2026-08-27',
  '2026-08-28',
  '2026-08-31',
];
