
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, IEvent, loadSVGFromURL } from 'fabric';

interface DesignEditorProps {
  brandName: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  selectedFont: string;
  designTemplate: string;
}

export const DesignEditor: React.FC<DesignEditorProps> = ({
  brandName,
  primaryColor,
  secondaryColor,
  accentColor,
  selectedFont,
  designTemplate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  
  // Inicializar o canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const fabricCanvas = new Canvas(canvasRef.current, {
      width: 600,
      height: 400,
      backgroundColor: secondaryColor,
    });
    
    setCanvas(fabricCanvas);
    
    // Limpar canvas quando o componente for desmontado
    return () => {
      fabricCanvas.dispose();
    };
  }, []);
  
  // Atualizar o canvas quando as props mudarem
  useEffect(() => {
    if (!canvas) return;
    
    // Limpar o canvas
    canvas.clear();
    canvas.backgroundColor = secondaryColor;
    
    // Criar elementos no canvas baseados no design selecionado
    // Este é um exemplo simples, em uma implementação real você carregaria SVGs ou usaria templates mais complexos
    
    // Verificar qual template aplicar
    if (designTemplate === "Contemporâneo") {
      addContemporaryDesign(canvas);
    } else if (designTemplate === "Clássico") {
      addClassicDesign(canvas);
    } else if (designTemplate === "Minimalista") {
      addMinimalistDesign(canvas);
    } else {
      // Design padrão se nenhuma correspondência for encontrada
      addContemporaryDesign(canvas);
    }
    
    canvas.renderAll();
  }, [canvas, brandName, primaryColor, secondaryColor, accentColor, selectedFont, designTemplate]);
  
  const addContemporaryDesign = (canvas: Canvas) => {
    // Adicionar elementos para o design contemporâneo
    
    // Elemento base
    const rect = new fabric.Rect({
      left: 50,
      top: 150,
      width: 500,
      height: 100,
      fill: primaryColor,
      rx: 10,
      ry: 10,
    });
    
    // Texto do nome da marca
    const text = new fabric.Text(brandName, {
      left: 300,
      top: 190,
      fill: secondaryColor,
      fontSize: 40,
      fontFamily: selectedFont,
      originX: 'center',
      originY: 'center',
    });
    
    // Elemento decorativo
    const circle = new fabric.Circle({
      left: 100,
      top: 200,
      radius: 30,
      fill: accentColor,
      originX: 'center',
      originY: 'center',
    });
    
    canvas.add(rect, circle, text);
  };
  
  const addClassicDesign = (canvas: Canvas) => {
    // Adicionar elementos para um design clássico
    
    // Moldura ornamentada
    const rect = new fabric.Rect({
      left: 50,
      top: 100,
      width: 500,
      height: 200,
      fill: 'transparent',
      stroke: primaryColor,
      strokeWidth: 3,
    });
    
    // Linha decorativa superior
    const line1 = new fabric.Line([100, 130, 500, 130], {
      stroke: accentColor,
      strokeWidth: 2,
    });
    
    // Linha decorativa inferior
    const line2 = new fabric.Line([100, 270, 500, 270], {
      stroke: accentColor,
      strokeWidth: 2,
    });
    
    // Texto do nome da marca
    const text = new fabric.Text(brandName, {
      left: 300,
      top: 200,
      fill: primaryColor,
      fontSize: 36,
      fontFamily: selectedFont,
      fontWeight: 'bold',
      originX: 'center',
      originY: 'center',
    });
    
    canvas.add(rect, line1, line2, text);
  };
  
  const addMinimalistDesign = (canvas: Canvas) => {
    // Adicionar elementos para um design minimalista
    
    // Texto do nome da marca
    const text = new fabric.Text(brandName, {
      left: 300,
      top: 200,
      fill: primaryColor,
      fontSize: 48,
      fontFamily: selectedFont,
      originX: 'center',
      originY: 'center',
    });
    
    // Linha simples
    const line = new fabric.Line([200, 250, 400, 250], {
      stroke: accentColor,
      strokeWidth: 1,
    });
    
    canvas.add(text, line);
  };
  
  return (
    <div className="w-full flex items-center justify-center p-4 bg-white">
      <canvas 
        ref={canvasRef} 
        className="border rounded shadow-sm max-w-full"
      />
    </div>
  );
};
