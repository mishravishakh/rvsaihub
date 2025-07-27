import { useState, useEffect } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface TransparentLogoProps {
  src: string;
  alt: string;
  className?: string;
}

const TransparentLogo = ({ src, alt, className }: TransparentLogoProps) => {
  const [transparentSrc, setTransparentSrc] = useState<string>(src);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        
        // Load the image
        const imageElement = await loadImageFromUrl(src);
        
        // Remove background
        const transparentBlob = await removeBackground(imageElement);
        
        // Create object URL for the transparent image
        const transparentUrl = URL.createObjectURL(transparentBlob);
        setTransparentSrc(transparentUrl);
        
        // Cleanup function to revoke the object URL when component unmounts
        return () => URL.revokeObjectURL(transparentUrl);
      } catch (error) {
        console.error('Failed to remove background:', error);
        // Fallback to original image
        setTransparentSrc(src);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, [src]);

  return (
    <img 
      src={transparentSrc} 
      alt={alt} 
      className={className}
      style={{ opacity: isProcessing ? 0.7 : 1 }}
    />
  );
};

export default TransparentLogo;