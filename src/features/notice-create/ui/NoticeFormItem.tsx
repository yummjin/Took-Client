import React from 'react';

interface NoticeFormItemProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export default function NoticeFormItem({
  label,
  required = false,
  children,
}: NoticeFormItemProps) {
  return (
    <div className="space-y-1.5">
      <p className="flex justify-between text-lg font-semibold">
        <span>
          {label} <span className="text-m">*</span>
        </span>
        {required && <span className="text-m">* 필수</span>}
      </p>
      {children}
    </div>
  );
}
