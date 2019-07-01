import { Message, ChatBubble } from '../';
export default interface BubbleGroupInterface {
    messages: Array<Message>;
    key: number;
    id: string | number;
    showSenderName: boolean;
    chatBubble: ChatBubble;
    bubbleStyles: object;
}
