import React from 'react';
import Image from 'next/image';
import Link from 'next/Link';

interface Props {
    name: string
    description: string
    image: string
    link: string
}

const Project: React.FC<Props> = ({ name, description, image, link }) => {
    return (
        <div>
            
        </div>
    )
}

export default Project;
