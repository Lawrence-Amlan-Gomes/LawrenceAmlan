"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [initial, setInitial] = useState(true);
  const [sendableEmail, setSendableEmail] = useState(true);
  const [sendableSubject, setSendableSubject] = useState(true);
  const [sendableText, setSendableText] = useState(true);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (!initial) {
      if (email == "") {
        setSendableEmail(false);
      } else {
        setSendableEmail(true);
      }
      if (subject == "") {
        setSendableSubject(false);
      } else {
        setSendableSubject(true);
      }
      if (text == "") {
        setSendableText(false);
      } else {
        setSendableText(true);
      }
    }
  }, [email, initial, subject, text]);

  const handleSubmit = () => {
    if (email != "" && subject != "" && text != "") {
      setInitial(true);
      setEmail("");
      setSubject("");
      setText("");
      setTimeout(() => {
        alert("Your email has been sent successfully!")
      }, 100);
    } else {
      setInitial(false);
      if (email == "") {
        setSendableEmail(false);
      } else {
        setSendableEmail(true);
      }
      if (subject == "") {
        setSendableSubject(false);
      } else {
        setSendableSubject(true);
      }
      if (text == "") {
        setSendableText(false);
      } else {
        setSendableText(true);
      }
    }
  };
  return (
    <div className="w-full h-[80%]">
      <div className="w-full h-[20%] flex justify-center items-center">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Your Email"
          className={`w-[60%] h-[60%] pl-[10px] placeholder:text-slate-600 bg-slate-900 border box-border rounded-md text-slate-400 focus:outline-none ${
            initial
              ? "border-slate-700 focus:border-blue-600"
              : sendableEmail
              ? "border-green-500"
              : "border-red-500"
          }`}
        />
      </div>
      <div className="w-full h-[20%] flex justify-center items-center">
        <input
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          placeholder="Subject"
          className={`w-[60%] h-[60%] pl-[10px] placeholder:text-slate-600 bg-slate-900 border box-border rounded-md text-slate-400 focus:outline-none ${
            initial
              ? "border-slate-700 focus:border-blue-600"
              : sendableSubject
              ? "border-green-500"
              : "border-red-500"
          }`}
        />
      </div>
      <div className="w-full h-[40%] flex justify-center items-center p-[2%] overflow-hidden">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Feel free to text me"
          className={`w-[80%] h-full placeholder:text-slate-600 bg-slate-900 rounded-lg border-[1px] resize-none text-slate-400 p-[10px] focus:outline-none  ${
            initial
              ? "border-slate-700 focus:border-blue-600"
              : sendableText
              ? "border-green-500"
              : "border-red-500"
          }`}
        />
      </div>
      <div className="w-full h-[20%] flex justify-center items-center">
        <button
          onClick={handleSubmit}
          className="w-[100px] h-[50%] bg-blue-600 rounded-lg font-bold text-[20px] text-slate-200 tracking-wider"
        >
          SEND
        </button>
      </div>
    </div>
  );
}
