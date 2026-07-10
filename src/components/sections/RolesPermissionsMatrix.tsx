import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Check, X, Shield, ShieldCheck } from 'lucide-react';
import { useLocale } from '@/lib/locale';
import { getUiCopy } from '@/lib/uiCopy';

type Preset = 'simple' | 'strict';

interface PermissionMatrix {
  simple: Record<string, boolean[]>;
  strict: Record<string, boolean[]>;
}

const roles = ['Admin', 'Manager', 'Staff', 'Viewer'];
const actions = ['Create', 'Approve', 'Export', 'Delete'];

const permissionMatrix: PermissionMatrix = {
  simple: {
    Admin: [true, true, true, true],
    Manager: [true, true, true, false],
    Staff: [true, false, true, false],
    Viewer: [false, false, true, false],
  },
  strict: {
    Admin: [true, true, true, true],
    Manager: [true, true, false, false],
    Staff: [true, false, false, false],
    Viewer: [false, false, false, false],
  },
};

const roleColors = {
  Admin: 'bg-emerald-500',
  Manager: 'bg-blue-500',
  Staff: 'bg-amber-500',
  Viewer: 'bg-gray-400',
};

export const RolesPermissionsMatrix: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [preset, setPreset] = useState<Preset>('simple');
  const [isHovered, setIsHovered] = useState(false);
  const { locale, isRTL } = useLocale();
  const copy = getUiCopy(locale);
  const roleLabels = { Admin: copy.roleAdmin, Manager: copy.roleManager, Staff: copy.roleStaff, Viewer: copy.roleViewer };
  const actionLabels = [copy.actionCreate, copy.actionApprove, copy.actionExport, copy.actionDelete];

  // Auto-toggle between presets
  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const interval = setInterval(() => {
      setPreset(prev => prev === 'simple' ? 'strict' : 'simple');
    }, 5000);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  return (
    <div
      className={cn('bg-white p-4', isRTL && 'text-right', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Preset toggle */}
      <div className={cn('flex items-center gap-4 mb-6', isRTL && 'flex-row-reverse justify-end')}>
        <span className="text-sm font-medium text-gray-500">
          {copy.governancePreset}
        </span>
        <div className="flex rounded-lg overflow-hidden border border-gray-200">
          <button
            onClick={() => setPreset('simple')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-300',
              preset === 'simple'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            )}
          >
            <Shield size={16} />
            {copy.simple}
          </button>
          <button
            onClick={() => setPreset('strict')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-300',
              preset === 'strict'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            )}
          >
            <ShieldCheck size={16} />
            {copy.strict}
          </button>
        </div>
      </div>

      {/* Matrix */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200">
          <div className="p-4 text-sm font-semibold text-gray-700">
            {copy.role}
          </div>
          {actionLabels.map((action) => (
            <div key={action} className="p-4 text-sm font-semibold text-gray-700 text-center">
              {action}
            </div>
          ))}
        </div>

        {/* Rows */}
        {roles.map((role, rowIndex) => (
          <div
            key={role}
            className={cn(
              'grid grid-cols-5 transition-colors',
              rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
            )}
          >
            <div className={cn('p-4 text-sm font-medium text-gray-800 flex items-center gap-2', isRTL && 'flex-row-reverse')}>
              <div className={cn(
                'w-2 h-2 rounded-full',
                roleColors[role as keyof typeof roleColors]
              )} />
              {roleLabels[role as keyof typeof roleLabels]}
            </div>
            {permissionMatrix[preset][role].map((hasPermission, colIndex) => (
              <div
                key={colIndex}
                className="p-4 flex items-center justify-center"
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center',
                    'transition-all duration-300',
                    hasPermission
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-gray-100 text-gray-300'
                  )}
                >
                  {hasPermission ? <Check size={16} /> : <X size={16} />}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesPermissionsMatrix;
