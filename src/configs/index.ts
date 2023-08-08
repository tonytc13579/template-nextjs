// App configs
export const APP_ENV: string = process.env.NEXT_PUBLIC_MODE!;
export const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

// CDN
export const CDN_URL: string = process.env.NEXT_PUBLIC_CDN_URL!;

export const isProduction = APP_ENV === 'production';
