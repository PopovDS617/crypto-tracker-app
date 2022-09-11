import { PropsWithChildren } from 'react';
import styles from './Blur.module.css';

const BlurLayer = (props: PropsWithChildren) => {
  return <div className={styles.blur}>{props.children}</div>;
};

export default BlurLayer;
