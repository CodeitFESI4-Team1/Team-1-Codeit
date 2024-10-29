import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// 서비스 워커 생성
export const worker = setupWorker(...handlers);
