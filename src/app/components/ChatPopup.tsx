import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { submitContact } from "@/app/lib/submitContact";

export const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);
  const [teaserQueue, setTeaserQueue] = useState<string[]>([]);
  const [activeTeaser, setActiveTeaser] = useState<string | null>(null);
  const [chatStep, setChatStep] = useState<"welcome" | "contact" | "chat">("welcome");
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactSubmitError, setContactSubmitError] = useState("");
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
  });
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot"; timestamp: Date }[]
  >([
    {
      text: "Hi! 👋",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      text: "How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const previousMessagesLengthRef = useRef(messages.length);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen) {
      setUnreadCount(0);
      setActiveTeaser(null);
      setTeaserQueue([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const initialBotMessage = messages.find((msg) => msg.sender === "bot");
    if (!initialBotMessage) return;

    const timer = setTimeout(() => {
      if (isOpenRef.current) return;
      setUnreadCount((count) => count + 1);
      setTeaserQueue((queue) => [...queue, initialBotMessage.text]);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const previousLength = previousMessagesLengthRef.current;
    if (messages.length <= previousLength) return;

    const newMessages = messages.slice(previousLength);
    previousMessagesLengthRef.current = messages.length;

    if (isOpenRef.current) return;

    const newBotMessages = newMessages.filter((msg) => msg.sender === "bot");
    if (!newBotMessages.length) return;

    setUnreadCount((count) => count + newBotMessages.length);
    setTeaserQueue((queue) => [
      ...queue,
      ...newBotMessages.map((msg) => msg.text),
    ]);
  }, [messages]);

  useEffect(() => {
    if (isOpen || activeTeaser || teaserQueue.length === 0) return;

    setActiveTeaser(teaserQueue[0]);
    setTeaserQueue((queue) => queue.slice(1));

    const hideTimer = setTimeout(() => {
      setActiveTeaser(null);
    }, 5200);

    return () => clearTimeout(hideTimer);
  }, [isOpen, activeTeaser, teaserQueue]);

  const handleWelcomeMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      text: message,
      sender: "user" as const,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Move to contact form after first message
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for reaching out! To better assist you, please share your contact details below.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setChatStep("contact");
    }, 800);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.email.trim() || !contactInfo.phone.trim()) return;
    setIsSubmittingContact(true);
    setContactSubmitError("");

    try {
      const userMessages = messages
        .filter((msg) => msg.sender === "user")
        .map((msg) => `- ${msg.text}`)
        .join("\n");

      const fullMessage = [
        "Chat lead received from website widget.",
        "",
        "Visitor messages:",
        userMessages || "- No message captured",
      ].join("\n");

      await submitContact({
        source: "chat-popup",
        email: contactInfo.email,
        phone: contactInfo.phone,
        message: fullMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you! We've received your contact details. Our team will reach out shortly.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setChatStep("chat");
    } catch (error) {
      setContactSubmitError("Unable to submit right now. Please try again shortly.");
      console.error("Chat contact submission failed:", error);
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
          >
            <AnimatePresence mode="wait">
              {activeTeaser && (
                <motion.div
                  key={activeTeaser}
                  initial={{ opacity: 0, x: 16, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 16, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-[250px] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm text-[#1C1C1C] shadow-xl border border-[#1e4f8a]/15"
                >
                  {activeTeaser}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative bg-[#d62828] hover:bg-[#B91C1C] text-white rounded-full p-4 shadow-2xl transition-all flex items-center justify-center"
              aria-label="Open chat"
            >
              <MessageCircle size={28} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[1.4rem] h-[1.4rem] px-1 rounded-full bg-[#f4c430] text-[#1C1C1C] text-[11px] font-bold flex items-center justify-center leading-none border-2 border-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 flex max-h-[600px] w-[360px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:w-[400px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1e4f8a] to-[#0E3A6D] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f4c430] rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Chat with Us</h3>
                  <p className="text-xs text-white/80">
                    We typically reply in a few minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1.5 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                      msg.sender === "user"
                        ? "bg-[#1e4f8a] text-white rounded-br-sm"
                        : "bg-white text-gray-800 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p
                      className={`text-[10px] mt-1 ${
                        msg.sender === "user"
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Contact Form or Input */}
            {chatStep === "contact" ? (
              <div className="p-6 bg-gray-50">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-[#1C1C1C] mb-2">Contact Details</h4>
                  <p className="text-sm text-[#6B7280] mb-6">Please share your details so we can reach out to you.</p>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1C] mb-2">Email Address</label>
                      <input
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4f8a] text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1C] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        placeholder="+44 7700 900000"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4f8a] text-sm"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingContact}
                      className="w-full bg-[#d62828] hover:bg-[#B91C1C] text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      {isSubmittingContact ? "Submitting..." : "Submit"}
                    </button>
                    {contactSubmitError && (
                      <p className="text-sm text-[#D62828]">{contactSubmitError}</p>
                    )}
                  </form>
                </div>
              </div>
            ) : chatStep === "welcome" ? (
              <form
                onSubmit={handleWelcomeMessage}
                className="p-4 bg-white border-t border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1e4f8a] text-sm"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="bg-[#d62828] hover:bg-[#B91C1C] text-white rounded-full p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
