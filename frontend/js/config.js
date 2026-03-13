/**
 * SmartPre — Production Configuration
 * Backend hosted on Render.com
 */
const SmartPreConfig = {
    apiBaseUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? '' 
        : 'https://smart-pre-backend-d442.onrender.com',
    
    wsUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}/ws`
        : 'wss://smart-pre-backend-d442.onrender.com/ws'
};

window.SmartPreConfig = SmartPreConfig;
