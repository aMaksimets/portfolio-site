import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Alexey Maksimets. All rights reserved.
    </Box>
  )
}

export default Footer