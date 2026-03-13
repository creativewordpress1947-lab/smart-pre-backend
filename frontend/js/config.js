/**
 * SmartPre — Production Configuration
 * Update these URLs after deploying your backend to Render.com
 */
const SmartPreConfig = {
    // Replace with your Render backend URL (e.g., https://smart-pre-backend.onrender.com)
    // For local development, use http://localhost:8000
    apiBaseUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? '' 
        : 'https://smart-pre-backend.onrender.com', // Replace this!
    
    // Replace with your Render WebSocket URL (e.g., wss://smart-pre-backend.onrender.com/ws)
    // For local development, use ws://localhost:8000/ws
    wsUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}/ws`
        : 'wss://smart-pre-backend.onrender.com/ws' // Replace this!
};

window.SmartPreConfig = SmartPreConfig;
