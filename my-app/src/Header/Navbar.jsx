import {Box,Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import image from "./4.png";
import { Link } from "react-router-dom";
import "./navbar.css"




export default function MainNavbar() {

  const { isOpen, onToggle } = useDisclosure();
  
  // const background = {
  //   background: linear-gradient(to right, #ff0000 0%, #00ff00 50%, #0000ff 100%);
  // }

  return (
    <Box
      boxSizing="border-box"
      background={"transparent"}
      maxW="99vw"
      m="auto"
      zIndex={"2"}
      position="sticky"
      top={'0px'}
     
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        pr={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        background={"#ffffff"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex justify={{ base: "center", md: "center" }}>
         
        <a href="">  <Text className="logo" >Heliverse</Text> </a>
         
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "center" }}>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={5}
            align="center"
            justify={"center"}
          >
            <DesktopNav />
          </Flex>
        </Flex>
      
{(
  <Stack
    flex={{ base: 1, md: 0 }}
    justify="flex-end"
    direction="row"
    spacing={6}
  >
    <Button
      fontSize="sm"
      fontWeight={400}
      variant="link"
    >
      Sign In
    </Button>
  </Stack>
)}

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
 
  return (
    <Stack direction={"row"} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} className="navBarMain"  >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                to="/"
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                
                _hover={{
                  textDecoration: "none",
                  color: "#a49288" ,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};


const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("yellow", "gray.900") }}
      
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#05a0e8" }}
            fontWeight={500}
            color="gray.600"
          >
            {label}
          </Text>
          <Text fontSize={"sm"} >{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#05a0e8"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
  },

  {
    label: "User",
    children: [
      {
        label: "All User",
        href: "/",
      },
      {
        label: "About",
        href: "/",
      },
      {
        label: "Blog",
        href: "/",
      },
    ],
  },

  {
    label: "Contact",
  },
  


  
];
