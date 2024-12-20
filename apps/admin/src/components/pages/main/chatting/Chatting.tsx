'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import {
  chatDataType,
  chatMemberDataType,
  prevChatResType,
} from '@repo/admin/components/types/main/chatting/chattingTypes';
import {
  getChattingData,
  postChat,
  postEnterChat,
  postOutChat,
} from '@repo/admin/actions/chatting/chattingAction';
import { postHeartbeat } from '@repo/admin/actions/meeting/meetingAction';
import ChatView from './ChatView';
import ChatSender from './ChatSender';

function Chatting({
  mentoringSessionUuid,
  user,
  userData,
}: {
  mentoringSessionUuid: string;
  user: string;
  userData: chatMemberDataType;
}) {
  const [messages, setMessages] = useState<chatDataType[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [getPrev, setGetPrev] = useState<boolean>(true);
  const [isNext, setIsNext] = useState<boolean>(true);
  const [prevMessagePage, setPrevMessagePage] = useState<number>(0);
  const [eventSource, setEventSource] = useState<EventSourcePolyfill | null>(
    null
  );

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newMessage.trim() || selectedFile) {
      if (selectedFile) {
        await postChat({
          message: selectedFile.name,
          messageType: 'MEDIA',
          mediaUrl: URL.createObjectURL(selectedFile),
          mentoringSessionUuid: mentoringSessionUuid,
        });
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }

      if (newMessage.trim()) {
        await postChat({
          message: newMessage,
          messageType: 'TEXT',
          mediaUrl: '',
          mentoringSessionUuid: mentoringSessionUuid,
        });
      }

      setNewMessage('');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      setSelectedFile(imageFile);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const connectEventSource = useCallback(() => {
    if (eventSource) {
      return;
    }

    const chatServiceUrl = `${process.env.NEXT_PUBLIC_CHATSERVICE_URL}/api/v1/chat/real-time/${mentoringSessionUuid}`;
    const newEventSource = new EventSourcePolyfill(chatServiceUrl);

    newEventSource.onopen = async () => {
      console.log('EventSource 연결됨');
    };

    newEventSource.onmessage = (event) => {
      setGetPrev(true);
      const newMessage: chatDataType = JSON.parse(event.data);
      setMessages((prevData) => [...prevData, newMessage]);
    };

    newEventSource.onerror = (error) => {
      console.error('EventSource error:', error);
      newEventSource.close();
      setEventSource(null);
      setTimeout(() => {
        connectEventSource();
      }, 5000);
    };

    setEventSource(newEventSource);
  }, [mentoringSessionUuid]);

  useEffect(() => {
    connectEventSource();
    postEnterChat({
      nickname: userData.nickName,
      mentoringSessionUuid: mentoringSessionUuid,
    });

    const heartbeatInterval = setInterval(async () => {
      await postHeartbeat({
        nickname: userData.nickName,
        mentoringSessionUuid: mentoringSessionUuid,
      });
    }, 30000);

    return () => {
      clearInterval(heartbeatInterval);
      postOutChat({
        nickname: userData.nickName,
        mentoringSessionUuid: mentoringSessionUuid,
      });
      if (eventSource) {
        eventSource.close();
        setEventSource(null);
      }
    };
  }, [mentoringSessionUuid, connectEventSource, userData.nickName]);

  const getMessageData = async (page: number) => {
    try {
      const prevMessages = (await getChattingData({
        page: page,
        mentoringSessionUuid: mentoringSessionUuid,
      })) as prevChatResType;

      if (!prevMessages.hasNext) {
        setIsNext(false);
      }
      setPrevMessagePage((prev) => prev + 1);

      const reversedMessages = prevMessages.content.content.reverse();
      setMessages((prev) => [...reversedMessages, ...prev]);
    } catch (error) {
      console.error('메시지 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    setGetPrev(false);
    getMessageData(0);
  }, []);

  const scrollToBottom = () => {
    if (getPrev) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(scrollToBottom, [messages]);

  const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target) {
      const { scrollTop } = target;
      if (scrollTop === 0 && isNext) {
        await getMessageData(prevMessagePage);
        target.scrollTop = 400;
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <ChatView
        handleDrop={handleDrop}
        messages={messages}
        messagesEndRef={messagesEndRef}
        handleScroll={handleScroll}
        user={user}
      />
      <ChatSender
        handleSendMessage={handleSendMessage}
        fileInputRef={fileInputRef}
        imageInputRef={imageInputRef}
        selectedFile={selectedFile}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleFileSelect={handleFileSelect}
        handleImageSelect={handleImageSelect}
      />
    </div>
  );
}

export default Chatting;
