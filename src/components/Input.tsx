import {
  Flex,
  Box,
  Text,
  Input
} from "@chakra-ui/react";

interface InputProps {
  tokenName: string;
  value: string;
  onChangeInput?: (newValue: string) => void;
}


export default function InputComp({ tokenName, value, onChangeInput }: InputProps) {

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    onChangeInput?.(newValue);
  }
  return (
    <Flex
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      bg="rgb(247, 248, 250)"
      p="1rem 1rem 1.7rem"
      borderRadius="1.25rem" border="0.06rem solid rgb(237, 238, 242)"
      _hover={{ border: "0.06rem solid rgb(211,211,211)" }}>
      <Box
        flexDirection="row"
        display="flex"
        width="100%"
      >
        <Box>
          <Text
            color="black"
            fontSize="30"
            pl="5px"
            fontWeight="500">
            {tokenName}
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
        >
          <Input
            placeholder="0.0"
            fontWeight="500"
            fontSize="1.5rem"
            width="100%"
            ml="10rem"
            size="19rem"
            textAlign="right"
            bg="rgb(247, 248, 250)"
            outline="none"
            border="none"
            focusBorderColor="none"
            type="number"
            color="black"
            value={value}
            onChange={handleInputChange}
          />
        </Box>
      </Box>
    </Flex>
  )
}
