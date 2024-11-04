interface Tab {
  label: string;
  id: string;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (id: string) => void;
  variant?: 'default' | 'review';
}

/**
 * Tabs
 *
 * @param tabs - 탭 목록 데이터 배열로, 각 탭은 label과 id로 구성
 * @param activeTab - 현재 활성화된 탭의 ID
 * @param onTabClick - 탭 클릭 시 호출되는 함수, 탭 ID를 매개변수로 받음
 * @param variant - 탭 스타일 유형, 기본 값은 'default'이며 'review'로 전환 가능
 */

export default function Tabs({ tabs, activeTab, onTabClick, variant = 'default' }: TabsProps) {
  const gap = 8;
  const tabCount = tabs.length;
  const buttonWidth = `calc((1200px - ${(tabCount - 1) * gap}px) / ${tabCount})`;

  // 기본 스타일
  const baseStyle =
    variant === 'review'
      ? 'flex h-11 w-32 items-center justify-center text-center text-base font-medium'
      : 'px-4 py-2 font-bold sm:text-base md:text-lg lg:text-lg';

  // 활성화된 탭 스타일
  const activeStyle = variant === 'review' ? 'bg-black text-white' : 'bg-blue-500 text-white';

  // 비활성화된 탭 스타일
  const inactiveStyle =
    variant === 'review' ? 'bg-white text-black' : 'border border-blue-500 bg-white text-blue-500';

  const tabListStyle = variant === 'review' ? 'gap-2' : 'gap-4';

  return (
    <div role="tablist" className={`flex ${tabListStyle}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            style={variant === 'default' ? { width: buttonWidth } : undefined}
            aria-selected={isActive}
            onClick={() => onTabClick(tab.id)}
            className={`rounded-xl ${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
