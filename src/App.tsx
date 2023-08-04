
import {useState,useEffect} from 'react';



export const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const updatedCount = prevCount + 1;
        if (updatedCount <= 10) {
          return updatedCount;
        }
        clearInterval(timer);
        return prevCount;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}




