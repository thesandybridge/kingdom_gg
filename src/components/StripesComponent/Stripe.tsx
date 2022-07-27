import styles from "./Stripes.module.css";

type Props = {
  amount: number;
  height: number;
};

export default function Stripe({ height, amount }: Props) {
  return (
    <hr
      className={styles.stripes}
      style={{ height: `calc(${height}px * ${amount})` }}
    />
  );
}
