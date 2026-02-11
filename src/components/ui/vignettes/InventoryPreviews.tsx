import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Package, MapPin, AlertTriangle, Check } from 'lucide-react';

// ============ ITEMS TABLE ============

const itemsData = [
  { id: 'i1', sku: 'WDG-1001', name: 'Hydraulic Press Valve', category: 'Parts', location: 'WH-A', qty: 142, status: 'in_stock' as const },
  { id: 'i2', sku: 'ELC-2034', name: '24V Motor Controller', category: 'Electronics', location: 'WH-B', qty: 8, status: 'low' as const },
  { id: 'i3', sku: 'PKG-0512', name: 'Shipping Carton (Large)', category: 'Packaging', location: 'WH-A', qty: 2, status: 'critical' as const },
  { id: 'i4', sku: 'TLS-0089', name: 'Torque Wrench Set', category: 'Tools', location: 'WH-C', qty: 36, status: 'in_stock' as const },
  { id: 'i5', sku: 'SAF-1120', name: 'Safety Goggles (Box)', category: 'Safety', location: 'WH-A', qty: 0, status: 'out' as const },
  { id: 'i6', sku: 'ELC-2071', name: 'Relay Switch Module', category: 'Electronics', location: 'WH-B', qty: 54, status: 'in_stock' as const },
];

const stockStatusStyles = {
  in_stock: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'In Stock' },
  low: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Low' },
  critical: { bg: 'bg-red-100', text: 'text-red-700', label: 'Critical' },
  out: { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Out' },
};

export const ItemsTableRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    let index = 0;
    const interval = setInterval(() => {
      setSelectedRow(itemsData[index].id);
      index = (index + 1) % itemsData.length;
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  return (
    <div
      className={cn('h-full flex flex-col p-3', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Search bar */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md">
          <Package className="w-3 h-3 text-gray-400" />
          <span className="text-[11px] text-gray-400">Search items...</span>
        </div>
        <button className="px-3 py-1.5 text-[11px] font-medium bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
          Filters
        </button>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[0.7fr_1.3fr_0.7fr_0.5fr_0.4fr_0.6fr] gap-2 px-2 pb-2 border-b border-gray-200">
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">SKU</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Item</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Category</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Loc</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Qty</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Status</span>
      </div>

      {/* Rows */}
      <div className="flex-1 overflow-y-auto space-y-0.5 mt-1">
        {itemsData.map((item) => {
          const st = stockStatusStyles[item.status];
          return (
            <div
              key={item.id}
              onClick={() => setSelectedRow(item.id)}
              className={cn(
                'grid grid-cols-[0.7fr_1.3fr_0.7fr_0.5fr_0.4fr_0.6fr] gap-2 px-2 py-2 rounded-md cursor-pointer',
                'transition-all duration-200 hover:bg-gray-50',
                selectedRow === item.id ? 'bg-gray-50 border border-gray-200' : 'border border-transparent'
              )}
            >
              <span className="text-[10px] font-mono text-gray-500">{item.sku}</span>
              <span className="text-[11px] font-medium text-gray-900 truncate">{item.name}</span>
              <span className="text-[10px] text-gray-600">{item.category}</span>
              <span className="text-[10px] text-gray-500">{item.location}</span>
              <span className={cn('text-[11px] font-semibold', item.qty === 0 ? 'text-red-600' : item.qty < 10 ? 'text-amber-600' : 'text-gray-900')}>
                {item.qty}
              </span>
              <span className={cn('inline-flex items-center px-2 py-0.5 text-[9px] font-medium rounded-full w-fit', st.bg, st.text)}>
                {st.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-2 mt-1 border-t border-gray-200">
        <span className="text-[10px] text-gray-500">Showing 6 of 248 items</span>
        <div className="flex items-center gap-1">
          <span className="px-2 py-0.5 text-[10px] bg-gray-900 text-white rounded">1</span>
          <span className="px-2 py-0.5 text-[10px] text-gray-500 hover:bg-gray-100 rounded cursor-pointer">2</span>
          <span className="px-2 py-0.5 text-[10px] text-gray-500 hover:bg-gray-100 rounded cursor-pointer">3</span>
        </div>
      </div>
    </div>
  );
};

// ============ LOCATIONS GRID ============

const locationsData = [
  { id: 'l1', name: 'Warehouse A', zone: 'Main Campus', items: 1240, utilization: 78, topItems: ['Hydraulic Press Valve', 'Shipping Carton'] },
  { id: 'l2', name: 'Warehouse B', zone: 'East Wing', items: 860, utilization: 62, topItems: ['Motor Controller', 'Relay Switch'] },
  { id: 'l3', name: 'Warehouse C', zone: 'Off-site', items: 420, utilization: 45, topItems: ['Torque Wrench Set', 'Cable Ties'] },
  { id: 'l4', name: 'Staging Area', zone: 'Loading Dock', items: 85, utilization: 92, topItems: ['Outbound shipments'] },
];

export const LocationsGridRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [highlightedLoc, setHighlightedLoc] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    let index = 0;
    const interval = setInterval(() => {
      setHighlightedLoc(locationsData[index].id);
      index = (index + 1) % locationsData.length;
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  return (
    <div
      className={cn('h-full p-3 grid grid-cols-2 gap-2 content-start', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {locationsData.map((loc) => (
        <div
          key={loc.id}
          onClick={() => setHighlightedLoc(loc.id)}
          className={cn(
            'bg-white rounded-lg border p-3 cursor-pointer',
            'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
            highlightedLoc === loc.id ? 'border-gray-300 shadow-sm' : 'border-gray-200'
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center">
              <MapPin className="w-3 h-3 text-gray-500" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-gray-900">{loc.name}</div>
              <div className="text-[9px] text-gray-400">{loc.zone}</div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-gray-500">{loc.items} items</span>
            <span className="text-[10px] font-medium text-gray-700">{loc.utilization}%</span>
          </div>
          {/* Utilization bar */}
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500',
                loc.utilization > 85 ? 'bg-amber-400' : 'bg-emerald-400'
              )}
              style={{ width: `${loc.utilization}%` }}
            />
          </div>
          <div className="mt-2 text-[9px] text-gray-400 truncate">
            {loc.topItems.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
};

// ============ REORDER QUEUE ============

type ReorderStatus = 'critical' | 'low' | 'ordered';

interface ReorderItem {
  id: string;
  name: string;
  current: number;
  threshold: number;
  supplier: string;
  status: ReorderStatus;
}

const reorderData: ReorderItem[] = [
  { id: 'r1', name: 'Shipping Carton (Large)', current: 2, threshold: 50, supplier: 'PackageCo', status: 'critical' },
  { id: 'r2', name: '24V Motor Controller', current: 8, threshold: 20, supplier: 'ElecSupply', status: 'low' },
  { id: 'r3', name: 'Safety Goggles (Box)', current: 0, threshold: 25, supplier: 'SafetyFirst', status: 'critical' },
  { id: 'r4', name: 'Cable Ties (Pack 100)', current: 12, threshold: 30, supplier: 'FastenAll', status: 'low' },
];

const reorderStatusStyles = {
  critical: { bg: 'bg-red-100', text: 'text-red-700', label: 'Critical' },
  low: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Low' },
  ordered: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Ordered' },
};

export const ReorderQueueRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [items, setItems] = useState(reorderData);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < reorderData.length) {
        setItems(prev => prev.map((item, i) =>
          i === index ? { ...item, status: 'ordered' as const } : item
        ));
        index++;
      } else {
        setItems(reorderData);
        index = 0;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  return (
    <div
      className={cn('h-full flex flex-col p-3', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
        <span className="text-xs font-medium text-gray-700">Reorder Queue</span>
        <span className="px-1.5 py-0.5 text-[10px] bg-red-100 text-red-700 rounded-full font-medium ml-auto">
          {items.filter(i => i.status !== 'ordered').length} items
        </span>
      </div>

      <div className="flex-1 space-y-1.5 overflow-y-auto">
        {items.map((item) => {
          const st = reorderStatusStyles[item.status];
          return (
            <div
              key={item.id}
              className={cn(
                'flex items-center gap-3 p-2.5 bg-white rounded-lg border border-gray-200',
                'transition-all duration-300',
                item.status === 'ordered' && 'opacity-60'
              )}
            >
              <div className={cn(
                'w-2 h-2 rounded-full flex-shrink-0',
                item.status === 'critical' ? 'bg-red-400 animate-pulse' : item.status === 'low' ? 'bg-amber-400' : 'bg-emerald-400'
              )} />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-gray-900">{item.name}</div>
                <div className="text-[9px] text-gray-400 mt-0.5">
                  {item.current} / {item.threshold} · {item.supplier}
                </div>
              </div>
              <span className={cn('px-2 py-0.5 text-[9px] font-medium rounded-full', st.bg, st.text)}>
                {st.label}
              </span>
              {item.status !== 'ordered' && (
                <button
                  onClick={() => setItems(prev => prev.map(i => i.id === item.id ? { ...i, status: 'ordered' as const } : i))}
                  className="px-2 py-1 text-[10px] font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Order
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============ ASSET TRACKER ============

const assetData = [
  { id: 'a1', tag: 'AST-0041', desc: 'MacBook Pro 16"', assignee: 'JD', location: 'Office 3A', status: 'checked_out' as const },
  { id: 'a2', tag: 'AST-0042', desc: 'Dell Monitor 27"', assignee: 'SK', location: 'Office 3A', status: 'checked_out' as const },
  { id: 'a3', tag: 'AST-0043', desc: 'Projector — Epson', assignee: null, location: 'Storage B', status: 'available' as const },
  { id: 'a4', tag: 'AST-0044', desc: 'Webcam Kit', assignee: 'MR', location: 'Conf Room 1', status: 'checked_out' as const },
  { id: 'a5', tag: 'AST-0045', desc: 'Standing Desk Frame', assignee: null, location: 'Storage B', status: 'available' as const },
];

const assetStatusStyles = {
  checked_out: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Checked Out' },
  available: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Available' },
};

export const AssetTrackerRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [highlightedAsset, setHighlightedAsset] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    let index = 0;
    const interval = setInterval(() => {
      setHighlightedAsset(assetData[index].id);
      index = (index + 1) % assetData.length;
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  return (
    <div
      className={cn('h-full flex flex-col p-3', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="grid grid-cols-[0.6fr_1.3fr_0.5fr_0.7fr_0.7fr] gap-2 px-2 pb-2 border-b border-gray-200">
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Tag</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Asset</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">User</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Location</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Status</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-0.5 mt-1">
        {assetData.map((asset) => {
          const st = assetStatusStyles[asset.status];
          return (
            <div
              key={asset.id}
              onClick={() => setHighlightedAsset(asset.id)}
              className={cn(
                'grid grid-cols-[0.6fr_1.3fr_0.5fr_0.7fr_0.7fr] gap-2 px-2 py-2 rounded-md cursor-pointer',
                'transition-all duration-200 hover:bg-gray-50',
                highlightedAsset === asset.id ? 'bg-gray-50 border border-gray-200' : 'border border-transparent'
              )}
            >
              <span className="text-[10px] font-mono text-gray-500">{asset.tag}</span>
              <span className="text-[11px] font-medium text-gray-900 truncate">{asset.desc}</span>
              {asset.assignee ? (
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[9px] font-medium text-gray-500">
                  {asset.assignee}
                </div>
              ) : (
                <span className="text-[10px] text-gray-400">—</span>
              )}
              <span className="text-[10px] text-gray-500">{asset.location}</span>
              <span className={cn('inline-flex items-center px-2 py-0.5 text-[9px] font-medium rounded-full w-fit', st.bg, st.text)}>
                {st.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
