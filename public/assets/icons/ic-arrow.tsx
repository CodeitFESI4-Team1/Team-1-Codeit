interface IconArrowProps {
  direction: 'left' | 'right' | 'up' | 'down';
  color: string;
}
export default function IconArrow({ direction = 'left', color = '#D1D5DB' }: IconArrowProps) {
  switch (direction) {
    case 'left':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5347 12.7153C8.2346 12.3977 8.2346 11.901 8.53469 11.5834L13.994 5.80488C14.506 5.26294 15.4171 5.62529 15.4171 6.37084V17.9278C15.4171 18.6734 14.506 19.0357 13.994 18.4938L8.5347 12.7153Z"
            fill={color}
          />
        </svg>
      );
    case 'right':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8823 12.7153C15.1824 12.3977 15.1824 11.901 14.8823 11.5834L9.42304 5.80488C8.91103 5.26294 7.99985 5.62529 7.99985 6.37084L7.99985 17.9278C7.99985 18.6734 8.91103 19.0357 9.42304 18.4938L14.8823 12.7153Z"
            fill={color}
          />
        </svg>
      );
    case 'up':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2747 8.97525C11.9571 8.67516 11.4604 8.67516 11.1428 8.97525L5.36427 14.4345C4.82232 14.9465 5.18467 15.8577 5.93023 15.8577L17.4872 15.8577C18.2328 15.8577 18.5951 14.9465 18.0532 14.4345L12.2747 8.97525Z"
            fill={color}
          />
        </svg>
      );
    case 'down':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7151 15.4653C12.3975 15.7654 11.9008 15.7654 11.5832 15.4653L5.8047 10.006C5.26275 9.49404 5.6251 8.58286 6.37066 8.58286L17.9276 8.58286C18.6732 8.58286 19.0355 9.49404 18.4936 10.006L12.7151 15.4653Z"
            fill={color}
          />
        </svg>
      );
    default:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5347 12.7153C8.2346 12.3977 8.2346 11.901 8.53469 11.5834L13.994 5.80488C14.506 5.26294 15.4171 5.62529 15.4171 6.37084V17.9278C15.4171 18.6734 14.506 19.0357 13.994 18.4938L8.5347 12.7153Z"
            fill={color}
          />
        </svg>
      );
  }
}
