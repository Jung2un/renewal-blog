interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    strokeWidth?: number;
  }

  export const HeartIcon = ({
    size = 24,
    width,
    height,
    strokeWidth = 1.5,
    fill = "none",
    ...props
  }: IconProps) => {
    return (
      <svg
        fill={fill}
        height={height ?? size}
        width={width ?? size}
        strokeWidth={strokeWidth}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  export const PreviousIcon = ({
    size = 18,
    width,
    height,
    strokeWidth = 2,
    fill = "none",
    ...props
  }: IconProps) => {
    return (
      <svg
        width={width ?? size}
        height={height ?? size}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export const NextIcon = ({
    size = 18,
    width,
    height,
    strokeWidth = 2,
    fill = "none",
    ...props
  }: IconProps) => {
    return (
      <svg
        width={width ?? size}
        height={height ?? size}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export const TypeScriptIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.85 2.11h-5.7v19.79h5.7v-4.47h3.81v-3.72h-3.81v-3.9h3.81v-3.72h-3.81z" />
      <path d="M19.79 12.3v-2.31a3.49 3.49 0 00-2.4-3.15.54.54 0 00-.65.57v11.72c0 .32.42.57.65.57a3.49 3.49 0 002.4-3.15z" />
    </svg>
  );
  
  export const ReactIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23 23 20.46"
      fill="currentColor"
    >
      <circle r="2.05" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
  
  export const TailwindIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 18.01c-4.43 0-8.03-3.6-8.03-8.03S7.57 3.98 12 3.98s8.03 3.6 8.03 8.03-3.6 8.02-8.03 8.02zM16.5 12c0-1.27-.42-2.43-1.13-3.33-.71-.9-1.68-1.4-2.77-1.4-1.28 0-2.44.78-3.05 1.76-.61.98-.8 2.22-.51 3.44.29 1.22 1.09 2.22 2.22 2.71.56.24 1.14.36 1.72.36.91 0 1.76-.39 2.4-1.1.69-.72 1.12-1.74 1.12-2.84z" />
    </svg>
  );
  
  export const FramerMotionIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 6.5V12h5.5L12 6.5zM12 12l5.5 5.5H12V12zM12 12H6.5L12 17.5V12zM6.5 6.5H12V12L6.5 6.5zM17.5 12l-5.5-5.5V12h5.5z" />
    </svg>
  );
  
  export const ZustandIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
      <path d="M12 10a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );