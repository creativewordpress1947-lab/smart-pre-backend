/**
 * SmartPre — Production Configuration
 * Backend hosted on Railway.app
 */
const SmartPreConfig = {
    apiBaseUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? '' 
        : 'https://smart-pre-backend-production.up.railway.app',
    
    wsUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}/ws`
        : 'wss://smart-pre-backend-production.up.railway.app/ws'
};

window.SmartPreConfig = SmartPreConfig;
