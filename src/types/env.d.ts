declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BREVO_SMTP_KEY: string
      NORA_CONTACT_EMAIL: string
    }
  }
}

export {}