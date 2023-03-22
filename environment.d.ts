declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string;
      PORT_DB: string;
      USER_DB: string;
      PASSWORD_DB: string;
      SECRET_ACCESS_JWT: string;
      SECRET_REFRESH_JWT: string;
      MAIL_PORT: string;
      MAIL_HOST: string;
      MAIL_USER: string;
      MAIL_PASS: string;
    }
  }
}

export {};
