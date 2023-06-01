import { environment } from 'src/environments/environment';

export const SESSION_KEY = 'ember_simple_auth-session';
export const CLINICAL_DOCUMENTATION_KEY = 'clinical_documentation_latest_data';

export const NUMBER_MAX_LENGTH = '10';
export const INPUT_MAX_LENGTH = '100';
export const TEXTAREA_MAX_LENGTH = '500';

export const CONDITIONS_ONSET_DATE_MIN_YEAR = '1900';
export const CONDITIONS_TYPES = ['condition', 'drug_therapy_problem'];
export const SIGNS_AND_SYMPTOMS_TYPES = ['signs_and_symptoms'];

// Date formats
export const API_DATE_FORMAT = 'EEE, dd MMM yyyy HH:mm:ss xx';
export const DATE_PICKER_FORMAT = 'MM/dd/yyyy';

export const MOCK_STATE_QUERY_REGISTRY = false;

// Cognito
export const COGNITO_LOGIN_URL = environment.cognito.url + '/' + environment.cognito.loginPath + '?client_id=' + environment.cognito.clientId + '&response_type=' + environment.cognito.responseType + '&scope=' + environment.cognito.scope + '&redirect_uri=' + environment.cognito.redirectUri;
export const COGNITO_LOGOUT_URL = environment.cognito.url + '/' + environment.cognito.logoutPath + '?client_id=' + environment.cognito.clientId + '&response_type=' + environment.cognito.responseType + '&scope=' + environment.cognito.scope + '&redirect_uri=' + environment.cognito.redirectUri;

export const CONVERSION_COEFFICIENT = 2.2;

// Assist
export const ASSIST_MIN_SNOOZE_VERSION = 360;

// Integration
export const DATA_UPDATE_INCLUDED_VENDORS  = [4, 9, 11, 12, 20, 45, 46, 47, 53, 57];

// Campaigns
export const RECORDING_PHONE_NUMBER = '+1 817 242 9121';
