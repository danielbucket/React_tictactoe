export default function Square({ value, onSquareClick }) {
  const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  width: '40px',
  fontSize: '20px',
  margin: '5px',
  backgroundColor: 'grey'
  }

  return (
    <div style={styles} onClick={onSquareClick}>
      {value}
    </div>
  );
}