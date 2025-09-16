import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  left: number;
  delay: number;
  size: number;
  type: 'cube' | 'circle';
}

const FloatingCubes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: Shape[] = [];
      for (let i = 0; i < 30; i++) {
        newShapes.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 25,
          size: 6 + Math.random() * 12, // 6-18px
          type: Math.random() > 0.5 ? 'cube' : 'circle',
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={shape.type === 'cube' ? 'floating-cube' : 'floating-circle'}
          style={{
            left: `${shape.left}%`,
            animationDelay: `${shape.delay}s`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCubes;