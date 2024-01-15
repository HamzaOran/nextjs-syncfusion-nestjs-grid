import classNames from 'classnames';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames('max-w-[150rem] mx-auto px-8', className)}>
      {children}
    </div>
  );
};
