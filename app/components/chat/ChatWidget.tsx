"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X, Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { contactInfo } from "@/data/contact";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[90vw] sm:w-[400px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-sm">Contact Anla</h3>
                                <p className="text-xs text-blue-100">Get in touch!</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-full transition"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {contactInfo.message}
                            </p>
                            
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                <Mail className="w-5 h-5 text-blue-600" />
                                <div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Email</div>
                                    <div className="text-sm font-medium">{contactInfo.email}</div>
                                </div>
                            </a>

                            <a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                                <div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">GitHub</div>
                                    <div className="text-sm font-medium">@itsanla</div>
                                </div>
                            </a>

                            <a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                <Linkedin className="w-5 h-5 text-blue-600" />
                                <div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</div>
                                    <div className="text-sm font-medium">Anla Harpanda</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
