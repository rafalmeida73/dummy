import { Box } from '@/components/ui/box'
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button'
import React from 'react'
import { useHomeViewModel } from './model'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { CardLink } from '@/components/CardLink'
import { User } from 'lucide-react-native';
import { Bell } from 'lucide-react-native';
import { ClipboardPen } from 'lucide-react-native';
import { CustomModal } from '@/components/CustomModal'
import { StatusBar } from 'expo-status-bar'

export const HomeView = ({
  handleOpenCloseModal,
  showModal,
  handleLogout,
  isLoading,
  user
}: ReturnType<typeof useHomeViewModel>) => {

  return (
    <>
      <StatusBar style="light" />
      <Box
        className="flex-1 bg-info-700"
      >
        <Box className='h-1/4 bg-info-700' />
        <Box className='rounded-3xl bg-secondary-0 h-full items-center'>
          <Avatar size='2xl' className='absolute -mt-14'>
            <AvatarImage
              source={{
                uri: user.image,
              }}
            />
          </Avatar>
          <Heading size='2xl' className='mt-20'>{user.username}</Heading>
          <Text size='2xl' className='mt-3'>{user.email}</Text>

          <Box className='px-5 bg-re'>
            <Box className=' mt-10 gap-5'>
              <CardLink
                href="/(auth)/product/product_list"
                icon={
                  <User size={30}
                    color="#000"
                  />
                }
                title="Meus dados"
              />

              <CardLink
                href="/(auth)/product/product_list"
                icon={
                  <Bell size={30}
                    color="#000"
                  />
                }
                title="Notificações"
              />

              <CardLink
                href="/(auth)/product/product_list"
                icon={
                  <ClipboardPen size={30}
                    color="#000"
                  />
                }
                title="Termos de uso"
              />
            </Box>

            <Button
              size="lg"
              variant="solid"
              action="primary"
              className="bg-red-600 mt-8"
              onPress={handleOpenCloseModal}
            >
              <ButtonText className="font-bold w-full text-center">
                Sair da conta
              </ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>

      <CustomModal handleClose={handleOpenCloseModal} showModal={showModal} title="Sair da conta" footer={
        <Box>
          <HStack space='md'>
            <Button
              size="lg"
              variant="outline"
              action="primary"
              onPress={handleOpenCloseModal}
            >
              <ButtonText className="font-bold">Cancelar</ButtonText>
            </Button>

            <Button
              size="lg"
              variant="solid"
              action="primary"
              className="bg-error-600"
              onPress={handleLogout}
            >
              {isLoading
                ? (
                  <ButtonSpinner />
                )
                :
                (
                  <ButtonText className="font-bold">Sair</ButtonText>
                )
              }
            </Button>
          </HStack>
        </Box>
      }>
        <Text size='lg' numberOfLines={15} className='mt-3'>
          Você tem certeza que deseja sair da conta?
        </Text>
      </CustomModal>
    </>

  )
}

