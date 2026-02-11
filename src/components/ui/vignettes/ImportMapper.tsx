import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Check, ArrowRight, FileSpreadsheet, AlertCircle } from 'lucide-react';

interface Mapping {
  source: string;
  target: string;
  matched?: boolean;
}

interface ImportMapperProps {
  sourceFile?: string;
  mappings: Mapping[];
  className?: string;
}

export const ImportMapper: React.FC<ImportMapperProps> = ({
  sourceFile = 'contacts_export.csv',
  mappings: initialMappings,
  className,
}) => {
  const reducedMotion = useReducedMotion();
  const [mappings, setMappings] = useState(initialMappings);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-match unmatched fields, then reset
  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const unmatchedIndices = initialMappings
      .map((m, i) => (!m.matched ? i : -1))
      .filter(i => i !== -1);
    if (unmatchedIndices.length === 0) return;

    let phase: 'waiting' | 'matched' = 'waiting';
    const interval = setInterval(() => {
      if (phase === 'waiting') {
        setMappings(prev =>
          prev.map((m, i) =>
            unmatchedIndices.includes(i)
              ? { ...m, matched: true, target: m.target || 'Notes' }
              : m
          )
        );
        phase = 'matched';
      } else {
        setMappings(initialMappings);
        phase = 'waiting';
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [reducedMotion, isHovered, initialMappings]);

  const matchedCount = mappings.filter(m => m.matched).length;
  const totalCount = mappings.length;

  return (
    <div
      className={cn('h-full flex flex-col bg-white', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-gray-500" />
          <span className="text-xs font-medium text-gray-700">{sourceFile}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={cn(
            'w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-300',
            matchedCount === totalCount ? 'bg-emerald-100' : 'bg-amber-100'
          )}>
            {matchedCount === totalCount ? (
              <Check className="w-2.5 h-2.5 text-emerald-600" />
            ) : (
              <AlertCircle className="w-2.5 h-2.5 text-amber-600" />
            )}
          </div>
          <span className="text-[10px] text-gray-500">
            {matchedCount}/{totalCount} fields mapped
          </span>
        </div>
      </div>

      {/* Mapping table */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-[1fr,auto,1fr] gap-2 text-[10px]">
          {/* Header row */}
          <div className="font-semibold text-gray-500 uppercase tracking-wide pb-2">
            Source Column
          </div>
          <div />
          <div className="font-semibold text-gray-500 uppercase tracking-wide pb-2">
            Target Field
          </div>

          {/* Mappings */}
          {mappings.map((mapping, i) => (
            <React.Fragment key={i}>
              <div className={cn(
                'px-2 py-1.5 rounded border transition-all duration-300',
                mapping.matched
                  ? 'bg-gray-50 border-gray-200 text-gray-700'
                  : 'bg-amber-50 border-amber-200 text-amber-700'
              )}>
                {mapping.source}
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className={cn(
                  'w-3 h-3 transition-colors duration-300',
                  mapping.matched ? 'text-emerald-500' : 'text-gray-300'
                )} />
              </div>
              <div className={cn(
                'px-2 py-1.5 rounded border transition-all duration-300',
                mapping.matched
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-gray-50 border-gray-200 text-gray-400'
              )}>
                {mapping.target || '— Select field —'}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
        <span className="text-[10px] text-gray-500">
          234 records ready to import
        </span>
        <button className="px-3 py-1.5 bg-gray-900 text-white text-[10px] font-medium rounded-md hover:bg-gray-800 transition-colors">
          Start Import
        </button>
      </div>
    </div>
  );
};

// Default CRM import mappings
export const crmImportMappings: Mapping[] = [
  { source: 'full_name', target: 'Contact Name', matched: true },
  { source: 'company', target: 'Company', matched: true },
  { source: 'email_address', target: 'Email', matched: true },
  { source: 'phone', target: 'Phone', matched: true },
  { source: 'deal_stage', target: 'Pipeline Stage', matched: true },
  { source: 'deal_value', target: 'Deal Value', matched: true },
  { source: 'notes', target: 'Notes', matched: false },
];

export default ImportMapper;
