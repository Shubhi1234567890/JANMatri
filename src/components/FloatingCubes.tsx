import { useEffect, useState } from 'react';

interface Cube {
  id: number;
  left: number;
  delay: number;
  size: number;
}

const FloatingCubes = () => {
  const [cubes, setCubes] = useState<Cube[]>([]);

  useEffect(() => {
    const generateCubes = () => {
      const newCubes: Cube[] = [];
      for (let i = 0; i < 15; i++) {
        newCubes.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 20,
          size: 8 + Math.random() * 8, // 8-16px
        });
      }
      setCubes(newCubes);
    };

    generateCubes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="floating-cube"
          style={{
            left: `${cube.left}%`,
            animationDelay: `${cube.delay}s`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCubes;