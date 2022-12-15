import TransactionIcon from "../assets/icons/transaction";

import Button from "./Button";

export default function TransactionsStateIndicator() {
  return (
    <Button
      className="opacity-75 opacity-100-hover"
      transparent
      rounded
    >
      <TransactionIcon color="bg-opac" />
    </Button>
  );
}
