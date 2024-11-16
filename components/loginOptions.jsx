import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Box, Flex, Theme } from "@chakra-ui/react";

export default function LoginOptions() {
    return (
        <Theme appearance="light" w='3/4'>
            <Flex justify={'space-evenly'}>
                <Box borderWidth="1px" mdDown={{px:'3', py:'1'}} lg={{px:'6', py:'2'}} className="cursor-pointer" borderRadius='md'>
                    <FaFacebook className="text-3xl md:text-6xl text-blue-700" />
                </Box>
                <Box borderWidth="1px" mdDown={{px:'3', py:'1'}} md={{px:'6', py:'2'}} className="cursor-pointer " borderRadius='md'><FcGoogle className="text-3xl md:text-6xl" /></Box>
                <Box borderWidth="1px" mdDown={{px:'3', py:'1'}} md={{px:'6', py:'2'}}  className="cursor-pointer "  borderRadius='md'><FaApple className="text-3xl md:text-6xl"/></Box>
            </Flex>
        </Theme>
    )
}