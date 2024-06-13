import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  imgSrc: string;
  dark?: boolean;
}

export const Phone: React.FC<Props> = ({
  className = '',
  imgSrc,
  dark = false,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'pointer-events-none relative z-50 overflow-hidden',
        className,
      )}
      {...rest}
    >
      <Image
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        alt="Phone"
        className="pointer-events-none z-50 select-none"
        width={500}
        height={500}
      />

      <div className="absolute inset-0 -z-10">
        <Image
          src={imgSrc}
          alt="Phone overlaying"
          className="object-cover"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
