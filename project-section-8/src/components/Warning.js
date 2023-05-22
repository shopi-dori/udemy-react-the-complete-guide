import { Card } from "./Card";

export function Warning({warning, onClose}) {
  return (
    <Card title={'Warning'}>
      <p>{warning}</p>
      <div>
        <button onClick={onClose} className="btn-default">Close</button>
      </div>
    </Card>
  );
}