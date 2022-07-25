import styles from "./Stripes.module.css";

type Props = {
  amount: number;
  height: number;
};

export default function Stripe(props: Props) {
  const { height, amount } = props;
  return (
    <div
      className={styles.stripes}
      style={{ height: `calc(${height}px * ${amount})` }}
    ></div>
  );
}
