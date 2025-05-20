export interface AddressTypesUI {
  full_name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  landmark: string;
  country: string;
}

export interface AddressTypes extends AddressTypesUI {
  address_id: string;
}
