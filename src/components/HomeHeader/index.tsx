import { HStack, Heading, Icon, Text, VStack } from 'native-base'
import { UserPhoto } from '../UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{
          uri: 'https://github.com/orloke.png',
        }}
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md">
          Júnior
        </Heading>
      </VStack>
      <TouchableOpacity activeOpacity={0.7}>
        <Icon as={MaterialIcons} name="logout" size={7} color="gray.200" />
      </TouchableOpacity>
    </HStack>
  )
}
