import React, { useState } from 'react';
import type { IResponseItem } from './Map';
import { ResponseItem } from './ResponseItem';
import { useLocale } from '@i18n/useLocale';

export const MapLayout: React.FC<{items: IResponseItem[]}> = ({items}) => {
  
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  
  const url = new URL(window.location.href);
  const {t} = useLocale(url)
  return (
    <div className={isExpanded ?'bg-white mt-5 h-[calc(100vh-150px)] overflow-auto p-4 flex flex-col gap-5 rounded-xl w-[290px] absolute left-5 z-90' : 'bg-white mt-5  overflow-auto p-4 flex rounded-xl  absolute left-5 z-20'}>
    <div className='flex justify-between items-center'>
        {isExpanded && <h1 className='text-2xl font-semibold '>{t('nav.addresses')}</h1>}
        <svg onClick={() => setIsExpanded(!isExpanded)}
className={`cursor-pointer ${isExpanded ? 'rotate-0' : 'rotate-180'}`}
 xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19V5m10 1l-6 6l6 6m-6-6h14"/></svg>
      </div>

      {
        isExpanded &&
        items.map(item => <ResponseItem key={item.id} item={item} />)
    }
    </div>
  );
};
