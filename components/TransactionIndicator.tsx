import TransactionIcon from "../assets/icons/transaction";

import Button from "./Button";

export default function TransactionsStateIndicator() {
  return (
    <Button
      color="gray-900 svg-16"
      className="p-12"
    >
      <span><TransactionIcon color="bg-opac" /></span>
    </Button>
  );
}
