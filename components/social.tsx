import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    socialId: string
    link: string 
}

const Social: React.FC<Props> = ({socialId, link}) => (
    <div className="text-xl mr-2">
        <Link href={link}>
            <a target="_blank">
                <Image src={`/assets/${socialId}.svg`} width={20} height={20} alt={socialId} />
            </a>
        </Link>
    </div>
)

export default Social;
