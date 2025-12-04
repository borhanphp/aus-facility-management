/**
 * Chat Widget Configuration
 * Configure WhatsApp and Facebook Messenger settings
 */

export const CHAT_CONFIG = {
  // WhatsApp Business Number
  whatsapp: {
    number: '61426756696', // Format: country code + number (no + or spaces)
    displayNumber: '0426 756 696',
    defaultMessage: "Hi! I'm interested in your facility management services in Sydney. Can you help me?",
  },

  // Facebook Messenger
  messenger: {
    pageId: 'YOUR_FACEBOOK_PAGE_ID', // Replace with your Facebook Page ID
    pageName: 'AUS Facility Management',
  },

  // Widget Settings
  widget: {
    position: 'bottom-right', // bottom-right, bottom-left
    showOnMobile: true,
    showTooltip: true,
    tooltipText: 'Chat with us!',
    pulseAnimation: true,
    autoOpenDelay: null, // Set to number (ms) to auto-open, null to disable
  },

  // Appearance
  colors: {
    primary: '#4CAF50', // Your green brand color
    whatsapp: '#25D366',
    messenger: '#0084FF',
    text: '#ffffff',
    shadow: 'rgba(0, 0, 0, 0.15)',
  },

  // Messages
  messages: {
    greeting: 'How can we help you today?',
    whatsappButton: 'Chat on WhatsApp',
    messengerButton: 'Chat on Messenger',
    online: "We're online!",
    offline: 'Leave a message',
  },

  // Business Hours (for online indicator)
  businessHours: {
    timezone: 'Australia/Sydney',
    schedule: {
      monday: { open: '08:00', close: '18:00' },
      tuesday: { open: '08:00', close: '18:00' },
      wednesday: { open: '08:00', close: '18:00' },
      thursday: { open: '08:00', close: '18:00' },
      friday: { open: '08:00', close: '18:00' },
      saturday: { open: '09:00', close: '15:00' },
      sunday: { open: null, close: null }, // Closed
    },
  },
};

/**
 * Generate WhatsApp link with optional custom message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || CHAT_CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${CHAT_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate Facebook Messenger link
 */
export function getMessengerLink(): string {
  return `https://m.me/${CHAT_CONFIG.messenger.pageId}`;
}

/**
 * Check if business is currently online based on hours
 */
export function isBusinessOnline(): boolean {
  try {
    const now = new Date();
    const day = now
      .toLocaleDateString('en-US', { weekday: 'long', timeZone: CHAT_CONFIG.businessHours.timezone })
      .toLowerCase();
    const currentTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      timeZone: CHAT_CONFIG.businessHours.timezone,
      hour: '2-digit',
      minute: '2-digit',
    });

    const schedule = CHAT_CONFIG.businessHours.schedule[day as keyof typeof CHAT_CONFIG.businessHours.schedule];

    if (!schedule || !schedule.open || !schedule.close) {
      return false; // Closed on this day
    }

    return currentTime >= schedule.open && currentTime <= schedule.close;
  } catch (error) {
    return true; // Default to online if check fails
  }
}
