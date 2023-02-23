import React, { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import InputComp from './components/Input';
import { SettingsIcon } from '@chakra-ui/icons';
import { getAmountOut, getPath } from 'swap';

import './App.css';

function App() {

  const [value, setValue] = useState<string>("0");
  const [valueTwo, setValueTwo] = useState<string>("0");
  const [shortPath, setShortPath] = useState<string>("");

  const [isMobile] = useMediaQuery("(max-width: 768px)")

  async function handleInputChange(newValue: string) {
    setValue(newValue);
    let amount = await getAmountOut(newValue);
    setValueTwo(amount.toString());
    let shortestPath = await getPath(newValue);
    setShortPath(shortestPath.join(' > '));
  }

  return (
    <div className="App">
      <Box
        w={isMobile ? "20rem" : "30.62rem"}
        mx="auto"
        pt="10.25rem"
        boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
        borderRadius="1.37rem">

        <Flex
          alignItems="center"
          p="1rem 1.25rem 0.5rem"
          bg="white"
          color="rgb(86, 90, 105)"
          justifyContent="space-between"
          borderRadius="1.37rem 1.37rem 0 0">
          <Text
            color="black"
            fontWeight="500">
            Swap
          </Text>
          <SettingsIcon
            fontSize="1.25rem"
            cursor="pointer"
            _hover={{ color: "rgb(128,128,128)" }}
          />
        </Flex>

        <Box
          p="0.5rem"
          bg="white"
          borderRadius="0 0 1.37rem 1.37rem">

          <InputComp
            tokenName="USDC"
            value={value}
            onChangeInput={handleInputChange}
          />

          <InputComp
            tokenName="COMP"
            value={valueTwo}
          />
          <>
            {shortPath !== "" &&
              (<Box py="3rem">
                <Text
                  color="black"
                  fontWeight="500"
                  fontSize={isMobile ? "15" :"20"}
                  textAlign="center"
                >
                  ShortestPATH: {shortPath}
                </Text>
              </Box>)
            }
          </>

        </Box>

      </Box>
    </div>
  );
}

export default App;
