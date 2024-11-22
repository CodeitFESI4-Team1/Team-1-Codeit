interface Tab {
  label: string;
  id: string;
  route?: string;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (id: string) => void;
}

/**
 * Tabs
 *
 * @param tabs - 탭 목록 데이터 배열로, 각 탭은 label, id, route로 구성
 * @param activeTab - 현재 활성화된 탭의 ID
 * @param onTabClick - 탭 클릭 시 호출되는 함수, 탭 ID를 매개변수로 받음
 * @param variant - 탭 스타일 유형, 기본 값은 'default'이며 'review'로 전환 가능
 */

export default function Tabs({ tabs, activeTab, onTabClick }: TabsProps) {
  const baseStyle =
    'rounded-xl w-full border border-blue-500 px-4 py-2 font-bold sm:text-base md:w-max md:text-lg lg:text-lg ';

  return (
    <div role="tablist" className="flex space-x-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onTabClick(tab.id)}
            className={`${baseStyle} ${isActive ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
