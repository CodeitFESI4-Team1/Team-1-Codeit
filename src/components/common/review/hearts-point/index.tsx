/* import { ssrPrefetch } from '@/src/utils/ssrPrefetch';
import Hearts from './hearts';
import { useState } from 'react';

export default function HeartWrapper() {
  const [point, setPoint] = useState();
  const score = ssrPrefetch()

  setPoint(score)

  return (
    <div className="flex justify-center gap-3">
      <Hearts {point}/>
    </div>
  );
}

*/
