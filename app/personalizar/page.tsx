'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import RetabloModel from '@/components/3d/RetabloModel';
import CustomizationPanel from '@/components/personalizar/CustomizationPanel';

export default function PersonalizarPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Personaliza tu Artesanía
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Diseña tu propia pieza artesanal única con nuestras herramientas de personalización 3D
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Viewer */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden aspect-square">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              className="w-full h-full"
            >
              <Suspense fallback={null}>
                <RetabloModel />
                <Environment preset="sunset" />
                <OrbitControls 
                  enablePan={false}
                  minDistance={3}
                  maxDistance={8}
                />
              </Suspense>
            </Canvas>
          </div>

          {/* Customization Controls */}
          <CustomizationPanel />
        </div>
      </div>
    </div>
  );
}