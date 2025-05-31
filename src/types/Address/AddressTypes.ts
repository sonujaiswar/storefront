export interface AddressTypesUI {
  addressid?: string;
  fullname: string;
  phone: string;
  addressline1: string;
  addressline2: string;
  city: string;
  province: string;
  postalcode: string;
  landmark: string;
  country: string;
  isprimary?: boolean;
}

export interface AddressTypes extends AddressTypesUI {
  addressid: string;
}
