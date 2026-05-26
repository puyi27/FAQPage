import React, { useState, useRef, useEffect } from 'react';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Welcome to the FAE Virtual Assistant. How can I help you with your engineering or supply chain inquiry today?'
  }
];

const quickReplies = [
  "What is your PCBA lead time?",
  "How do I request an RMA?",
  "Tell me about LoRaWAN modules."
];

const getSimulatedResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes('lead time') || lowerQuery.includes('pcba')) {
    return 'For our Fast Track NPI service, PCBA prototypes can be assembled in 5 to 10 business days once DFM review is complete and components are available.';
  }
  if (lowerQuery.includes('rma') || lowerQuery.includes('return')) {
    return 'You can initiate an RMA through our Supply Portal. You will find the standard RMA Request Form in our Technical Resources section.';
  }
  if (lowerQuery.includes('lorawan') || lowerQuery.includes('iot')) {
    return 'We integrate LoRaWAN, NB-IoT, and Matter into our custom Edge IoT Gateways. You can find detailed API docs and integration guides in our Resource Center.';
  }
  return 'I am currently a simulated assistant. To get a detailed technical answer regarding this specific requirement, please use the "Talk to an Engineer" button on our page to reach Kilometro Rosso Lab.';
};

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: getSimulatedResponse(text)
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      
      {isOpen && (
        <div className="bg-white border border-gray-200 shadow-2xl w-80 md:w-96 h-[500px] mb-4 flex flex-col animate-fade-in-up">
          <div className="bg-[#282930] text-white p-4 flex justify-between items-center border-b-2 border-[#42C5FF]">
            <div className="flex items-center gap-3">
              <SmartToyOutlinedIcon className="text-[#42C5FF]" />
              <span className="font-bold tracking-widest uppercase text-sm">FAE Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <CloseIcon fontSize="small" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#282930] text-white' 
                      : 'bg-white border border-gray-200 text-[#282930]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-[#282930] p-3 flex gap-1 items-center">
                  <div className="w-2 h-2 bg-[#42C5FF] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#42C5FF] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-[#42C5FF] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && !isTyping && (
            <div className="p-3 bg-white border-t border-gray-100 flex flex-wrap gap-2">
              {quickReplies.map((reply, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleSend(reply)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-[#282930] px-3 py-1 border border-gray-300 transition-colors text-left"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 bg-white border-t border-gray-200 flex items-center">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(inputValue); }}
              placeholder="Type your question..." 
              className="flex-1 outline-none text-sm p-2 text-[#282930]"
            />
            <button 
              onClick={() => handleSend(inputValue)}
              className="text-[#42C5FF] hover:text-[#282930] transition-colors p-2 disabled:opacity-50"
              disabled={!inputValue.trim() || isTyping}
            >
              <SendIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#282930] text-white p-4 shadow-xl hover:bg-[#1d1d23] hover:scale-110 transition-all border-2 border-[#42C5FF] flex items-center justify-center group"
        >
          <ChatBubbleOutlinedIcon fontSize="large" className="group-hover:text-[#42C5FF] transition-colors" />
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;
