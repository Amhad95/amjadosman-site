import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, X, Shield, ShieldCheck } from 'lucide-react';

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

export const RolesPermissionsMatrix: React.FC<{ className?: string }> = ({ className }) => {
  const [preset, setPreset] = useState<Preset>('simple');

  return (
    <div className={cn('', className)}>
      {/* Preset toggle */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm font-medium text-muted-foreground">Governance preset:</span>
        <div className="flex rounded-lg overflow-hidden border border-ink/10">
          <button
            onClick={() => setPreset('simple')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors',
              preset === 'simple'
                ? 'bg-mint text-ink'
                : 'bg-card text-muted-foreground hover:bg-muted'
            )}
          >
            <Shield size={16} />
            Simple
          </button>
          <button
            onClick={() => setPreset('strict')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors',
              preset === 'strict'
                ? 'bg-mint text-ink'
                : 'bg-card text-muted-foreground hover:bg-muted'
            )}
          >
            <ShieldCheck size={16} />
            Strict
          </button>
        </div>
      </div>

      {/* Matrix */}
      <div className="bg-card rounded-xl border border-ink/10 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-5 bg-muted">
          <div className="p-4 text-sm font-semibold text-foreground">Role</div>
          {actions.map((action) => (
            <div key={action} className="p-4 text-sm font-semibold text-foreground text-center">
              {action}
            </div>
          ))}
        </div>

        {/* Rows */}
        {roles.map((role, rowIndex) => (
          <div
            key={role}
            className={cn(
              'grid grid-cols-5',
              rowIndex % 2 === 0 ? 'bg-card' : 'bg-muted/30'
            )}
          >
            <div className="p-4 text-sm font-medium text-foreground flex items-center gap-2">
              <div className={cn(
                'w-2 h-2 rounded-full',
                role === 'Admin' && 'bg-mint',
                role === 'Manager' && 'bg-lavender',
                role === 'Staff' && 'bg-plate-blue',
                role === 'Viewer' && 'bg-muted-foreground'
              )} />
              {role}
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
                      ? 'bg-mint/20 text-mint'
                      : 'bg-ink/5 text-ink/20'
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
