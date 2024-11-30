import React from 'react';
import { Box } from '../ui/box';
import { HStack } from '../ui/hstack';
import { Text } from '../ui/text';
import { Link } from 'expo-router';
import { ICardLinkProps } from './types';
import { ChevronRight } from 'lucide-react-native';

export const CardLink = ({ title, icon, href }: ICardLinkProps) => {
  return (
    <Link href={href}>
      <Box className="border-2 border-primary-0 rounded-lg p-3 w-full">
        <HStack className='items-center justify-between'>
          <HStack className='items-center'>
            {icon}
            <Text size='lg' className='font-medium ml-3'>{title}</Text>
          </HStack>
          <ChevronRight size={30}
            color="#000"
          />
        </HStack>
      </Box>
    </Link>
  );
}

