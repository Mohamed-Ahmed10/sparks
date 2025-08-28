'use client';

import { DirectionProvider } from '@radix-ui/react-direction';
import React from 'react';

type Props = {
    children: React.ReactNode;
    dir?: 'ltr' | 'rtl';
};

export default function DirectionContextProvider({ children, dir = 'ltr' }: Props) {
    return (
        <DirectionProvider dir={dir}>
            {children}
        </DirectionProvider>
    );
}
