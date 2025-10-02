import React from 'react';

export interface CardProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, children, className }) => (
    <div className={`bg-white rounded-lg shadow p-6 ${className ?? ''}`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
    </div>
);

export default Card;