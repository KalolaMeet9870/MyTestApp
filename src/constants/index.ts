const Routes = Object.freeze({
  home: 'Home',
  listing: 'Listing',
  settings: 'Settings',
});

const Strings = Object.freeze({
  HOME_SCREEN_TITLE: 'Home Screen',
  LISTING_SCREEN_TITLE: 'Listing Screen',
  SETTINGS_SCREEN_TITLE: 'Settings Screen',
  DARK_MODE: 'Dark Mode',
  DEVICE_DETAILS_TITLE: 'Device Details',
  OS: 'Operating System',
  OS_VERSION: 'OS Version',
  DEVICE_MODEL: 'Device Model',
  DEVICE_NAME: 'Device Name',
  DEVICE_ID: 'Device ID',
  APP_VERSION: 'App Version',
  PERMISSION_REQUIRED: 'Permission required to access device name.',
  GRANT_PERMISSION: 'Grant Permission',
  NOT_AVAILABLE: 'Not Available',
  PERMISSION_DENIED: 'Permission Denied',
  PHOTOS_TITLE: 'Select Photo',
  PHOTOS_CARD_TITLE: 'Photo Gallery Preview',
  SELECT_PHOTO: 'Open Gallery',
  PHOTOS_PERMISSION_REQUIRED: 'Permission is required to access your photos.',
  PHOTO_PREVIEW_PLACEHOLDER: 'No Photo Selected',
  GRANT_PHOTOS_PERMISSION: 'Grant Photo Permission',
  SEARCH_PLACEHOLDER: 'Search contacts by name or role...',
  NO_RESULTS_FOUND: 'No contacts found.',
  // Settings Form Strings
  SETTINGS_NAME_LABEL: 'Name',
  SETTINGS_NAME_PLACEHOLDER: 'Enter your name',
  SETTINGS_EMAIL_LABEL: 'Email Address',
  SETTINGS_EMAIL_PLACEHOLDER: 'Enter your email address',
  SETTINGS_BIRTHDATE_LABEL: 'Birthdate',
  SETTINGS_BIRTHDATE_PLACEHOLDER: 'Select your birthdate',
  SETTINGS_COUNTRY_LABEL: 'Country',
  SETTINGS_COUNTRY_PLACEHOLDER: 'Select your country',
  SETTINGS_SAVE_BUTTON: 'Save Settings',
  SETTINGS_SUCCESS_MESSAGE: 'Settings saved successfully!',
  
  // Settings Validation Errors
  ERROR_NAME_REQUIRED: 'Name is required.',
  ERROR_EMAIL_REQUIRED: 'Email address is required.',
  ERROR_EMAIL_INVALID: 'Please enter a valid email address.',
  ERROR_BIRTHDATE_REQUIRED: 'Birthdate is required.',
  ERROR_COUNTRY_REQUIRED: 'Country is required.',
});

export { Routes };
export default Strings;
