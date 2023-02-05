import { ELanguage, EConversationType } from "../types";

export class ChatGPTPrompts {
  static getStarterPrompt(language: ELanguage, conversationType = EConversationType.DEFAULT): string {
    return `Please start a small talk conversation with me in ${EConversationType[conversationType]} style in the language ${ELanguage[language]}. Please limit the whole converstation to maximum of 5 question by you. You may only ask one question at the time and you have to wait for my answer before asking another question. Until you have reached the limit of 5. Without assuming answers. You are only allowed to use my answers as answers. Please keep in mind that I am not native in ${ELanguage[language]} and thus can make grammar or spelling mistakes. After I have given all my answers, please rate my answer between 0 and 10 based on my level of ${ELanguage[language]}. You will exclusively rate my ${ELanguage[language]} at the end of our conversation. Also, this whole conversation has to be in ${ELanguage[language]}. You are the one asking questions. I will respond to them.`;
  }
}
