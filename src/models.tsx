export interface IEvent {
  contacts: string;
  event_days: string;
  exhibitors: string;
  first_day: string;
  internal_description: null;
  is_published: boolean;
  is_registration: boolean;
  is_template: boolean;
  last_day: string;
  locations: string;
  messages: string;
  metadata: {};
  name: string;
  publish_timestamp: string;
  registration_deadline: null;
  registration_form: string;
  registrations_limit: null;
  registrations_total: number;
  self: string;
}

export interface IContact {
  company_name: string | null;
  email: string;
  name: {
    lastname: string;
    firstname: string;
    title: string;
    sex: string;
  };
  self: string;
}

export interface IRegistration {
  answers?: [];
  checkin_qr_code: string;
  checkin_timestamp: null | string;
  created: string;
  email: string;
  invoices: [];
  last_modified: string;
  metadata: {};
  registration_stat: string;
  registration_timestamp: string;
  self: string;
  uuid: string;
}
