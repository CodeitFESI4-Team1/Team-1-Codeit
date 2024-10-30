interface Tab {
  label: string;
  id: string;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (id: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabClick }: TabsProps) {
  const gap = 8;
  const tabCount = tabs.length;
  const buttonWidth = `calc((1200px - ${(tabCount - 1) * gap}px) / ${tabCount})`;

  return (
    <div role="tablist" className="mx-auto flex max-w-[1200px] justify-center space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          type="button"
          style={{ width: buttonWidth }}
          aria-selected={activeTab === tab.id}
          onClick={() => onTabClick(tab.id)}
          className={`rounded-md px-4 py-2 font-bold sm:text-base md:text-lg lg:text-lg ${
            activeTab === tab.id
              ? 'bg-blue-500 text-white'
              : 'border border-blue-500 bg-white text-blue-500'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
