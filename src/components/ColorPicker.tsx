
import React from 'react';
import { Input } from '@/components/ui/input';

interface ColorPickerProps {
  id?: string;
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ id, color, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <div 
        className="w-10 h-10 rounded-md border shadow-sm overflow-hidden relative"
        style={{ backgroundColor: color }}
      >
        <Input
          id={id}
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        />
      </div>
      <div className="flex-1">
        <Input
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="font-mono uppercase"
        />
      </div>
    </div>
  );
};
