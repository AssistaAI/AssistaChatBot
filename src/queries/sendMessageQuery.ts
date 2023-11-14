import { MessageType } from '@/components/Bot'
import { sendRequest } from '@/utils/index'

export type IncomingInput = {
    question: string
    history: MessageType[]
    overrideConfig?: Record<string, unknown>
    socketIOClientId?: string
    chatId?: string
}

export type MessageRequest = {
    chatflowid: string
    apiHost?: string
    body?: IncomingInput
}

export const sendMessageQuery = ({ chatflowid, apiHost, body }: MessageRequest) =>
    sendRequest<any>({
        method: 'POST',
        url: `${apiHost}/api/v1/companies/${chatflowid}/answer`,
        body
    })