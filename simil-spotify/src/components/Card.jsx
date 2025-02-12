import Button from './Button';
import './Card.css'
import Play from './Play';
export default function Card({ children }) {
  return (
    <>
      <div className='song-card'>
      {children}
      <Button/>
      <Play/>
    
      </div>
    </>
  );
}
