import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Search, Filter } from 'lucide-react';

const items = [
  { sku: 'LAP-001', name: 'MacBook Pro 14"', stock: 24, location: 'Warehouse A' },
  { sku: 'MON-015', name: 'Dell Monitor 27"', stock: 8, location: 'Warehouse B' },
  { sku: 'KEY-042', name: 'Mechanical Keyboard', stock: 45, location: 'Warehouse A' },
  { sku: 'MOU-033', name: 'Wireless Mouse', stock: 3, location: 'Warehouse C' },
];

export const InventoryList: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [stocks, setStocks] = useState(items.map(i => i.stock));
  const [filterActive, setFilterActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setStocks((prev) => {
        return prev.map((stock) => {
          const change = Math.floor(Math.random() * 5) - 2;
          return Math.max(1, Math.min(50, stock + change));
        });
      });

      if (Math.random() > 0.7) {
        setFilterActive((prev) => !prev);
      }

      const texts = ['', 'Mac', 'Monitor', ''];
      setSearchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 2500);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  const getStockStyle = (stock: number) => {
    if (stock <= 5) return 'text-red-600';
    if (stock <= 15) return 'text-amber-600';
    return 'text-emerald-600';
  };

  return (
    <div className="w-full h-full flex flex-col p-3 gap-2">
      {/* Search and Filter Bar */}
      <div className="flex gap-2">
        <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 border border-gray-200">
          <Search size={12} className="text-gray-400" />
          <span className={cn(
            'text-[10px] transition-all duration-300',
            searchText ? 'text-gray-800' : 'text-gray-400'
          )}>
            {searchText || 'Search inventory...'}
          </span>
        </div>
        <button 
          className={cn(
            'flex items-center gap-1 px-2 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-300',
            filterActive 
              ? 'bg-gray-900 text-white' 
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          )}
        >
          <Filter size={10} />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="flex-1 bg-white rounded-lg overflow-hidden border border-gray-200">
        <div className="grid grid-cols-4 text-[9px] text-gray-500 font-medium p-2 border-b border-gray-200 bg-gray-50">
          <span>SKU</span>
          <span>Item</span>
          <span className="text-center">Stock</span>
          <span>Location</span>
        </div>
        {items.map((item, index) => (
          <div 
            key={item.sku} 
            className={cn(
              'grid grid-cols-4 text-[10px] p-2 border-b border-gray-100 items-center',
              'transition-all duration-300',
              filterActive && stocks[index] > 10 && 'opacity-30'
            )}
          >
            <span className="text-gray-500 font-mono">{item.sku}</span>
            <span className="text-gray-800 font-medium truncate">{item.name}</span>
            <div className="flex justify-center">
              <span className={cn(
                'font-semibold transition-colors duration-300',
                getStockStyle(stocks[index])
              )}>
                {stocks[index]}
              </span>
            </div>
            <span className="text-gray-500 truncate">{item.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
