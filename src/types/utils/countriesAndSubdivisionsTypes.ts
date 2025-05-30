export interface countriesAndSubdivisionsTypes {
  countryName: string;
  countryCode: string;
  subdivisions: {
    code: string;
    name: string;
  }[];
  dialCode?: number;
  phoneLength?: number;
}
