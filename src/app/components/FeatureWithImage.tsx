import { ReactNode } from 'react';

interface FeatureWithImageProps {
  title: string;
  description: string;
  image: ReactNode;
  imagePosition?: 'left' | 'right';
  features?: string[];
}

export default function FeatureWithImage({
  title,
  description,
  image,
  imagePosition = 'right',
  features
}: FeatureWithImageProps) {
  const content = (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
        {title}
      </h3>
      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-foreground text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageContent = (
    <div className="relative">
      {image}
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {imagePosition === 'left' ? (
        <>
          {imageContent}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageContent}
        </>
      )}
    </div>
  );
}
