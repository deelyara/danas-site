interface EditorialDividerProps {
  variant?: 'line' | 'dot' | 'space';
  spacing?: 'normal' | 'large';
}

export default function EditorialDivider({ 
  variant = 'line', 
  spacing = 'normal' 
}: EditorialDividerProps) {
  const spacingClass = spacing === 'large' ? 'my-16' : 'my-12';
  
  if (variant === 'space') {
    return <div className={spacingClass} />;
  }
  
  if (variant === 'dot') {
    return (
      <div className={`flex justify-center ${spacingClass}`}>
        <div className="w-1 h-1 bg-primary/20 rounded-full" />
      </div>
    );
  }
  
  return (
    <div className={`flex justify-center ${spacingClass}`}>
      <div className="w-16 h-px bg-primary/10" />
    </div>
  );
}