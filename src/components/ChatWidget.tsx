import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp, FaFacebookMessenger, FaTimes, FaComments } from 'react-icons/fa';
import { CHAT_CONFIG, getWhatsAppLink, getMessengerLink, isBusinessOnline } from '../constants/chatConfig';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check if business is online
    setIsOnline(isBusinessOnline());

    // Update online status every minute
    const interval = setInterval(() => {
      setIsOnline(isBusinessOnline());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'chat_click', {
        platform: 'whatsapp',
        event_category: 'engagement',
        event_label: 'WhatsApp Chat',
      });
    }

    // Open WhatsApp
    window.open(getWhatsAppLink(), '_blank');
    setIsOpen(false);
  };

  const handleMessengerClick = () => {
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'chat_click', {
        platform: 'messenger',
        event_category: 'engagement',
        event_label: 'Facebook Messenger',
      });
    }

    // Open Messenger
    window.open(getMessengerLink(), '_blank');
    setIsOpen(false);
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);

    // Track widget open
    if (!isOpen && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'chat_widget_open', {
        event_category: 'engagement',
      });
    }
  };

  return (
    <ChatWidgetContainer>
      {/* Expanded Chat Options */}
      {isOpen && (
        <ChatMenu>
          <ChatHeader>
            <div>
              <h3>{CHAT_CONFIG.messages.greeting}</h3>
              <StatusBadge $isOnline={isOnline}>
                <StatusDot $isOnline={isOnline} />
                {isOnline ? CHAT_CONFIG.messages.online : CHAT_CONFIG.messages.offline}
              </StatusBadge>
            </div>
            <CloseButton onClick={toggleWidget}>
              <FaTimes />
            </CloseButton>
          </ChatHeader>

          <ChatOptions>
            <ChatOption onClick={handleWhatsAppClick} $color={CHAT_CONFIG.colors.whatsapp}>
              <IconWrapper $color={CHAT_CONFIG.colors.whatsapp}>
                <FaWhatsapp />
              </IconWrapper>
              <OptionContent>
                <h4>{CHAT_CONFIG.messages.whatsappButton}</h4>
                <p>Message us on WhatsApp</p>
              </OptionContent>
            </ChatOption>

            <ChatOption onClick={handleMessengerClick} $color={CHAT_CONFIG.colors.messenger}>
              <IconWrapper $color={CHAT_CONFIG.colors.messenger}>
                <FaFacebookMessenger />
              </IconWrapper>
              <OptionContent>
                <h4>{CHAT_CONFIG.messages.messengerButton}</h4>
                <p>Chat via Facebook Messenger</p>
              </OptionContent>
            </ChatOption>
          </ChatOptions>

          <ChatFooter>
            <p>We typically reply within minutes!</p>
          </ChatFooter>
        </ChatMenu>
      )}

      {/* Floating Chat Button */}
      <FloatingButton onClick={toggleWidget} $isOpen={isOpen}>
        {isOpen ? <FaTimes /> : <FaComments />}
        {!isOpen && CHAT_CONFIG.widget.showTooltip && <Tooltip>Chat with us!</Tooltip>}
        {!isOpen && isOnline && <OnlineBadge />}
      </FloatingButton>
    </ChatWidgetContainer>
  );
};

// Animations
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ChatWidgetContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
  }
`;

const FloatingButton = styled.button<{ $isOpen: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${CHAT_CONFIG.colors.primary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px ${CHAT_CONFIG.colors.shadow};
  transition: all 0.3s ease;
  position: relative;
  animation: ${(props) => (props.$isOpen ? 'none' : pulse)} 2s infinite;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    font-size: 32px;
    color: ${CHAT_CONFIG.colors.text};
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      font-size: 28px;
    }
  }
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 12px;
  background: #333;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${FloatingButton}:hover & {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 20px;
    border: 6px solid transparent;
    border-top-color: #333;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const OnlineBadge = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  background: #4caf50;
  border: 3px solid white;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;

const ChatMenu = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 360px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: ${slideUp} 0.3s ease;

  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    right: -8px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, ${CHAT_CONFIG.colors.primary} 0%, #388e3c 100%);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }

  @media (max-width: 768px) {
    padding: 16px;

    h3 {
      font-size: 16px;
    }
  }
`;

const StatusBadge = styled.div<{ $isOnline: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  opacity: 0.95;
`;

const StatusDot = styled.div<{ $isOnline: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.$isOnline ? '#4caf50' : '#999')};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: rotate(90deg);
  }

  svg {
    font-size: 20px;
  }
`;

const ChatOptions = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const IconWrapper = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    font-size: 28px;
    color: white;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    min-width: 44px;

    svg {
      font-size: 24px;
    }
  }
`;

const OptionContent = styled.div`
  text-align: left;

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px 0;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  p {
    font-size: 13px;
    color: #666;
    margin: 0;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const ChatOption = styled.button<{ $color: string }>`
  background: white;
  border: 2px solid ${(props) => props.$color};
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.$color};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => props.$color}40;

    ${IconWrapper} {
      background: white;
      color: ${(props) => props.$color};
    }

    ${OptionContent} h4,
    ${OptionContent} p {
      color: white;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const ChatFooter = styled.div`
  padding: 12px 16px;
  background: #f5f5f5;
  text-align: center;
  border-top: 1px solid #e0e0e0;

  p {
    margin: 0;
    font-size: 12px;
    color: #666;
  }
`;
