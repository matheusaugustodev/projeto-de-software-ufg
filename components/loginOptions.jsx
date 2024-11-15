import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Box, Flex, Theme } from "@chakra-ui/react";

export default function LoginOptions() {
    return (
        <Theme appearance="light" w='3/4'>
            <Flex justify={'space-evenly'}>
                <Box borderWidth="1px" className="cursor-pointer" px='6' py='2' borderRadius='md'>
                    <FaFacebook className=" text-6xl text-blue-700" />
                </Box>
                <Box borderWidth="1px" px='6' py='2' className="cursor-pointer " borderRadius='md'><FcGoogle className=" text-6xl" /></Box>
                <Box borderWidth="1px" px='6' py='2' className="cursor-pointer "  borderRadius='md'><FaApple className=" text-6xl"/></Box>
            </Flex>
        </Theme>
    )
}