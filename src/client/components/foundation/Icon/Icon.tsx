import classNames from 'classnames';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaPlay, FaShoppingCart, FaUser } from 'react-icons/fa';

import * as styles from './Icon.styles';

type Props = {
  type: string;
  width: number;
  height: number;
  color: string;
};

export const FaArrowLeftIcon = ({ color, height, type, width }: Props) => {
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <FaArrowLeft />
    </span>
  );
};

export const FaArrowRightIcon = ({ color, height, type, width }: Props) => {
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <FaArrowRight />
    </span>
  );
};

export const FaShoppingCartIcon = ({ color, height, type, width }: Props) => {
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <FaShoppingCart />
    </span>
  );
};

export const FaUserIcon = ({ color, height, type, width }: Props) => {
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <FaUser />
    </span>
  );
};

export const FaPlayIcon = ({ color, height, type, width }: Props) => {
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <FaPlay />
    </span>
  );
};

export const FaCheckCircleIcon = ({ color, height, type, width }: Props) => {
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <FaCheckCircle />
    </span>
  );
};
