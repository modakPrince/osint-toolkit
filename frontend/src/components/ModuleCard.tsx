import React from 'react';

interface ModuleCardProps {
    title: string;
    description: string;
    link: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, link }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={link} className="text-blue-500 hover:underline">
                Learn More
            </a>
        </div>
    );
};

export default ModuleCard;